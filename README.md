# ERC721A Upgradeability Transpiler

:warning: **Warning** :warning:

This tool was built and tested specifically for [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts), 
and [ERC721A](https://github.com/chiru-labs/ERC721A).

It might produce incorrect results if used in any other context.

We do not recommend using it in a different context. If you're interested in doing so, get in touch with OpenZeppelin over at [forum.openzeppelin.com](https://forum.openzeppelin.com).

## Instructions

**Install dependencies:**

```
npm install
```

**Transpile ERC721A:**

```
./scripts/transpile.sh
```

This downloads the latest copy of ERC721A from Github and transpile it.

The transpiled contracts will appear in the `contracts` folder.

The original test files automatically work with the transpiled contracts.

