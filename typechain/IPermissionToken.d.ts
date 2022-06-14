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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IPermissionTokenInterface extends ethers.utils.Interface {
  functions: {
    "getEntity()": FunctionFragment;
    "getPermStatusForAdmin(address)": FunctionFragment;
    "mintAsEntity(address,uint256,string)": FunctionFragment;
    "revokePermission(address)": FunctionFragment;
    "setNewEntity(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getEntity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPermStatusForAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAsEntity",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokePermission",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setNewEntity",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "getEntity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPermStatusForAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAsEntity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokePermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewEntity",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPermissionToken extends BaseContract {
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

  interface: IPermissionTokenInterface;

  functions: {
    getEntity(overrides?: CallOverrides): Promise<[string]>;

    getPermStatusForAdmin(
      admins: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mintAsEntity(
      assignee: string,
      level: BigNumberish,
      tokenURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokePermission(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNewEntity(
      _entity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getEntity(overrides?: CallOverrides): Promise<string>;

  getPermStatusForAdmin(
    admins: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mintAsEntity(
    assignee: string,
    level: BigNumberish,
    tokenURI: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokePermission(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNewEntity(
    _entity: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getEntity(overrides?: CallOverrides): Promise<string>;

    getPermStatusForAdmin(
      admins: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintAsEntity(
      assignee: string,
      level: BigNumberish,
      tokenURI: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokePermission(_owner: string, overrides?: CallOverrides): Promise<void>;

    setNewEntity(_entity: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getEntity(overrides?: CallOverrides): Promise<BigNumber>;

    getPermStatusForAdmin(
      admins: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintAsEntity(
      assignee: string,
      level: BigNumberish,
      tokenURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokePermission(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNewEntity(
      _entity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEntity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPermStatusForAdmin(
      admins: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintAsEntity(
      assignee: string,
      level: BigNumberish,
      tokenURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokePermission(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNewEntity(
      _entity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
