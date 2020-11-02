# Snapshot report for `src/transform.test.ts`

The actual snapshot is saved in `transform.test.ts.snap`.

Generated by [AVA](https://avajs.dev).

## append initializable import

> Snapshot 1

    `pragma solidity ^0.6.0;␊
    ␊
    import './Imported.sol';␊
    import "./Initializable.sol";␊
    ␊
    contract Local is Imported2 {␊
        constructor(uint x, uint y) Imported2(x, y) public { }␊
    }␊
    `

## fix import directives

> Snapshot 1

    `pragma solidity ^0.6.0;␊
    ␊
    import "./ImportedUpgradeSafe.sol";␊
    ␊
    contract Local is Imported2 {␊
        constructor(uint x, uint y) Imported2(x, y) public { }␊
    }␊
    `

## prepend Initializable base

> Snapshot 1

    `pragma solidity ^0.6.0;␊
    ␊
    library RenameLibrary {␊
        function test() external {␊
        }␊
    }␊
    ␊
    contract RenameContract is Initializable {␊
    }␊
    ␊
    contract RenameDeployer is Initializable {␊
        RenameContract rc = RenameContract(0);␊
    ␊
        constructor() public {␊
            new RenameContract();␊
        }␊
    ␊
        function deploy() external returns (RenameContract) {␊
            return new RenameContract();␊
        }␊
    ␊
        function test() external {␊
            RenameLibrary.test();␊
        }␊
    }␊
    `

## purge var inits

> Snapshot 1

    `pragma solidity ^0.6.0;␊
    ␊
    contract ElementaryTypes  {␊
        address public owner;␊
        bool active;␊
        string hello;␊
        int count;␊
        uint ucount;␊
        bytes32 samevar;␊
    }␊
    `

## remove functions

> Snapshot 1

    `pragma solidity ^0.6;␊
    ␊
    contract RemoveFunctions {␊
        ␊
        ␊
    }␊
    `

## remove inheritance args

> Snapshot 1

    `pragma solidity ^0.6;␊
    ␊
    contract A {␊
        constructor(uint) public {}␊
    }␊
    ␊
    contract B is A {}␊
    `

## rename identifiers

> Snapshot 1

    `pragma solidity ^0.6.0;␊
    ␊
    library RenameLibrary {␊
        function test() external {␊
        }␊
    }␊
    ␊
    contract RenameContract {␊
    }␊
    ␊
    contract RenameDeployer {␊
        RenameContractUpgradeSafe rc = RenameContractUpgradeSafe(0);␊
    ␊
        constructor() public {␊
            new RenameContractUpgradeSafe();␊
        }␊
    ␊
        function deploy() external returns (RenameContractUpgradeSafe) {␊
            return new RenameContractUpgradeSafe();␊
        }␊
    ␊
        function test() external {␊
            RenameLibraryUpgradeSafe.test();␊
        }␊
    }␊
    `

## transform constructor

> Snapshot 1

    `pragma solidity ^0.6;␊
    ␊
    contract Foo1 {␊
        function __Foo1_init() internal initializer {␊
            __Foo1_init_unchained();␊
        }␊
    ␊
        function __Foo1_init_unchained() internal initializer {␊
        }␊
    }␊
    ␊
    contract Foo2 {␊
        event Ev();␊
        function __Foo2_init() internal initializer {␊
            __Foo2_init_unchained();␊
        }␊
    ␊
        function __Foo2_init_unchained() internal initializer {␊
            emit Ev();␊
        }␊
    }␊
    ␊
    contract Foo3 {␊
        function __Foo3_init() internal initializer {␊
            __Foo3_init_unchained();␊
        }␊
    ␊
        function __Foo3_init_unchained() internal initializer {␊
            x = 1;␊
        }␊
        uint x = 1;␊
    }␊
    ␊
    contract Foo4 {␊
        uint x = 1;␊
        event Ev();␊
        function __Foo4_init() internal initializer {␊
            __Foo4_init_unchained();␊
        }␊
    ␊
        function __Foo4_init_unchained() internal initializer {␊
            x = 1;␊
            emit Ev();␊
        }␊
    }␊
    ␊
    contract Bar1 {␊
        function __Bar1_init() internal initializer {␊
            __Bar1_init_unchained();␊
        }␊
    ␊
        function __Bar1_init_unchained() internal initializer {␊
        }␊
    ␊
    }␊
    ␊
    contract Bar2 is Bar1 {␊
        function __Bar2_init() internal initializer {␊
            __Bar1_init_unchained();␊
            __Bar2_init_unchained();␊
        }␊
    ␊
        function __Bar2_init_unchained() internal initializer {␊
        }␊
    ␊
    }␊
    ␊
    contract Bar3 is Bar2 {␊
        function __Bar3_init() internal initializer {␊
            __Bar1_init_unchained();␊
            __Bar2_init_unchained();␊
            __Bar3_init_unchained();␊
        }␊
    ␊
        function __Bar3_init_unchained() internal initializer {␊
        }␊
    ␊
    }␊
    `

## transform contract name

> Snapshot 1

    `pragma solidity ^0.6.0;␊
    ␊
    library RenameLibraryUpgradeSafe {␊
        function test() external {␊
        }␊
    }␊
    ␊
    contract RenameContractUpgradeSafe {␊
    }␊
    ␊
    contract RenameDeployerUpgradeSafe {␊
        RenameContract rc = RenameContract(0);␊
    ␊
        constructor() public {␊
            new RenameContract();␊
        }␊
    ␊
        function deploy() external returns (RenameContract) {␊
            return new RenameContract();␊
        }␊
    ␊
        function test() external {␊
            RenameLibrary.test();␊
        }␊
    }␊
    `