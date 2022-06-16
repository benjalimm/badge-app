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

interface BadgeRegistryInterface extends ethers.utils.Interface {
  functions: {
    "badgeGnosisSafe()": FunctionFragment;
    "badgePriceCalculator()": FunctionFragment;
    "badgeTokenEntityReverseRecord(address)": FunctionFragment;
    "badgeTokenFactory()": FunctionFragment;
    "badgeXPToken()": FunctionFragment;
    "baseMinimumStake()": FunctionFragment;
    "certifiedRegistries(address)": FunctionFragment;
    "deployer()": FunctionFragment;
    "entities(address)": FunctionFragment;
    "entityFactory()": FunctionFragment;
    "filterAddressesForEntityReverseRecord(uint8,address[])": FunctionFragment;
    "getBadgePrice(uint256)": FunctionFragment;
    "getBadgeTokenFactory()": FunctionFragment;
    "getBadgeXPToken()": FunctionFragment;
    "getBaseMinimumStake()": FunctionFragment;
    "getEntityFactory()": FunctionFragment;
    "getPermissionTokenFactory()": FunctionFragment;
    "getRecoveryOracle()": FunctionFragment;
    "getSafe()": FunctionFragment;
    "isRegistered(address)": FunctionFragment;
    "isRegistryCertified(address)": FunctionFragment;
    "permTokenEntityReverseRecord(address)": FunctionFragment;
    "permissionTokenFactory()": FunctionFragment;
    "recoveryOracle()": FunctionFragment;
    "registerEntity(string,string,bool)": FunctionFragment;
    "setBadgePriceCalculator(address)": FunctionFragment;
    "setBadgeTokenFactory(address)": FunctionFragment;
    "setBadgeXPToken(address)": FunctionFragment;
    "setBaseMinimumStake(uint256)": FunctionFragment;
    "setCertifiedRegistry(address,bool)": FunctionFragment;
    "setEntityFactory(address)": FunctionFragment;
    "setPermissionTokenFactory(address)": FunctionFragment;
    "setRecoveryOracle(address)": FunctionFragment;
    "setTokenReverseRecords(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "badgeGnosisSafe",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "badgePriceCalculator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "badgeTokenEntityReverseRecord",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "badgeTokenFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "badgeXPToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "baseMinimumStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "certifiedRegistries",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(functionFragment: "entities", values: [string]): string;
  encodeFunctionData(
    functionFragment: "entityFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "filterAddressesForEntityReverseRecord",
    values: [BigNumberish, string[]]
  ): string;
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
    functionFragment: "getBaseMinimumStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntityFactory",
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
    functionFragment: "isRegistryCertified",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "permTokenEntityReverseRecord",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "permissionTokenFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoveryOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerEntity",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBadgePriceCalculator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBadgeTokenFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBadgeXPToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseMinimumStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCertifiedRegistry",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setEntityFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermissionTokenFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecoveryOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenReverseRecords",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "badgeGnosisSafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "badgePriceCalculator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "badgeTokenEntityReverseRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "badgeTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "badgeXPToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "baseMinimumStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "certifiedRegistries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entities", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "entityFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filterAddressesForEntityReverseRecord",
    data: BytesLike
  ): Result;
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
    functionFragment: "getBaseMinimumStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntityFactory",
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
    functionFragment: "isRegistryCertified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permTokenEntityReverseRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permissionTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoveryOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerEntity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBadgePriceCalculator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBadgeTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBadgeXPToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseMinimumStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCertifiedRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEntityFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermissionTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRecoveryOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenReverseRecords",
    data: BytesLike
  ): Result;

  events: {
    "EntityRegistered(address,string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntityRegistered"): EventFragment;
}

export type EntityRegisteredEvent = TypedEvent<
  [string, string, string] & {
    entityAddress: string;
    entityName: string;
    genesisTokenHolder: string;
  }
>;

export class BadgeRegistry extends BaseContract {
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

  interface: BadgeRegistryInterface;

