# Snapshot report for `test/solc-0.6/test.js`

The actual snapshot is saved in `test.js.snap`.

Generated by [AVA](https://avajs.dev).

## ClassInheritance.sol

> Snapshot 1

    {
      fileName: 'ClassInheritance.sol',
      path: './contracts/ClassInheritanceUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      contract CIAUpgradeSafe is Initializable {␊
          uint256 public foo;␊
          event log(string);␊
          ␊
          function __CIA_init(uint bar) internal initializer {␊
              __CIA_init_unchained(bar);␊
          }␊
      ␊
          function __CIA_init_unchained(uint bar) internal initializer {␊
              ␊
              ␊
              foo = bar;␊
              emit log("SIA");␊
          ␊
          }␊
      ␊
      }␊
      ␊
      contract CIBUpgradeSafe is Initializable, CIAUpgradeSafe {␊
          function __CIB_init() internal initializer {␊
              __CIA_init_unchained(324);␊
              __CIB_init_unchained();␊
          }␊
      ␊
          function __CIB_init_unchained() internal initializer {␊
              ␊
              val = 123;␊
              ␊
          }␊
      ␊
          uint256 public val ;␊
      }␊
      `,
    }

## Deep.sol

> Snapshot 1

    {
      fileName: 'Deep.sol',
      path: './contracts/one/two/three/DeepUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      ␊
      import "../../../ElementaryTypesUpgradeSafe.sol";␊
      import "../../../Initializable.sol";␊
      ␊
      contract DeepUpgradeSafe is Initializable {␊
          function __Deep_init() internal initializer {␊
              __Deep_init_unchained();␊
          }␊
      ␊
          function __Deep_init_unchained() internal initializer {␊
              ␊
              ␊
          }␊
      }␊
      `,
    }

## DiamondInheritance.sol

> Snapshot 1

    {
      fileName: 'DiamondInheritance.sol',
      path: './contracts/DiamondInheritanceUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      contract DAUpgradeSafe is Initializable {␊
          event Log(string);␊
          uint256 public foo ;␊
          ␊
          function __DA_init() internal initializer {␊
              __DA_init_unchained();␊
          }␊
      ␊
          function __DA_init_unchained() internal initializer {␊
              ␊
              foo = 42;␊
              ␊
              emit Log("DA");␊
          ␊
          }␊
      ␊
      }␊
      ␊
      contract DB1UpgradeSafe is Initializable, DAUpgradeSafe {␊
          string public hello ;␊
          ␊
          function __DB1_init() internal initializer {␊
              __DA_init_unchained();␊
              __DB1_init_unchained();␊
          }␊
      ␊
          function __DB1_init_unchained() internal initializer {␊
              ␊
              hello = "hello";␊
              ␊
              emit Log("DB1");␊
          ␊
          }␊
      ␊
      }␊
      ␊
      contract DB2UpgradeSafe is Initializable, DAUpgradeSafe {␊
          bool public bar ;␊
          ␊
          function __DB2_init() internal initializer {␊
              __DA_init_unchained();␊
              __DB2_init_unchained();␊
          }␊
      ␊
          function __DB2_init_unchained() internal initializer {␊
              ␊
              bar = true;␊
              ␊
              emit Log("DB2");␊
          ␊
          }␊
      ␊
      }␊
      ␊
      contract DCUpgradeSafe is Initializable, DB2UpgradeSafe, DB1UpgradeSafe {␊
          address public owner ;␊
          ␊
          function __DC_init() internal initializer {␊
              __DA_init_unchained();␊
              __DB2_init_unchained();␊
              __DB1_init_unchained();␊
              __DC_init_unchained();␊
          }␊
      ␊
          function __DC_init_unchained() internal initializer {␊
              ␊
              owner = address(0x123);␊
              ␊
              emit Log("DC");␊
          ␊
          }␊
      ␊
      }␊
      `,
    }

## ElementaryTypes.sol

> Snapshot 1

    {
      fileName: 'ElementaryTypes.sol',
      path: './contracts/ElementaryTypesUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      contract ElementaryTypesUpgradeSafe is Initializable  {␊
          function __ElementaryTypes_init() internal initializer {␊
              __ElementaryTypes_init_unchained();␊
          }␊
      ␊
          function __ElementaryTypes_init_unchained() internal initializer {␊
              ␊
              owner = address(0x123);␊
              active = true;␊
              hello = "hello";␊
              count = -123;␊
              ucount = 123;␊
              samevar = "stringliteral";␊
              ␊
          }␊
      ␊
          address public owner ;␊
          bool active ;␊
          string hello ;␊
          int count ;␊
          uint ucount ;␊
          bytes32 samevar ;␊
      }␊
      `,
    }

