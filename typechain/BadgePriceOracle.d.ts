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

interface BadgePriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "baseBadgePrice()": FunctionFragment;
    "calculateBadgePrice(uint256)": FunctionFragment;
    "deployer()": FunctionFragment;
    "levelMultiplierX1000()": FunctionFragment;
    "setBaseBadgePrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "baseBadgePrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateBadgePrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "levelMultiplierX1000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseBadgePrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "baseBadgePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateBadgePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "levelMultiplierX1000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseBadgePrice",
    data: BytesLike
  ): Result;

  events: {};
}

export class BadgePriceOracle extends BaseContract {
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

  interface: BadgePriceOracleInterface;

  functions: {
    baseBadgePrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deployer(overrides?: CallOverrides): Promise<[string]>;

    levelMultiplierX1000(overrides?: CallOverrides): Promise<[BigNumber]>;

    setBaseBadgePrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  baseBadgePrice(overrides?: CallOverrides): Promise<BigNumber>;

  calculateBadgePrice(
    level: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deployer(overrides?: CallOverrides): Promise<string>;

  levelMultiplierX1000(overrides?: CallOverrides): Promise<BigNumber>;

  setBaseBadgePrice(
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    baseBadgePrice(overrides?: CallOverrides): Promise<BigNumber>;

    calculateBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<string>;

    levelMultiplierX1000(overrides?: CallOverrides): Promise<BigNumber>;

    setBaseBadgePrice(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    baseBadgePrice(overrides?: CallOverrides): Promise<BigNumber>;

    calculateBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    levelMultiplierX1000(overrides?: CallOverrides): Promise<BigNumber>;

    setBaseBadgePrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseBadgePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    levelMultiplierX1000(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBaseBadgePrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
