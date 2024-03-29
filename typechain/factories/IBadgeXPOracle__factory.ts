/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBadgeXPOracle,
  IBadgeXPOracleInterface,
} from "../IBadgeXPOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "calculateXP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class IBadgeXPOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IBadgeXPOracleInterface {
    return new utils.Interface(_abi) as IBadgeXPOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBadgeXPOracle {
    return new Contract(address, _abi, signerOrProvider) as IBadgeXPOracle;
  }
}
