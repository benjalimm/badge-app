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

interface IBadgeRegistryInterface extends ethers.utils.Interface {
  functions: {
    "getBadgePrice(uint256)": FunctionFragment;
    "getBadgeTokenFactory()": FunctionFragment;
    "getBadgeXPToken()": FunctionFragment;
    "getEntityFactory()": FunctionFragment;
    "getLevelMultiplierX1000()": FunctionFragment;
    "getPermissionTokenFactory()": FunctionFragment;
    "getRecoveryOracle()": FunctionFragment;
    "getSafe()": FunctionFragment;
    "isRegistered(address)": FunctionFragment;
    "registerEntity(string,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getBadgePrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBadgeTokenFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBadgeXPToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntityFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLevelMultiplierX1000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPermissionTokenFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getSafe", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isRegistered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerEntity",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBadgePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBadgeTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBadgeXPToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntityFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLevelMultiplierX1000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPermissionTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSafe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerEntity",
    data: BytesLike
  ): Result;

  events: {
    "BadgePriceCalculatorSet(address)": EventFragment;
    "BadgeTokenFactorySet(address)": EventFragment;
    "BadgeXPTokenSet(address)": EventFragment;
    "EntityFactorySet(address)": EventFragment;
    "EntityRegistered(address,string,address)": EventFragment;
    "PermissionTokenFactorySet(address)": EventFragment;
    "RecoveryOracleSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BadgePriceCalculatorSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BadgeTokenFactorySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BadgeXPTokenSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EntityFactorySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EntityRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PermissionTokenFactorySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecoveryOracleSet"): EventFragment;
}

export type BadgePriceCalculatorSetEvent = TypedEvent<
  [string] & { badgePriceCalculator: string }
>;

export type BadgeTokenFactorySetEvent = TypedEvent<
  [string] & { badgeTokenFactory: string }
>;

export type BadgeXPTokenSetEvent = TypedEvent<
  [string] & { badgeXPToken: string }
>;

export type EntityFactorySetEvent = TypedEvent<
  [string] & { entityFactory: string }
>;

export type EntityRegisteredEvent = TypedEvent<
  [string, string, string] & {
    entityAddress: string;
    entityName: string;
    genesisTokenHolder: string;
  }
>;

export type PermissionTokenFactorySetEvent = TypedEvent<
  [string] & { permissionTokenFactory: string }
>;

export type RecoveryOracleSetEvent = TypedEvent<
  [string] & { recoveryOracle: string }
>;

export class IBadgeRegistry extends BaseContract {
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

  interface: IBadgeRegistryInterface;

  functions: {
    getBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBadgeTokenFactory(overrides?: CallOverrides): Promise<[string]>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<[string]>;

    getEntityFactory(overrides?: CallOverrides): Promise<[string]>;

    getLevelMultiplierX1000(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPermissionTokenFactory(overrides?: CallOverrides): Promise<[string]>;

    getRecoveryOracle(overrides?: CallOverrides): Promise<[string]>;

    getSafe(overrides?: CallOverrides): Promise<[string]>;

    isRegistered(addr: string, overrides?: CallOverrides): Promise<[boolean]>;

    registerEntity(
      entityName: string,
      genesisTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getBadgePrice(
    level: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBadgeTokenFactory(overrides?: CallOverrides): Promise<string>;

  getBadgeXPToken(overrides?: CallOverrides): Promise<string>;

  getEntityFactory(overrides?: CallOverrides): Promise<string>;

  getLevelMultiplierX1000(overrides?: CallOverrides): Promise<BigNumber>;

  getPermissionTokenFactory(overrides?: CallOverrides): Promise<string>;

  getRecoveryOracle(overrides?: CallOverrides): Promise<string>;

  getSafe(overrides?: CallOverrides): Promise<string>;

  isRegistered(addr: string, overrides?: CallOverrides): Promise<boolean>;

  registerEntity(
    entityName: string,
    genesisTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBadgeTokenFactory(overrides?: CallOverrides): Promise<string>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<string>;

    getEntityFactory(overrides?: CallOverrides): Promise<string>;

    getLevelMultiplierX1000(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionTokenFactory(overrides?: CallOverrides): Promise<string>;

    getRecoveryOracle(overrides?: CallOverrides): Promise<string>;

    getSafe(overrides?: CallOverrides): Promise<string>;

    isRegistered(addr: string, overrides?: CallOverrides): Promise<boolean>;

    registerEntity(
      entityName: string,
      genesisTokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BadgePriceCalculatorSet(address)"(
      badgePriceCalculator?: null
    ): TypedEventFilter<[string], { badgePriceCalculator: string }>;

    BadgePriceCalculatorSet(
      badgePriceCalculator?: null
    ): TypedEventFilter<[string], { badgePriceCalculator: string }>;

    "BadgeTokenFactorySet(address)"(
      badgeTokenFactory?: null
    ): TypedEventFilter<[string], { badgeTokenFactory: string }>;

    BadgeTokenFactorySet(
      badgeTokenFactory?: null
    ): TypedEventFilter<[string], { badgeTokenFactory: string }>;

    "BadgeXPTokenSet(address)"(
      badgeXPToken?: null
    ): TypedEventFilter<[string], { badgeXPToken: string }>;

    BadgeXPTokenSet(
      badgeXPToken?: null
    ): TypedEventFilter<[string], { badgeXPToken: string }>;

    "EntityFactorySet(address)"(
      entityFactory?: null
    ): TypedEventFilter<[string], { entityFactory: string }>;

    EntityFactorySet(
      entityFactory?: null
    ): TypedEventFilter<[string], { entityFactory: string }>;

    "EntityRegistered(address,string,address)"(
      entityAddress?: null,
      entityName?: null,
      genesisTokenHolder?: null
    ): TypedEventFilter<
      [string, string, string],
      { entityAddress: string; entityName: string; genesisTokenHolder: string }
    >;

    EntityRegistered(
      entityAddress?: null,
      entityName?: null,
      genesisTokenHolder?: null
    ): TypedEventFilter<
      [string, string, string],
      { entityAddress: string; entityName: string; genesisTokenHolder: string }
    >;

    "PermissionTokenFactorySet(address)"(
      permissionTokenFactory?: null
    ): TypedEventFilter<[string], { permissionTokenFactory: string }>;

    PermissionTokenFactorySet(
      permissionTokenFactory?: null
    ): TypedEventFilter<[string], { permissionTokenFactory: string }>;

    "RecoveryOracleSet(address)"(
      recoveryOracle?: null
    ): TypedEventFilter<[string], { recoveryOracle: string }>;

    RecoveryOracleSet(
      recoveryOracle?: null
    ): TypedEventFilter<[string], { recoveryOracle: string }>;
  };

  estimateGas: {
    getBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBadgeTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<BigNumber>;

    getEntityFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getLevelMultiplierX1000(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getRecoveryOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getSafe(overrides?: CallOverrides): Promise<BigNumber>;

    isRegistered(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    registerEntity(
      entityName: string,
      genesisTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBadgeTokenFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntityFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLevelMultiplierX1000(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPermissionTokenFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecoveryOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSafe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isRegistered(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerEntity(
      entityName: string,
      genesisTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
