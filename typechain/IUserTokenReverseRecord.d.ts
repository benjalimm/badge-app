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

interface IUserTokenReverseRecordInterface extends ethers.utils.Interface {
  functions: {
    "addBadgeReverseRecord(address,address)": FunctionFragment;
    "addPermTokenReverseRecord(address,address)": FunctionFragment;
    "doesBadgeReverseRecordExists(address,address)": FunctionFragment;
    "doesPermReverseRecordExists(address,address)": FunctionFragment;
    "getBadgeReverseRecord(address)": FunctionFragment;
    "getPermTokenReverseRecord(address)": FunctionFragment;
    "removeBadgeReverseRecord(address,address)": FunctionFragment;
    "removePermReverseRecord(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addBadgeReverseRecord",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addPermTokenReverseRecord",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "doesBadgeReverseRecordExists",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "doesPermReverseRecordExists",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBadgeReverseRecord",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPermTokenReverseRecord",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBadgeReverseRecord",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removePermReverseRecord",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBadgeReverseRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPermTokenReverseRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doesBadgeReverseRecordExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doesPermReverseRecordExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBadgeReverseRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPermTokenReverseRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBadgeReverseRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePermReverseRecord",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUserTokenReverseRecord extends BaseContract {
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

  interface: IUserTokenReverseRecordInterface;

  functions: {
    addBadgeReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPermTokenReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    doesBadgeReverseRecordExists(
      user: string,
      badgeToken: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    doesPermReverseRecordExists(
      user: string,
      permToken: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getBadgeReverseRecord(
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getPermTokenReverseRecord(
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    removeBadgeReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePermReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBadgeReverseRecord(
    user: string,
    registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPermTokenReverseRecord(
    user: string,
    registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  doesBadgeReverseRecordExists(
    user: string,
    badgeToken: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  doesPermReverseRecordExists(
    user: string,
    permToken: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getBadgeReverseRecord(
    user: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getPermTokenReverseRecord(
    user: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  removeBadgeReverseRecord(
    user: string,
    registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePermReverseRecord(
    user: string,
    registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBadgeReverseRecord(
      user: string,
      registry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addPermTokenReverseRecord(
      user: string,
      registry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    doesBadgeReverseRecordExists(
      user: string,
      badgeToken: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    doesPermReverseRecordExists(
      user: string,
      permToken: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getBadgeReverseRecord(
      user: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getPermTokenReverseRecord(
      user: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    removeBadgeReverseRecord(
      user: string,
      registry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removePermReverseRecord(
      user: string,
      registry: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addBadgeReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPermTokenReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    doesBadgeReverseRecordExists(
      user: string,
      badgeToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doesPermReverseRecordExists(
      user: string,
      permToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBadgeReverseRecord(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPermTokenReverseRecord(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeBadgeReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePermReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBadgeReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPermTokenReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    doesBadgeReverseRecordExists(
      user: string,
      badgeToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doesPermReverseRecordExists(
      user: string,
      permToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBadgeReverseRecord(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPermTokenReverseRecord(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeBadgeReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePermReverseRecord(
      user: string,
      registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
