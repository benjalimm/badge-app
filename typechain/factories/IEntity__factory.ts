/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IEntity, IEntityInterface } from "../IEntity";

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
        internalType: "address",
        name: "assigner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IEntity.PermLevel",
        name: "assignerLevel",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assignee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IEntity.PermLevel",
        name: "assigneeLevel",
        type: "uint8",
      },
    ],
    name: "PermissionTokenAssigned",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assignee",
        type: "address",
      },
      {
        internalType: "enum IEntity.PermLevel",
        name: "level",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "assignPermissionToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBadgeRegistry",
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
    name: "getBadgeToken",
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
    name: "getPermissionToken",
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
    name: "incrementDemeritPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
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

export class IEntity__factory {
  static readonly abi = _abi;
  static createInterface(): IEntityInterface {
    return new utils.Interface(_abi) as IEntityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEntity {
    return new Contract(address, _abi, signerOrProvider) as IEntity;
  }
}
