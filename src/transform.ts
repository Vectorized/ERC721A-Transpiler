import { mapValues } from 'lodash';

import { SourceUnit, ContractDefinition } from 'solidity-ast';
import { findAll } from 'solidity-ast/utils';
import { SolcInput, SolcOutput } from './solc/output';
import { srcDecoder, SrcDecoder } from './solc/src-decoder';

import { Shift, shiftBounds } from './shifts';
import { applyTransformation } from './transformations/apply';
import { compareTransformations, compareContainment } from './transformations/compare';
import { Transformation, WithSrc } from './transformations/type';
import { isRenamed } from './rename';

export type ContractResolver = (id: number) => ContractDefinition | undefined;

type Transformer = (
  sourceUnit: SourceUnit,
  resolveContract: ContractResolver,
  originalSource: string,
) => Generator<Transformation>;

interface TransformState {
  transformations: Transformation[];
  shifts: Shift[];
  content: string;
  original: string;
}

export class Transform {
  state: {
    [file in string]: TransformState;
  } = {};

  contracts: Map<number, ContractDefinition>;
  decodeSrc: SrcDecoder;

  constructor(input: SolcInput, readonly output: SolcOutput) {
    this.decodeSrc = srcDecoder(output);

    for (const source in input.sources) {
      if (isRenamed(source)) {
        continue;
      }

      const s = input.sources[source];
      if (!('content' in s)) {
        throw new Error(`Missing content for ${source}`);
      }

      this.state[source] = {
        original: s.content,
        content: s.content,
        transformations: [],
        shifts: [],
      };
    }

    this.contracts = new Map();
    for (const source in output.sources) {
      for (const c of findAll('ContractDefinition', output.sources[source].ast)) {
        this.contracts.set(c.id, c);
      }
    }
  }

  apply(transform: Transformer): void {
    for (const source in this.state) {
      const { original } = this.state[source];

      for (const t of transform(
        this.output.sources[source].ast,
        id => this.resolveContract(id),
        original,
      )) {
        const { content, shifts, transformations } = this.state[source];
        insertSortedAndValidate(transformations, t);

        const { result, shift } = applyTransformation(t, content, shifts, this);

        shifts.push(shift);

        this.state[source].content = result;
      }
    }
  }

  read(node: WithSrc): string {
    const { source, ...bounds } = this.decodeSrc(node.src);
    const { shifts, transformations, content } = this.state[source];

    const incompatible = (t: Transformation) => {
      const c = compareContainment(t, bounds);
      return c === 'partial overlap' || (typeof c === 'number' && c > 0);
    };
    if (transformations.some(incompatible)) {
      throw new Error(`Can't read from segment that has been partially transformed`);
    }

    const sb = shiftBounds(shifts, bounds);
    return content.slice(sb.start, sb.start + sb.length);
  }

  resolveContract(id: number): ContractDefinition | undefined {
    return this.contracts.get(id);
  }

  results(): { [file in string]: string } {
    return mapValues(this.state, s => s.content);
  }
}

function insertSortedAndValidate(transformations: Transformation[], t: Transformation): void {
  transformations.push(t);
  transformations.sort(compareTransformations); // checks for overlaps
  for (let i = transformations.indexOf(t) + 1; i < transformations.length; i += 1) {
    const s = transformations[i];
    const c = compareContainment(t, s);
    if (typeof c === 'number' && c < 0) {
      throw new Error(`A bigger area has already been transformed (${s.kind} > ${t.kind})`);
    }
  }
}