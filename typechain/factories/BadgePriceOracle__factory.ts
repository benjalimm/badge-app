/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BadgePriceOracle,
  BadgePriceOracleInterface,
} from "../BadgePriceOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setBaseBadgePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405266096940600290006000556109c460015534801561002157600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104d7806100726000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80639b2e5e4f1461005c578063bd8cdfd51461007a578063d5f3948814610098578063e85b6125146100b6578063f586550b146100e6575b600080fd5b610064610102565b60405161007191906102dc565b60405180910390f35b610082610108565b60405161008f91906102dc565b60405180910390f35b6100a061010e565b6040516100ad91906102a1565b60405180910390f35b6100d060048036038101906100cb9190610237565b610134565b6040516100dd91906102dc565b60405180910390f35b61010060048036038101906100fb9190610237565b610188565b005b60005481565b60015481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082111561017e5760018261014b9190610393565b6103e81860018361015c9190610393565b6001541861016a9190610308565b6000546101779190610339565b9050610183565b600090505b919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020f906102bc565b60405180910390fd5b8060008190555050565b6000813590506102318161048a565b92915050565b60006020828403121561024957600080fd5b600061025784828501610222565b91505092915050565b610269816103c7565b82525050565b600061027c600d836102f7565b915061028782610461565b602082019050919050565b61029b816103f9565b82525050565b60006020820190506102b66000830184610260565b92915050565b600060208201905081810360008301526102d58161026f565b9050919050565b60006020820190506102f16000830184610292565b92915050565b600082825260208201905092915050565b6000610313826103f9565b915061031e836103f9565b92508261032e5761032d610432565b5b828204905092915050565b6000610344826103f9565b915061034f836103f9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561038857610387610403565b5b828202905092915050565b600061039e826103f9565b91506103a9836103f9565b9250828210156103bc576103bb610403565b5b828203905092915050565b60006103d2826103d9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4465706c6f796572206f6e6c7900000000000000000000000000000000000000600082015250565b610493816103f9565b811461049e57600080fd5b5056fea26469706673582212205aa1f826093bf3a2ee34513e9e6019afb8aa6726fecc4655114c67bf8cb61b7a64736f6c63430008040033";

export class BadgePriceOracle__factory extends ContractFactory {
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
  ): Promise<BadgePriceOracle> {
    return super.deploy(overrides || {}) as Promise<BadgePriceOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadgePriceOracle {
    return super.attach(address) as BadgePriceOracle;
  }
  connect(signer: Signer): BadgePriceOracle__factory {
    return super.connect(signer) as BadgePriceOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadgePriceOracleInterface {
    return new utils.Interface(_abi) as BadgePriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadgePriceOracle {
    return new Contract(address, _abi, signerOrProvider) as BadgePriceOracle;
  }
}