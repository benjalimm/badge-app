/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BadgePriceCalculator,
  BadgePriceCalculatorInterface,
} from "../BadgePriceCalculator";

const _abi = [
  {
    inputs: [],
    name: "baseBadgePrice",
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
];

const _bytecode =
  "0x608060405266096940600290006000556109c460015534801561002157600080fd5b506102ee806100316000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80639b2e5e4f14610046578063bd8cdfd514610064578063e85b612514610082575b600080fd5b61004e6100b2565b60405161005b919061015f565b60405180910390f35b61006c6100b8565b604051610079919061015f565b60405180910390f35b61009c60048036038101906100979190610127565b6100be565b6040516100a9919061015f565b60405180910390f35b60005481565b60015481565b600080821115610108576001826100d59190610205565b6103e8186001836100e69190610205565b600154186100f4919061017a565b60005461010191906101ab565b905061010d565b600090505b919050565b600081359050610121816102a1565b92915050565b60006020828403121561013957600080fd5b600061014784828501610112565b91505092915050565b61015981610239565b82525050565b60006020820190506101746000830184610150565b92915050565b600061018582610239565b915061019083610239565b9250826101a05761019f610272565b5b828204905092915050565b60006101b682610239565b91506101c183610239565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156101fa576101f9610243565b5b828202905092915050565b600061021082610239565b915061021b83610239565b92508282101561022e5761022d610243565b5b828203905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6102aa81610239565b81146102b557600080fd5b5056fea264697066735822122031c0e03d7dbd703c2fe60c95fd1a973833bf2589434ba0d53887411eb9764b7d64736f6c63430008040033";

export class BadgePriceCalculator__factory extends ContractFactory {
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
  ): Promise<BadgePriceCalculator> {
    return super.deploy(overrides || {}) as Promise<BadgePriceCalculator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadgePriceCalculator {
    return super.attach(address) as BadgePriceCalculator;
  }
  connect(signer: Signer): BadgePriceCalculator__factory {
    return super.connect(signer) as BadgePriceCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadgePriceCalculatorInterface {
    return new utils.Interface(_abi) as BadgePriceCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadgePriceCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BadgePriceCalculator;
  }
}
