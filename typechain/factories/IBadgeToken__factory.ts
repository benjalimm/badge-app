/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBadgeToken, IBadgeTokenInterface } from "../IBadgeToken";

const _abi = [
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
        internalType: "bool",
        name: "withPrejudice",
        type: "bool",
      },
    ],
    name: "BadgeBurned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "entity",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "BadgeMinted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burnWithPrejudice",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mintBadge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IBadgeToken__factory {
  static readonly abi = _abi;
  static createInterface(): IBadgeTokenInterface {
    return new utils.Interface(_abi) as IBadgeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBadgeToken {
    return new Contract(address, _abi, signerOrProvider) as IBadgeToken;
  }
}
