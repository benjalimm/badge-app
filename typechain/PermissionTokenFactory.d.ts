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

interface PermissionTokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "badgeRegistry()": FunctionFragment;
    "createPermissionToken(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "badgeRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createPermissionToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "badgeRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPermissionToken",
    data: BytesLike
  ): Result;

  events: {
    "PermissionTokenDeployed(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PermissionTokenDeployed"): EventFragment;
}

export type PermissionTokenDeployedEvent = TypedEvent<
  [string, string] & { entityName: string; entityAddress: string }
>;

export class PermissionTokenFactory extends BaseContract {
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

  interface: PermissionTokenFactoryInterface;

  functions: {
    badgeRegistry(overrides?: CallOverrides): Promise<[string]>;

    createPermissionToken(
      _entityName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  badgeRegistry(overrides?: CallOverrides): Promise<string>;

  createPermissionToken(
    _entityName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    badgeRegistry(overrides?: CallOverrides): Promise<string>;

    createPermissionToken(
      _entityName: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "PermissionTokenDeployed(string,address)"(
      entityName?: null,
      entityAddress?: null
    ): TypedEventFilter<
      [string, string],
      { entityName: string; entityAddress: string }
    >;

    PermissionTokenDeployed(
      entityName?: null,
      entityAddress?: null
    ): TypedEventFilter<
      [string, string],
      { entityName: string; entityAddress: string }
    >;
  };

  estimateGas: {
    badgeRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    createPermissionToken(
      _entityName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    badgeRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPermissionToken(
      _entityName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}