  functions: {
    badgeGnosisSafe(overrides?: CallOverrides): Promise<[string]>;

    badgePriceCalculator(overrides?: CallOverrides): Promise<[string]>;

    badgeTokenEntityReverseRecord(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    badgeTokenFactory(overrides?: CallOverrides): Promise<[string]>;

    badgeXPToken(overrides?: CallOverrides): Promise<[string]>;

    baseMinimumStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    certifiedRegistries(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    deployer(overrides?: CallOverrides): Promise<[string]>;

    entities(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    entityFactory(overrides?: CallOverrides): Promise<[string]>;

    filterAddressesForEntityReverseRecord(
      tokenType: BigNumberish,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBadgeTokenFactory(overrides?: CallOverrides): Promise<[string]>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<[string]>;

    getBaseMinimumStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEntityFactory(overrides?: CallOverrides): Promise<[string]>;

    getPermissionTokenFactory(overrides?: CallOverrides): Promise<[string]>;

    getRecoveryOracle(overrides?: CallOverrides): Promise<[string]>;

    getSafe(overrides?: CallOverrides): Promise<[string]>;

    isRegistered(addr: string, overrides?: CallOverrides): Promise<[boolean]>;

    isRegistryCertified(
      _registry: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    permTokenEntityReverseRecord(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    permissionTokenFactory(overrides?: CallOverrides): Promise<[string]>;

    recoveryOracle(overrides?: CallOverrides): Promise<[string]>;

    registerEntity(
      entityName: string,
      genesisTokenURI: string,
      deployTokens: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBadgePriceCalculator(
      _badgePriceCalculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBadgeTokenFactory(
      _badgeTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBadgeXPToken(
      _badgeXPToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBaseMinimumStake(
      _baseMinimumStake: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCertifiedRegistry(
      _certifiedRegistry: string,
      _certified: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEntityFactory(
      _entityFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPermissionTokenFactory(
      _permissionTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRecoveryOracle(
      _recoveryOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenReverseRecords(
      perm: string,
      badge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  badgeGnosisSafe(overrides?: CallOverrides): Promise<string>;

  badgePriceCalculator(overrides?: CallOverrides): Promise<string>;

  badgeTokenEntityReverseRecord(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  badgeTokenFactory(overrides?: CallOverrides): Promise<string>;

  badgeXPToken(overrides?: CallOverrides): Promise<string>;

  baseMinimumStake(overrides?: CallOverrides): Promise<BigNumber>;

  certifiedRegistries(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  deployer(overrides?: CallOverrides): Promise<string>;

  entities(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  entityFactory(overrides?: CallOverrides): Promise<string>;

  filterAddressesForEntityReverseRecord(
    tokenType: BigNumberish,
    addresses: string[],
    overrides?: CallOverrides
  ): Promise<string[]>;

  getBadgePrice(
    level: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBadgeTokenFactory(overrides?: CallOverrides): Promise<string>;

  getBadgeXPToken(overrides?: CallOverrides): Promise<string>;

  getBaseMinimumStake(overrides?: CallOverrides): Promise<BigNumber>;

  getEntityFactory(overrides?: CallOverrides): Promise<string>;

  getPermissionTokenFactory(overrides?: CallOverrides): Promise<string>;

  getRecoveryOracle(overrides?: CallOverrides): Promise<string>;

  getSafe(overrides?: CallOverrides): Promise<string>;

  isRegistered(addr: string, overrides?: CallOverrides): Promise<boolean>;

  isRegistryCertified(
    _registry: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  permTokenEntityReverseRecord(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  permissionTokenFactory(overrides?: CallOverrides): Promise<string>;

  recoveryOracle(overrides?: CallOverrides): Promise<string>;

  registerEntity(
    entityName: string,
    genesisTokenURI: string,
    deployTokens: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBadgePriceCalculator(
    _badgePriceCalculator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBadgeTokenFactory(
    _badgeTokenFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBadgeXPToken(
    _badgeXPToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBaseMinimumStake(
    _baseMinimumStake: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCertifiedRegistry(
    _certifiedRegistry: string,
    _certified: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEntityFactory(
    _entityFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPermissionTokenFactory(
    _permissionTokenFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRecoveryOracle(
    _recoveryOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenReverseRecords(
    perm: string,
    badge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    badgeGnosisSafe(overrides?: CallOverrides): Promise<string>;

    badgePriceCalculator(overrides?: CallOverrides): Promise<string>;

    badgeTokenEntityReverseRecord(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    badgeTokenFactory(overrides?: CallOverrides): Promise<string>;

    badgeXPToken(overrides?: CallOverrides): Promise<string>;

    baseMinimumStake(overrides?: CallOverrides): Promise<BigNumber>;

    certifiedRegistries(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deployer(overrides?: CallOverrides): Promise<string>;

    entities(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    entityFactory(overrides?: CallOverrides): Promise<string>;

    filterAddressesForEntityReverseRecord(
      tokenType: BigNumberish,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    getBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBadgeTokenFactory(overrides?: CallOverrides): Promise<string>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<string>;

    getBaseMinimumStake(overrides?: CallOverrides): Promise<BigNumber>;

    getEntityFactory(overrides?: CallOverrides): Promise<string>;

    getPermissionTokenFactory(overrides?: CallOverrides): Promise<string>;

    getRecoveryOracle(overrides?: CallOverrides): Promise<string>;

    getSafe(overrides?: CallOverrides): Promise<string>;

    isRegistered(addr: string, overrides?: CallOverrides): Promise<boolean>;

    isRegistryCertified(
      _registry: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    permTokenEntityReverseRecord(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    permissionTokenFactory(overrides?: CallOverrides): Promise<string>;

    recoveryOracle(overrides?: CallOverrides): Promise<string>;

    registerEntity(
      entityName: string,
      genesisTokenURI: string,
      deployTokens: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBadgePriceCalculator(
      _badgePriceCalculator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBadgeTokenFactory(
      _badgeTokenFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBadgeXPToken(
      _badgeXPToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBaseMinimumStake(
      _baseMinimumStake: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCertifiedRegistry(
      _certifiedRegistry: string,
      _certified: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setEntityFactory(
      _entityFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPermissionTokenFactory(
      _permissionTokenFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecoveryOracle(
      _recoveryOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenReverseRecords(
      perm: string,
      badge: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
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
  };

  estimateGas: {
    badgeGnosisSafe(overrides?: CallOverrides): Promise<BigNumber>;

    badgePriceCalculator(overrides?: CallOverrides): Promise<BigNumber>;

    badgeTokenEntityReverseRecord(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    badgeTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;

    badgeXPToken(overrides?: CallOverrides): Promise<BigNumber>;

    baseMinimumStake(overrides?: CallOverrides): Promise<BigNumber>;

    certifiedRegistries(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    entities(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    entityFactory(overrides?: CallOverrides): Promise<BigNumber>;

    filterAddressesForEntityReverseRecord(
      tokenType: BigNumberish,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBadgeTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<BigNumber>;

    getBaseMinimumStake(overrides?: CallOverrides): Promise<BigNumber>;

    getEntityFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getRecoveryOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getSafe(overrides?: CallOverrides): Promise<BigNumber>;

    isRegistered(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isRegistryCertified(
      _registry: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permTokenEntityReverseRecord(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permissionTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;

    recoveryOracle(overrides?: CallOverrides): Promise<BigNumber>;

    registerEntity(
      entityName: string,
      genesisTokenURI: string,
      deployTokens: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBadgePriceCalculator(
      _badgePriceCalculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBadgeTokenFactory(
      _badgeTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBadgeXPToken(
      _badgeXPToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBaseMinimumStake(
      _baseMinimumStake: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCertifiedRegistry(
      _certifiedRegistry: string,
      _certified: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEntityFactory(
      _entityFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPermissionTokenFactory(
      _permissionTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRecoveryOracle(
      _recoveryOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenReverseRecords(
      perm: string,
      badge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    badgeGnosisSafe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    badgePriceCalculator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    badgeTokenEntityReverseRecord(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    badgeTokenFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    badgeXPToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseMinimumStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    certifiedRegistries(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    entities(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    entityFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    filterAddressesForEntityReverseRecord(
      tokenType: BigNumberish,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBadgePrice(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBadgeTokenFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBaseMinimumStake(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEntityFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPermissionTokenFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecoveryOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSafe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isRegistered(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRegistryCertified(
      _registry: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permTokenEntityReverseRecord(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permissionTokenFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recoveryOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerEntity(
      entityName: string,
      genesisTokenURI: string,
      deployTokens: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBadgePriceCalculator(
      _badgePriceCalculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBadgeTokenFactory(
      _badgeTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBadgeXPToken(
      _badgeXPToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBaseMinimumStake(
      _baseMinimumStake: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCertifiedRegistry(
      _certifiedRegistry: string,
      _certified: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEntityFactory(
      _entityFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPermissionTokenFactory(
      _permissionTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRecoveryOracle(
      _recoveryOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenReverseRecords(
      perm: string,
      badge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