## ElementaryTypesWithConstructor.sol

> Snapshot 1

    {
      fileName: 'ElementaryTypesWithConstructor.sol',
      path: './contracts/ElementaryTypesWithConstructorUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      contract ElementaryTypesWithConstructorUpgradeSafe is Initializable  {␊
          address public owner;␊
          bool active;␊
          string hello;␊
          int count;␊
          uint ucount;␊
          bytes32 samevar;␊
      ␊
          ␊
          function __ElementaryTypesWithConstructor_init() internal initializer {␊
              __ElementaryTypesWithConstructor_init_unchained();␊
          }␊
      ␊
          function __ElementaryTypesWithConstructor_init_unchained() internal initializer {␊
              ␊
              ␊
              owner = address(0x123);␊
              active = true;␊
              hello = "hello";␊
              count = -123;␊
              ucount = 123;␊
              samevar = "stringliteral";␊
          ␊
          }␊
      ␊
      }␊
      `,
    }

## Imported.sol

> Snapshot 1

    {
      fileName: 'Imported.sol',
      path: './contracts/ImportedUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      contract Imported1UpgradeSafe is Initializable {␊
        ␊
          function __Imported1_init(uint256 x, uint256 y) internal initializer {␊
              __Imported1_init_unchained(x, y);␊
          }␊
      ␊
          function __Imported1_init_unchained(uint256 x, uint256 y) internal initializer {␊
              ␊
               ␊
          }␊
      ␊
      }␊
      ␊
      contract Imported2UpgradeSafe is Initializable, Imported1UpgradeSafe {␊
        ␊
          function __Imported2_init(uint256 x, uint256 y) internal initializer {␊
              __Imported1_init_unchained(x, y);␊
              __Imported2_init_unchained(x, y);␊
          }␊
      ␊
          function __Imported2_init_unchained(uint256 x, uint256 y) internal initializer {␊
              ␊
               ␊
          }␊
      ␊
      }␊
      `,
    }

## Local.sol

> Snapshot 1

    {
      fileName: 'Local.sol',
      path: './contracts/LocalUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      ␊
      import "./ImportedUpgradeSafe.sol";␊
      import "./Initializable.sol";␊
      ␊
      contract LocalUpgradeSafe is Initializable, Imported2UpgradeSafe {␊
          ␊
          function __Local_init(uint x, uint y) internal initializer {␊
              __Imported1_init_unchained(x, y);␊
              __Imported2_init_unchained(x, y);␊
              __Local_init_unchained(x, y);␊
          }␊
      ␊
          function __Local_init_unchained(uint x, uint y) internal initializer {␊
              ␊
               ␊
          }␊
      ␊
      }␊
      `,
    }

## Override.sol

> Snapshot 1

    {
      fileName: 'Override.sol',
      path: './contracts/OverrideUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      contract Parent1UpgradeSafe is Initializable {␊
          function __Parent1_init() internal initializer {␊
              __Parent1_init_unchained();␊
          }␊
      ␊
          function __Parent1_init_unchained() internal initializer {␊
              ␊
              ␊
          }␊
      ␊
        function foo() public virtual {␊
        }␊
      ␊
        function bar() public virtual {␊
        }␊
      }␊
      ␊
      contract Parent2UpgradeSafe is Initializable {␊
          function __Parent2_init() internal initializer {␊
              __Parent2_init_unchained();␊
          }␊
      ␊
          function __Parent2_init_unchained() internal initializer {␊
              ␊
              ␊
          }␊
      ␊
        function foo() public virtual {␊
        }␊
      }␊
      ␊
      contract ChildUpgradeSafe is Initializable, Parent1UpgradeSafe, Parent2UpgradeSafe {␊
          function __Child_init() internal initializer {␊
              __Parent1_init_unchained();␊
              __Parent2_init_unchained();␊
              __Child_init_unchained();␊
          }␊
      ␊
          function __Child_init_unchained() internal initializer {␊
              ␊
              ␊
          }␊
      ␊
        function foo() public override(Parent1UpgradeSafe, Parent2UpgradeSafe) {␊
        }␊
      ␊
        function bar() public override {␊
        }␊
      }␊
      `,
    }

