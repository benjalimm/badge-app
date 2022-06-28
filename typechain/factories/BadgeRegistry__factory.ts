/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BadgeRegistry, BadgeRegistryInterface } from "../BadgeRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "entityAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "entityName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "genesisTokenHolder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "permissionToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "badgeToken",
        type: "address",
      },
    ],
    name: "EntityRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "badgeGnosisSafe",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "badgePriceOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "badgeTokenEntityReverseRecord",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "badgeTokenFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "badgeXPToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseMinimumStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "certifiedRegistries",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "entities",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entityFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum BadgeRegistry.EntityReverseRecordType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "filterAddressesForEntityReverseRecord",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "getBadgePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBadgeTokenFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBadgeXPToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBaseMinimumStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntityFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPermissionTokenFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecoveryOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSafe",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    name: "isRegistryCertified",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "permTokenEntityReverseRecord",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "permissionTokenFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "entityName",
        type: "string",
      },
      {
        internalType: "string",
        name: "genesisTokenURI",
        type: "string",
      },
      {
        internalType: "bool",
        name: "deployTokens",
        type: "bool",
      },
    ],
    name: "registerEntity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_badgePriceOracle",
        type: "address",
      },
    ],
    name: "setBadgePriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_badgeTokenFactory",
        type: "address",
      },
    ],
    name: "setBadgeTokenFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_badgeXPToken",
        type: "address",
      },
    ],
    name: "setBadgeXPToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_baseMinimumStake",
        type: "uint256",
      },
    ],
    name: "setBaseMinimumStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_certifiedRegistry",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_certified",
        type: "bool",
      },
    ],
    name: "setCertifiedRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_entityFactory",
        type: "address",
      },
    ],
    name: "setEntityFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_permissionTokenFactory",
        type: "address",
      },
    ],
    name: "setPermissionTokenFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recoveryOracle",
        type: "address",
      },
    ],
    name: "setRecoveryOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "perm",
        type: "address",
      },
      {
        internalType: "address",
        name: "badge",
        type: "address",
      },
    ],
    name: "setTokenReverseRecords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555066354a6ba7a18000600c5534801561005d57600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506124e6806101056000396000f3fe6080604052600436106101f95760003560e01c80637d0903781161010d578063bfbaade7116100a0578063d2502a981161006f578063d2502a9814610750578063d5f3948814610779578063d6b66c58146107a4578063eab15067146107cd578063ec700190146107f8576101f9565b8063bfbaade714610682578063c3c5a547146106ab578063cb6e390c146106e8578063cdd8ee7f14610725576101f9565b8063a7856462116100dc578063a7856462146105c8578063adb4bd4f14610605578063b4bf50751461062e578063bb0a69b014610659576101f9565b80637d0903781461052d5780639d1c1b8214610549578063a4714b9a14610574578063a59cf7e11461059d576101f9565b806339c2c47f1161019057806354356f371161015f57806354356f37146104345780635b4146c11461045f5780635f74981f1461049c57806368bc573e146104d9578063745851e214610504576101f9565b806339c2c47f146103765780633a439fa1146103a15780634849a7ed146103cc57806350ed052214610409576101f9565b80632af7ca6d116101cc5780632af7ca6d146102bc5780632e7fdc94146102f95780632e8603151461032257806330f3130e1461034b576101f9565b806309c33619146101fe5780631d8ee48a146102295780631e93e3971461026657806327a462fe14610291575b600080fd5b34801561020a57600080fd5b50610213610823565b604051610220919061207c565b60405180910390f35b34801561023557600080fd5b50610250600480360381019061024b9190611cb3565b610849565b60405161025d9190612115565b60405180910390f35b34801561027257600080fd5b5061027b610869565b604051610288919061207c565b60405180910390f35b34801561029d57600080fd5b506102a6610893565b6040516102b3919061207c565b60405180910390f35b3480156102c857600080fd5b506102e360048036038101906102de9190611cb3565b6108bd565b6040516102f0919061207c565b60405180910390f35b34801561030557600080fd5b50610320600480360381019061031b9190611cb3565b6108f0565b005b34801561032e57600080fd5b5061034960048036038101906103449190611cb3565b6109c2565b005b34801561035757600080fd5b50610360610a94565b60405161036d9190612215565b60405180910390f35b34801561038257600080fd5b5061038b610a9e565b6040516103989190612215565b60405180910390f35b3480156103ad57600080fd5b506103b6610aa4565b6040516103c3919061207c565b60405180910390f35b3480156103d857600080fd5b506103f360048036038101906103ee9190611cb3565b610aca565b6040516104009190612115565b60405180910390f35b34801561041557600080fd5b5061041e610aea565b60405161042b919061207c565b60405180910390f35b34801561044057600080fd5b50610449610b10565b604051610456919061207c565b60405180910390f35b34801561046b57600080fd5b5061048660048036038101906104819190611cb3565b610b36565b604051610493919061207c565b60405180910390f35b3480156104a857600080fd5b506104c360048036038101906104be9190611da6565b610b69565b6040516104d091906120f3565b60405180910390f35b3480156104e557600080fd5b506104ee610e12565b6040516104fb919061207c565b60405180910390f35b34801561051057600080fd5b5061052b60048036038101906105269190611cb3565b610e3c565b005b61054760048036038101906105429190611dfe565b610f0e565b005b34801561055557600080fd5b5061055e61138e565b60405161056b919061207c565b60405180910390f35b34801561058057600080fd5b5061059b60048036038101906105969190611cb3565b6113b4565b005b3480156105a957600080fd5b506105b2611486565b6040516105bf919061207c565b60405180910390f35b3480156105d457600080fd5b506105ef60048036038101906105ea9190611cb3565b6114b0565b6040516105fc9190612115565b60405180910390f35b34801561061157600080fd5b5061062c60048036038101906106279190611d05565b611506565b005b34801561063a57600080fd5b50610643611699565b604051610650919061207c565b60405180910390f35b34801561066557600080fd5b50610680600480360381019061067b9190611d41565b6116c3565b005b34801561068e57600080fd5b506106a960048036038101906106a49190611e87565b6117ac565b005b3480156106b757600080fd5b506106d260048036038101906106cd9190611cb3565b611844565b6040516106df9190612115565b60405180910390f35b3480156106f457600080fd5b5061070f600480360381019061070a9190611e87565b61189a565b60405161071c9190612215565b60405180910390f35b34801561073157600080fd5b5061073a61194e565b604051610747919061207c565b60405180910390f35b34801561075c57600080fd5b5061077760048036038101906107729190611cb3565b611974565b005b34801561078557600080fd5b5061078e611a46565b60405161079b919061207c565b60405180910390f35b3480156107b057600080fd5b506107cb60048036038101906107c69190611cb3565b611a6a565b005b3480156107d957600080fd5b506107e2611b3c565b6040516107ef919061207c565b60405180910390f35b34801561080457600080fd5b5061080d611b66565b60405161081a919061207c565b60405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60086020528060005260406000206000915054906101000a900460ff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600a6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461097e576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401610975906121d5565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a50576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401610a47906121d5565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600c54905090565b600c5481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b6020528060005260406000206000915054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000806001811115610ba6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b856001811115610bdf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610beb57600a610bee565b60095b905060008484905067ffffffffffffffff811115610c35577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610c635781602001602082028036833780820191505090505b50905060005b85859050811015610e05576000868683818110610caf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610cc49190611cb3565b905060008460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610df05781848481518110610db5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b50508080610dfd906122ee565b915050610c69565b8193505050509392505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610eca576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401610ec1906121d5565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639a6aff8b8787600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338989896040518863ffffffff1660e01b8152600401610f999796959493929190612130565b602060405180830381600087803b158015610fb357600080fd5b505af1158015610fc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610feb9190611d7d565b905060008190506001600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600080841561134257600c54341015611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108f90612195565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff16635be0eefb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156110de57600080fd5b505afa1580156110f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111169190611cdc565b91508373ffffffffffffffffffffffffffffffffffffffff1663dd75b3f66040518163ffffffff1660e01b815260040160206040518083038186803b15801561115e57600080fd5b505afa158015611172573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111969190611cdc565b905060008273ffffffffffffffffffffffffffffffffffffffff16346040516111be90612067565b60006040518083038185875af1925050503d80600081146111fb576040519150601f19603f3d011682016040523d82523d6000602084013e611200565b606091505b5050905080611244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123b906121b5565b60405180910390fd5b83600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b7fa07c9c0b87be8f24d06157f823dde07d0c0ef0fc0d0debcf32beef051209e45d838a8a33858760405161137b96959493929190612097565b60405180910390a1505050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611442576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401611439906121d5565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611599576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401611590906121f5565b60405180910390fd5b33600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611751576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401611748906121d5565b60405180910390fd5b80600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461183a576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401611831906121d5565b60405180910390fd5b80600c8190555050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e85b6125836040518263ffffffff1660e01b81526004016118f79190612215565b60206040518083038186803b15801561190f57600080fd5b505afa158015611923573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119479190611eb0565b9050919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a02576040517f973d02cb0000000000000000000000000000000000000000000000000000000081526004016119f9906121d5565b60405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611af8576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401611aef906121d5565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081359050611b9b81612444565b92915050565b600081519050611bb081612444565b92915050565b60008083601f840112611bc857600080fd5b8235905067ffffffffffffffff811115611be157600080fd5b602083019150836020820283011115611bf957600080fd5b9250929050565b600081359050611c0f8161245b565b92915050565b600081519050611c2481612472565b92915050565b600081359050611c3981612489565b92915050565b60008083601f840112611c5157600080fd5b8235905067ffffffffffffffff811115611c6a57600080fd5b602083019150836001820283011115611c8257600080fd5b9250929050565b600081359050611c9881612499565b92915050565b600081519050611cad81612499565b92915050565b600060208284031215611cc557600080fd5b6000611cd384828501611b8c565b91505092915050565b600060208284031215611cee57600080fd5b6000611cfc84828501611ba1565b91505092915050565b60008060408385031215611d1857600080fd5b6000611d2685828601611b8c565b9250506020611d3785828601611b8c565b9150509250929050565b60008060408385031215611d5457600080fd5b6000611d6285828601611b8c565b9250506020611d7385828601611c00565b9150509250929050565b600060208284031215611d8f57600080fd5b6000611d9d84828501611c15565b91505092915050565b600080600060408486031215611dbb57600080fd5b6000611dc986828701611c2a565b935050602084013567ffffffffffffffff811115611de657600080fd5b611df286828701611bb6565b92509250509250925092565b600080600080600060608688031215611e1657600080fd5b600086013567ffffffffffffffff811115611e3057600080fd5b611e3c88828901611c3f565b9550955050602086013567ffffffffffffffff811115611e5b57600080fd5b611e6788828901611c3f565b93509350506040611e7a88828901611c00565b9150509295509295909350565b600060208284031215611e9957600080fd5b6000611ea784828501611c89565b91505092915050565b600060208284031215611ec257600080fd5b6000611ed084828501611c9e565b91505092915050565b6000611ee58383611ef1565b60208301905092915050565b611efa81612285565b82525050565b611f0981612285565b82525050565b6000611f1a82612240565b611f248185612258565b9350611f2f83612230565b8060005b83811015611f60578151611f478882611ed9565b9750611f528361224b565b925050600181019050611f33565b5085935050505092915050565b611f7681612297565b82525050565b6000611f888385612274565b9350611f958385846122df565b611f9e83612366565b840190509392505050565b6000611fb6601083612274565b9150611fc182612377565b602082019050919050565b6000611fd9602183612274565b9150611fe4826123a0565b604082019050919050565b6000611ffc601b83612274565b9150612007826123ef565b602082019050919050565b600061201f601583612274565b915061202a82612418565b602082019050919050565b6000612042600083612269565b915061204d82612441565b600082019050919050565b612061816122d5565b82525050565b600061207282612035565b9150819050919050565b60006020820190506120916000830184611f00565b92915050565b600060a0820190506120ac6000830189611f00565b81810360208301526120bf818789611f7c565b90506120ce6040830186611f00565b6120db6060830185611f00565b6120e86080830184611f00565b979650505050505050565b6000602082019050818103600083015261210d8184611f0f565b905092915050565b600060208201905061212a6000830184611f6d565b92915050565b600060a082019050818103600083015261214b81898b611f7c565b905061215a6020830188611f00565b6121676040830187611f00565b818103606083015261217a818587611f7c565b90506121896080830184611f6d565b98975050505050505050565b600060208201905081810360008301526121ae81611fa9565b9050919050565b600060208201905081810360008301526121ce81611fcc565b9050919050565b600060208201905081810360008301526121ee81611fef565b9050919050565b6000602082019050818103600083015261220e81612012565b9050919050565b600060208201905061222a6000830184612058565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000612290826122b5565b9050919050565b60008115159050919050565b60006122ae82612285565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60006122f9826122d5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561232c5761232b612337565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f4e6f7420656e6f756768207374616b6500000000000000000000000000000000600082015250565b7f4661696c656420746f2073656e642065746820746f20626164676520746f6b6560008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79206465706c6f7965722063616e2063616c6c20746869730000000000600082015250565b7f456e74697479206e6f7420726567697374657265640000000000000000000000600082015250565b50565b61244d81612285565b811461245857600080fd5b50565b61246481612297565b811461246f57600080fd5b50565b61247b816122a3565b811461248657600080fd5b50565b6002811061249657600080fd5b50565b6124a2816122d5565b81146124ad57600080fd5b5056fea26469706673582212202231fe36a502a443e980fbeedd1e0999ebb6bc5e2978ae832524db030746aa9b64736f6c63430008040033";

export class BadgeRegistry__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BadgeRegistry> {
    return super.deploy(overrides || {}) as Promise<BadgeRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadgeRegistry {
    return super.attach(address) as BadgeRegistry;
  }
  connect(signer: Signer): BadgeRegistry__factory {
    return super.connect(signer) as BadgeRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadgeRegistryInterface {
    return new utils.Interface(_abi) as BadgeRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadgeRegistry {
    return new Contract(address, _abi, signerOrProvider) as BadgeRegistry;
  }
}
