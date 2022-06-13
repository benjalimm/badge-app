/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BadgeRecoveryOracle,
  BadgeRecoveryOracleInterface,
} from "../BadgeRecoveryOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recoveryAddress",
        type: "address",
      },
    ],
    name: "RecoveryAddressAlreadySet",
    type: "error",
  },
  {
    inputs: [],
    name: "RecoveryAddressSameAsSender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "initialAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recoveryAddress",
        type: "address",
      },
    ],
    name: "RecoveryAddressSet",
    type: "event",
  },
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
        name: "",
        type: "address",
      },
    ],
    name: "recoveryAddressMap",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50610461806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806336d9e9031461004657806349efe5ae14610076578063511865e914610092575b600080fd5b610060600480360381019061005b9190610366565b6100c2565b60405161006d919061039e565b60405180910390f35b610090600480360381019061008b9190610366565b6100f5565b005b6100ac60048036038101906100a79190610366565b6102e9565b6040516100b9919061039e565b60405180910390f35b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146101c957806040517fb0d009840000000000000000000000000000000000000000000000000000000081526004016101c0919061039e565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561022f576040517fa47e364600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fe2e82f7331b2182b7fda48768de4f8fd938e0e5a8ee5f14279257343c8e1bc8e33836040516102dd9291906103b9565b60405180910390a15050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008135905061036081610414565b92915050565b60006020828403121561037857600080fd5b600061038684828501610351565b91505092915050565b610398816103e2565b82525050565b60006020820190506103b3600083018461038f565b92915050565b60006040820190506103ce600083018561038f565b6103db602083018461038f565b9392505050565b60006103ed826103f4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b61041d816103e2565b811461042857600080fd5b5056fea264697066735822122074b12325930b6b1e12e76a35087f0b74eccf3031d9288268acbe9bbea228917464736f6c63430008040033";

export class BadgeRecoveryOracle__factory extends ContractFactory {
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
  ): Promise<BadgeRecoveryOracle> {
    return super.deploy(overrides || {}) as Promise<BadgeRecoveryOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadgeRecoveryOracle {
    return super.attach(address) as BadgeRecoveryOracle;
  }
  connect(signer: Signer): BadgeRecoveryOracle__factory {
    return super.connect(signer) as BadgeRecoveryOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadgeRecoveryOracleInterface {
    return new utils.Interface(_abi) as BadgeRecoveryOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadgeRecoveryOracle {
    return new Contract(address, _abi, signerOrProvider) as BadgeRecoveryOracle;
  }
}