## SimpleInheritance.sol

> Snapshot 1

    {
      fileName: 'SimpleInheritance.sol',
      path: './contracts/SimpleInheritanceUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      contract SIAUpgradeSafe is Initializable {␊
          uint256 public foo;␊
          event log(string);␊
          ␊
          function __SIA_init() internal initializer {␊
              __SIA_init_unchained();␊
          }␊
      ␊
          function __SIA_init_unchained() internal initializer {␊
              ␊
              ␊
              emit log("SIA");␊
          ␊
          }␊
      ␊
      }␊
      ␊
      contract SIBUpgradeSafe is Initializable, SIAUpgradeSafe {␊
          function __SIB_init() internal initializer {␊
              __SIA_init_unchained();␊
              __SIB_init_unchained();␊
          }␊
      ␊
          function __SIB_init_unchained() internal initializer {␊
              ␊
              val = 123;␊
              ␊
          }␊
      ␊
          uint256 public val ;␊
      }␊
      ␊
      contract SICUpgradeSafe is Initializable, SIBUpgradeSafe {␊
          string public bar ;␊
          ␊
          function __SIC_init() internal initializer {␊
              __SIA_init_unchained();␊
              __SIB_init_unchained();␊
              __SIC_init_unchained();␊
          }␊
      ␊
          function __SIC_init_unchained() internal initializer {␊
              ␊
              bar = "hello";␊
              ␊
              bar = "changed";␊
              emit log("SIC");␊
          ␊
          }␊
      ␊
      }␊
      `,
    }

## StringConstructor.sol

> Snapshot 1

    {
      fileName: 'StringConstructor.sol',
      path: './contracts/StringConstructorUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      contract StringConstructorUpgradeSafe is Initializable {␊
          ␊
          function __StringConstructor_init(string memory message) internal initializer {␊
              __StringConstructor_init_unchained(message);␊
          }␊
      ␊
          function __StringConstructor_init_unchained(string memory message) internal initializer {␊
              ␊
              ␊
      ␊
          ␊
          }␊
      ␊
      }␊
      `,
    }

## AbstractContract.sol

> Snapshot 1

    {
      fileName: 'AbstractContract.sol',
      path: './contracts/AbstractContractUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      import "./Initializable.sol";␊
      ␊
      abstract contract AbstractContractUpgradeSafe is Initializable {␊
          function __AbstractContract_init() internal initializer {␊
              __AbstractContract_init_unchained();␊
          }␊
      ␊
          function __AbstractContract_init_unchained() internal initializer {␊
              ␊
              ␊
          }␊
      ␊
      }␊
      `,
    }

## Library.sol

> Snapshot 1

    {
      fileName: 'Library.sol',
      path: './contracts/LibraryUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      ␊
      library LibraryUpgradeSafe {␊
      }␊
      `,
    }

## Interface.sol

> Snapshot 1

    {
      fileName: 'Interface.sol',
      path: './contracts/InterfaceUpgradeSafe.sol',
      source: `pragma solidity ^0.6.0;␊
      ␊
      interface InterfaceUpgradeSafe {␊
      }␊
      `,
    }