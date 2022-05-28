/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BadgeTokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createBadgeToken(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createBadgeToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createBadgeToken",
    data: BytesLike
  ): Result;

  events: {
    "BadgeTokenDeployed(string,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BadgeTokenDeployed"): EventFragment;
}

export type BadgeTokenDeployedEvent = TypedEvent<
  [string, string, string] & {
    entityName: string;
    entityAddress: string;
    contractAddress: string;
  }
>;

export class BadgeTokenFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BadgeTokenFactoryInterface;

  functions: {
    createBadgeToken(
      entityName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createBadgeToken(
    entityName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createBadgeToken(
      entityName: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "BadgeTokenDeployed(string,address,address)"(
      entityName?: null,
      entityAddress?: null,
      contractAddress?: null
    ): TypedEventFilter<
      [string, string, string],
      { entityName: string; entityAddress: string; contractAddress: string }
    >;

    BadgeTokenDeployed(
      entityName?: null,
      entityAddress?: null,
      contractAddress?: null
    ): TypedEventFilter<
      [string, string, string],
      { entityName: string; entityAddress: string; contractAddress: string }
    >;
  };

  estimateGas: {
    createBadgeToken(
      entityName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createBadgeToken(
      entityName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
