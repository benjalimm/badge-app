/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBadgeRecoveryOracle,
  IBadgeRecoveryOracleInterface,
} from "../IBadgeRecoveryOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getRecoveryAddress",
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
        name: "_recoveryAddress",
        type: "address",
      },
    ],
    name: "setRecoveryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBadgeRecoveryOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IBadgeRecoveryOracleInterface {
    return new utils.Interface(_abi) as IBadgeRecoveryOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBadgeRecoveryOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBadgeRecoveryOracle;
  }
}
