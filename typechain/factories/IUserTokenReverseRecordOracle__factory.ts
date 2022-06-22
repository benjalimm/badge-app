/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IUserTokenReverseRecordOracle,
  IUserTokenReverseRecordOracleInterface,
} from "../IUserTokenReverseRecordOracle";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "addBadgeReverseRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "addPermTokenReverseRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "badgeToken",
        type: "address",
      },
    ],
    name: "doesBadgeReverseRecordExists",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "permToken",
        type: "address",
      },
    ],
    name: "doesPermReverseRecordExists",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getBadgeReverseRecord",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getPermTokenReverseRecord",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "removeBadgeReverseRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "removePermReverseRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IUserTokenReverseRecordOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IUserTokenReverseRecordOracleInterface {
    return new utils.Interface(_abi) as IUserTokenReverseRecordOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUserTokenReverseRecordOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUserTokenReverseRecordOracle;
  }
}