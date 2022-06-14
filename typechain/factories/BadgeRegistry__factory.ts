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
    name: "badgePriceCalculator",
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
        internalType: "enum IBadgeRegistry.EntityReverseRecordType",
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
    name: "getLevelMultiplierX1000",
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
    inputs: [],
    name: "levelMultiplierX1000",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_badgePriceCalculator",
        type: "address",
      },
    ],
    name: "setBadgePriceCalculator",
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
  "0x60806040526109c46000556000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005857600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600c60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612035806101016000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c8063a4714b9a1161011a578063cb6e390c116100ad578063d6b66c581161007c578063d6b66c58146105c8578063df194208146105e4578063eab1506714610602578063ec70019014610620578063eeccbda81461063e576101fb565b8063cb6e390c14610540578063cdd8ee7f14610570578063d2502a981461058e578063d5f39488146105aa576101fb565b8063b4bf5075116100e9578063b4bf5075146104b8578063bb0a69b0146104d6578063bd8cdfd5146104f2578063c3c5a54714610510576101fb565b8063a4714b9a14610432578063a59cf7e11461044e578063a78564621461046c578063adb4bd4f1461049c576101fb565b80634849a7ed1161019257806368bc573e1161016157806368bc573e146103be5780637d090378146103dc5780639d1c1b82146103f8578063a1311ae714610416576101fb565b80634849a7ed1461031057806350ed0522146103405780635b4146c11461035e5780635f74981f1461038e576101fb565b80632af7ca6d116101ce5780632af7ca6d1461028a5780632e7fdc94146102ba5780632e860315146102d65780633a439fa1146102f2576101fb565b806309c33619146102005780631d8ee48a1461021e5780631e93e3971461024e57806327a462fe1461026c575b600080fd5b61020861065c565b6040516102159190611cad565b60405180910390f35b61023860048036038101906102339190611962565b610682565b6040516102459190611d2a565b60405180910390f35b6102566106a2565b6040516102639190611cad565b60405180910390f35b6102746106cc565b6040516102819190611cad565b60405180910390f35b6102a4600480360381019061029f9190611962565b6106f6565b6040516102b19190611cad565b60405180910390f35b6102d460048036038101906102cf9190611962565b610729565b005b6102f060048036038101906102eb9190611962565b6107fd565b005b6102fa6108d1565b6040516103079190611cad565b60405180910390f35b61032a60048036038101906103259190611962565b6108f7565b6040516103379190611d2a565b60405180910390f35b610348610917565b6040516103559190611cad565b60405180910390f35b61037860048036038101906103739190611962565b61093d565b6040516103859190611cad565b60405180910390f35b6103a860048036038101906103a39190611a55565b610970565b6040516103b59190611d08565b60405180910390f35b6103c6610c19565b6040516103d39190611cad565b60405180910390f35b6103f660048036038101906103f19190611aad565b610c43565b005b610400610fc2565b60405161040d9190611cad565b60405180910390f35b610430600480360381019061042b9190611962565b610fe8565b005b61044c60048036038101906104479190611962565b6110bc565b005b610456611190565b6040516104639190611cad565b60405180910390f35b61048660048036038101906104819190611962565b6111ba565b6040516104939190611d2a565b60405180910390f35b6104b660048036038101906104b191906119b4565b611210565b005b6104c06113a3565b6040516104cd9190611cad565b60405180910390f35b6104f060048036038101906104eb91906119f0565b6113cd565b005b6104fa6114b8565b6040516105079190611dea565b60405180910390f35b61052a60048036038101906105259190611962565b6114be565b6040516105379190611d2a565b60405180910390f35b61055a60048036038101906105559190611b36565b611514565b6040516105679190611dea565b60405180910390f35b6105786115c8565b6040516105859190611cad565b60405180910390f35b6105a860048036038101906105a39190611962565b6115ee565b005b6105b26116c2565b6040516105bf9190611cad565b60405180910390f35b6105e260048036038101906105dd9190611962565b6116e8565b005b6105ec6117bc565b6040516105f99190611dea565b60405180910390f35b61060a6117c5565b6040516106179190611cad565b60405180910390f35b6106286117ef565b6040516106359190611cad565b60405180910390f35b610646611815565b6040516106539190611cad565b60405180910390f35b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915054906101000a900460ff1681565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600b6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107b9576040517f973d02cb0000000000000000000000000000000000000000000000000000000081526004016107b090611daa565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461088d576040517f973d02cb00000000000000000000000000000000000000000000000000000000815260040161088490611daa565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c6020528060005260406000206000915054906101000a900460ff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008060018111156109ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8560018111156109e6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b146109f257600b6109f5565b600a5b905060008484905067ffffffffffffffff811115610a3c577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610a6a5781602001602082028036833780820191505090505b50905060005b85859050811015610c0c576000868683818110610ab6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610acb9190611962565b905060008460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600960008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610bf75781848481518110610bbc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b50508080610c0490611eb8565b915050610a70565b8193505050509392505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639a6aff8b8787600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338989896040518863ffffffff1660e01b8152600401610cce9796959493929190611d45565b602060405180830381600087803b158015610ce857600080fd5b505af1158015610cfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d209190611a2c565b905060008190506001600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508215610f7c5780600a60008473ffffffffffffffffffffffffffffffffffffffff16635be0eefb6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dd057600080fd5b505afa158015610de4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e08919061198b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b60008473ffffffffffffffffffffffffffffffffffffffff1663dd75b3f66040518163ffffffff1660e01b815260040160206040518083038186803b158015610ecb57600080fd5b505afa158015610edf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f03919061198b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b7f4a8632d3207d7cb50cfb7d972f4e76473b113c1801fab878aed2ee496ab0f5af81888833604051610fb19493929190611cc8565b60405180910390a150505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611078576040517f973d02cb00000000000000000000000000000000000000000000000000000000815260040161106f90611daa565b60405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461114c576040517f973d02cb00000000000000000000000000000000000000000000000000000000815260040161114390611daa565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60011515600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146112a3576040517f973d02cb00000000000000000000000000000000000000000000000000000000815260040161129a90611dca565b60405180910390fd5b33600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461145d576040517f973d02cb00000000000000000000000000000000000000000000000000000000815260040161145490611daa565b60405180910390fd5b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60005481565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e85b6125836040518263ffffffff1660e01b81526004016115719190611dea565b60206040518083038186803b15801561158957600080fd5b505afa15801561159d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c19190611b5f565b9050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461167e576040517f973d02cb00000000000000000000000000000000000000000000000000000000815260040161167590611daa565b60405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611778576040517f973d02cb00000000000000000000000000000000000000000000000000000000815260040161176f90611daa565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008135905061184a81611f93565b92915050565b60008151905061185f81611f93565b92915050565b60008083601f84011261187757600080fd5b8235905067ffffffffffffffff81111561189057600080fd5b6020830191508360208202830111156118a857600080fd5b9250929050565b6000813590506118be81611faa565b92915050565b6000815190506118d381611fc1565b92915050565b6000813590506118e881611fd8565b92915050565b60008083601f84011261190057600080fd5b8235905067ffffffffffffffff81111561191957600080fd5b60208301915083600182028301111561193157600080fd5b9250929050565b60008135905061194781611fe8565b92915050565b60008151905061195c81611fe8565b92915050565b60006020828403121561197457600080fd5b60006119828482850161183b565b91505092915050565b60006020828403121561199d57600080fd5b60006119ab84828501611850565b91505092915050565b600080604083850312156119c757600080fd5b60006119d58582860161183b565b92505060206119e68582860161183b565b9150509250929050565b60008060408385031215611a0357600080fd5b6000611a118582860161183b565b9250506020611a22858286016118af565b9150509250929050565b600060208284031215611a3e57600080fd5b6000611a4c848285016118c4565b91505092915050565b600080600060408486031215611a6a57600080fd5b6000611a78868287016118d9565b935050602084013567ffffffffffffffff811115611a9557600080fd5b611aa186828701611865565b92509250509250925092565b600080600080600060608688031215611ac557600080fd5b600086013567ffffffffffffffff811115611adf57600080fd5b611aeb888289016118ee565b9550955050602086013567ffffffffffffffff811115611b0a57600080fd5b611b16888289016118ee565b93509350506040611b29888289016118af565b9150509295509295909350565b600060208284031215611b4857600080fd5b6000611b5684828501611938565b91505092915050565b600060208284031215611b7157600080fd5b6000611b7f8482850161194d565b91505092915050565b6000611b948383611ba0565b60208301905092915050565b611ba981611e4f565b82525050565b611bb881611e4f565b82525050565b6000611bc982611e15565b611bd38185611e2d565b9350611bde83611e05565b8060005b83811015611c0f578151611bf68882611b88565b9750611c0183611e20565b925050600181019050611be2565b5085935050505092915050565b611c2581611e61565b82525050565b6000611c378385611e3e565b9350611c44838584611ea9565b611c4d83611f30565b840190509392505050565b6000611c65601b83611e3e565b9150611c7082611f41565b602082019050919050565b6000611c88601583611e3e565b9150611c9382611f6a565b602082019050919050565b611ca781611e9f565b82525050565b6000602082019050611cc26000830184611baf565b92915050565b6000606082019050611cdd6000830187611baf565b8181036020830152611cf0818587611c2b565b9050611cff6040830184611baf565b95945050505050565b60006020820190508181036000830152611d228184611bbe565b905092915050565b6000602082019050611d3f6000830184611c1c565b92915050565b600060a0820190508181036000830152611d6081898b611c2b565b9050611d6f6020830188611baf565b611d7c6040830187611baf565b8181036060830152611d8f818587611c2b565b9050611d9e6080830184611c1c565b98975050505050505050565b60006020820190508181036000830152611dc381611c58565b9050919050565b60006020820190508181036000830152611de381611c7b565b9050919050565b6000602082019050611dff6000830184611c9e565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611e5a82611e7f565b9050919050565b60008115159050919050565b6000611e7882611e4f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b6000611ec382611e9f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ef657611ef5611f01565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f4f6e6c79206465706c6f7965722063616e2063616c6c20746869730000000000600082015250565b7f456e74697479206e6f7420726567697374657265640000000000000000000000600082015250565b611f9c81611e4f565b8114611fa757600080fd5b50565b611fb381611e61565b8114611fbe57600080fd5b50565b611fca81611e6d565b8114611fd557600080fd5b50565b60028110611fe557600080fd5b50565b611ff181611e9f565b8114611ffc57600080fd5b5056fea26469706673582212206f9f63685fd84e8c0d6954ffb4b873a55134d818f2a627381c3d76a96254288c64736f6c63430008040033";

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
