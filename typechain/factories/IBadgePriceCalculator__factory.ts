/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBadgePriceCalculator,
  IBadgePriceCalculatorInterface,
} from "../IBadgePriceCalculator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "calculateBadgePrice",
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
];

export class IBadgePriceCalculator__factory {
  static readonly abi = _abi;
  static createInterface(): IBadgePriceCalculatorInterface {
    return new utils.Interface(_abi) as IBadgePriceCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBadgePriceCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBadgePriceCalculator;
  }
}