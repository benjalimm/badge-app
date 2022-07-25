/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BadgeXPOracle, BadgeXPOracleInterface } from "../BadgeXPOracle";

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
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610419806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806354fd4d501461003b5780635f85d6f914610059575b600080fd5b610043610089565b60405161005091906101bc565b60405180910390f35b610073600480360381019061006e919061014b565b6100c2565b60405161008091906101de565b60405180910390f35b6040518060400160405280600381526020017f312e30000000000000000000000000000000000000000000000000000000000081525081565b60008082111561012c576000808390505b60008111156101225760648260196100eb919061029c565b6100f5919061026b565b6103e86101029190610215565b8261010d9190610215565b9150808061011a90610333565b9150506100d3565b5080915050610131565b600090505b919050565b600081359050610145816103cc565b92915050565b60006020828403121561015d57600080fd5b600061016b84828501610136565b91505092915050565b600061017f826101f9565b6101898185610204565b9350610199818560208601610300565b6101a2816103bb565b840191505092915050565b6101b6816102f6565b82525050565b600060208201905081810360008301526101d68184610174565b905092915050565b60006020820190506101f360008301846101ad565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610220826102f6565b915061022b836102f6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156102605761025f61035d565b5b828201905092915050565b6000610276826102f6565b9150610281836102f6565b9250826102915761029061038c565b5b828204905092915050565b60006102a7826102f6565b91506102b2836102f6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156102eb576102ea61035d565b5b828202905092915050565b6000819050919050565b60005b8381101561031e578082015181840152602081019050610303565b8381111561032d576000848401525b50505050565b600061033e826102f6565b915060008214156103525761035161035d565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b6103d5816102f6565b81146103e057600080fd5b5056fea26469706673582212204f6190a7036815f6d5a44c451de469cd6f0d77de069e999e665c22c0d90df9c064736f6c63430008040033";

export class BadgeXPOracle__factory extends ContractFactory {
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
  ): Promise<BadgeXPOracle> {
    return super.deploy(overrides || {}) as Promise<BadgeXPOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadgeXPOracle {
    return super.attach(address) as BadgeXPOracle;
  }
  connect(signer: Signer): BadgeXPOracle__factory {
    return super.connect(signer) as BadgeXPOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadgeXPOracleInterface {
    return new utils.Interface(_abi) as BadgeXPOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadgeXPOracle {
    return new Contract(address, _abi, signerOrProvider) as BadgeXPOracle;
  }
}
