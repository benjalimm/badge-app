/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBadgeRegistry,
  IBadgeRegistryInterface,
} from "../IBadgeRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "badgePriceCalculator",
        type: "address",
      },
    ],
    name: "BadgePriceCalculatorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "badgeTokenFactory",
        type: "address",
      },
    ],
    name: "BadgeTokenFactorySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "badgeXPToken",
        type: "address",
      },
    ],
    name: "BadgeXPTokenSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "entityFactory",
        type: "address",
      },
    ],
    name: "EntityFactorySet",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "permissionTokenFactory",
        type: "address",
      },
    ],
    name: "PermissionTokenFactorySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recoveryOracle",
        type: "address",
      },
    ],
    name: "RecoveryOracleSet",
    type: "event",
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
        internalType: "string",
        name: "entityName",
        type: "string",
      },
      {
        internalType: "string",
        name: "genesisTokenURI",
        type: "string",
      },
    ],
    name: "registerEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBadgeRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IBadgeRegistryInterface {
    return new utils.Interface(_abi) as IBadgeRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBadgeRegistry {
    return new Contract(address, _abi, signerOrProvider) as IBadgeRegistry;
  }
}
