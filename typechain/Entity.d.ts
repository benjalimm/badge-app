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

interface EntityInterface extends ethers.utils.Interface {
  functions: {
    "BASE_MINIMUM_STAKE()": FunctionFragment;
    "assignPermissionToken(address,uint8,string)": FunctionFragment;
    "badgeRegistry()": FunctionFragment;
    "badgeToken()": FunctionFragment;
    "burnBadge(uint256)": FunctionFragment;
    "burnXPAsBadgeToken(uint256,address)": FunctionFragment;
    "calculateMinStake(uint256)": FunctionFragment;
    "entityName()": FunctionFragment;
    "genesisTokenHolder()": FunctionFragment;
    "getBadgeRegistry()": FunctionFragment;
    "getBadgeToken()": FunctionFragment;
    "getBadgeXPToken()": FunctionFragment;
    "getMinStake()": FunctionFragment;
    "getPermissionToken()": FunctionFragment;
    "migrateToEntity(address,address)": FunctionFragment;
    "migrateToTokens(address,address)": FunctionFragment;
    "mintBadge(address,uint8,string)": FunctionFragment;
    "permissionToken()": FunctionFragment;
    "reassignGenesisToken(address,string,bool,string)": FunctionFragment;
    "resetBadgeRecipient(uint256,address)": FunctionFragment;
    "resetBadgeURI(uint256,string)": FunctionFragment;
    "revokePermissionToken(address)": FunctionFragment;
    "setTokenSite(string)": FunctionFragment;
    "surrenderPermissionToken()": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASE_MINIMUM_STAKE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assignPermissionToken",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "badgeRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "badgeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnBadge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnXPAsBadgeToken",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateMinStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "entityName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "genesisTokenHolder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBadgeRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBadgeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBadgeXPToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPermissionToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "migrateToEntity",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateToTokens",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBadge",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "permissionToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reassignGenesisToken",
    values: [string, string, boolean, string]
  ): string;
  encodeFunctionData(
    functionFragment: "resetBadgeRecipient",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "resetBadgeURI",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokePermissionToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenSite",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "surrenderPermissionToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BASE_MINIMUM_STAKE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignPermissionToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "badgeRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "badgeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnBadge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnXPAsBadgeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateMinStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "entityName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "genesisTokenHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBadgeRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBadgeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBadgeXPToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPermissionToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateToEntity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateToTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintBadge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permissionToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reassignGenesisToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetBadgeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetBadgeURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokePermissionToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenSite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "surrenderPermissionToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "EntityMigrated(address)": EventFragment;
    "GenesisTokenReassigned(address,address)": EventFragment;
    "RecipientReset(address,address,uint256,uint256)": EventFragment;
    "TokensMigrated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntityMigrated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GenesisTokenReassigned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientReset"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensMigrated"): EventFragment;
}

export type EntityMigratedEvent = TypedEvent<[string] & { newEntity: string }>;

export type GenesisTokenReassignedEvent = TypedEvent<
  [string, string] & { from: string; to: string }
>;

export type RecipientResetEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    from: string;
    to: string;
    tokenId: BigNumber;
    xp: BigNumber;
  }
>;

export type TokensMigratedEvent = TypedEvent<
  [string, string] & { newBadgeToken: string; newPermToken: string }
>;

export class Entity extends BaseContract {
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

  interface: EntityInterface;

  functions: {
    BASE_MINIMUM_STAKE(overrides?: CallOverrides): Promise<[BigNumber]>;

    assignPermissionToken(
      assignee: string,
      level: BigNumberish,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    badgeRegistry(overrides?: CallOverrides): Promise<[string]>;

    badgeToken(overrides?: CallOverrides): Promise<[string]>;

    burnBadge(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnXPAsBadgeToken(
      xp: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateMinStake(
      demeritPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    entityName(overrides?: CallOverrides): Promise<[string]>;

    genesisTokenHolder(overrides?: CallOverrides): Promise<[string]>;

    getBadgeRegistry(overrides?: CallOverrides): Promise<[string]>;

    getBadgeToken(overrides?: CallOverrides): Promise<[string]>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<[string]>;

    getMinStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPermissionToken(overrides?: CallOverrides): Promise<[string]>;

    migrateToEntity(
      _entity: string,
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrateToTokens(
      badge: string,
      permission: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintBadge(
      to: string,
      level: BigNumberish,
      _tokenURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    permissionToken(overrides?: CallOverrides): Promise<[string]>;

    reassignGenesisToken(
      assignee: string,
      tokenURI: string,
      switchToSuper: boolean,
      superTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resetBadgeRecipient(
      id: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resetBadgeURI(
      id: BigNumberish,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokePermissionToken(
      revokee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenSite(
      site: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    surrenderPermissionToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  BASE_MINIMUM_STAKE(overrides?: CallOverrides): Promise<BigNumber>;

  assignPermissionToken(
    assignee: string,
    level: BigNumberish,
    tokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  badgeRegistry(overrides?: CallOverrides): Promise<string>;

  badgeToken(overrides?: CallOverrides): Promise<string>;

  burnBadge(
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnXPAsBadgeToken(
    xp: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateMinStake(
    demeritPoints: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  entityName(overrides?: CallOverrides): Promise<string>;

  genesisTokenHolder(overrides?: CallOverrides): Promise<string>;

  getBadgeRegistry(overrides?: CallOverrides): Promise<string>;

  getBadgeToken(overrides?: CallOverrides): Promise<string>;

  getBadgeXPToken(overrides?: CallOverrides): Promise<string>;

  getMinStake(overrides?: CallOverrides): Promise<BigNumber>;

  getPermissionToken(overrides?: CallOverrides): Promise<string>;

  migrateToEntity(
    _entity: string,
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrateToTokens(
    badge: string,
    permission: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintBadge(
    to: string,
    level: BigNumberish,
    _tokenURI: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  permissionToken(overrides?: CallOverrides): Promise<string>;

  reassignGenesisToken(
    assignee: string,
    tokenURI: string,
    switchToSuper: boolean,
    superTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resetBadgeRecipient(
    id: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resetBadgeURI(
    id: BigNumberish,
    tokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokePermissionToken(
    revokee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenSite(
    site: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  surrenderPermissionToken(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BASE_MINIMUM_STAKE(overrides?: CallOverrides): Promise<BigNumber>;

    assignPermissionToken(
      assignee: string,
      level: BigNumberish,
      tokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    badgeRegistry(overrides?: CallOverrides): Promise<string>;

    badgeToken(overrides?: CallOverrides): Promise<string>;

    burnBadge(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnXPAsBadgeToken(
      xp: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    calculateMinStake(
      demeritPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    entityName(overrides?: CallOverrides): Promise<string>;

    genesisTokenHolder(overrides?: CallOverrides): Promise<string>;

    getBadgeRegistry(overrides?: CallOverrides): Promise<string>;

    getBadgeToken(overrides?: CallOverrides): Promise<string>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<string>;

    getMinStake(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionToken(overrides?: CallOverrides): Promise<string>;

    migrateToEntity(
      _entity: string,
      _registry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    migrateToTokens(
      badge: string,
      permission: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mintBadge(
      to: string,
      level: BigNumberish,
      _tokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    permissionToken(overrides?: CallOverrides): Promise<string>;

    reassignGenesisToken(
      assignee: string,
      tokenURI: string,
      switchToSuper: boolean,
      superTokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    resetBadgeRecipient(
      id: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    resetBadgeURI(
      id: BigNumberish,
      tokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokePermissionToken(
      revokee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenSite(site: string, overrides?: CallOverrides): Promise<void>;

    surrenderPermissionToken(overrides?: CallOverrides): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "EntityMigrated(address)"(
      newEntity?: null
    ): TypedEventFilter<[string], { newEntity: string }>;

    EntityMigrated(
      newEntity?: null
    ): TypedEventFilter<[string], { newEntity: string }>;

    "GenesisTokenReassigned(address,address)"(
      from?: null,
      to?: null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    GenesisTokenReassigned(
      from?: null,
      to?: null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    "RecipientReset(address,address,uint256,uint256)"(
      from?: null,
      to?: null,
      tokenId?: null,
      xp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { from: string; to: string; tokenId: BigNumber; xp: BigNumber }
    >;

    RecipientReset(
      from?: null,
      to?: null,
      tokenId?: null,
      xp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { from: string; to: string; tokenId: BigNumber; xp: BigNumber }
    >;

    "TokensMigrated(address,address)"(
      newBadgeToken?: null,
      newPermToken?: null
    ): TypedEventFilter<
      [string, string],
      { newBadgeToken: string; newPermToken: string }
    >;

    TokensMigrated(
      newBadgeToken?: null,
      newPermToken?: null
    ): TypedEventFilter<
      [string, string],
      { newBadgeToken: string; newPermToken: string }
    >;
  };

  estimateGas: {
    BASE_MINIMUM_STAKE(overrides?: CallOverrides): Promise<BigNumber>;

    assignPermissionToken(
      assignee: string,
      level: BigNumberish,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    badgeRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    badgeToken(overrides?: CallOverrides): Promise<BigNumber>;

    burnBadge(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnXPAsBadgeToken(
      xp: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateMinStake(
      demeritPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    entityName(overrides?: CallOverrides): Promise<BigNumber>;

    genesisTokenHolder(overrides?: CallOverrides): Promise<BigNumber>;

    getBadgeRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getBadgeToken(overrides?: CallOverrides): Promise<BigNumber>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<BigNumber>;

    getMinStake(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionToken(overrides?: CallOverrides): Promise<BigNumber>;

    migrateToEntity(
      _entity: string,
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrateToTokens(
      badge: string,
      permission: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintBadge(
      to: string,
      level: BigNumberish,
      _tokenURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    permissionToken(overrides?: CallOverrides): Promise<BigNumber>;

    reassignGenesisToken(
      assignee: string,
      tokenURI: string,
      switchToSuper: boolean,
      superTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resetBadgeRecipient(
      id: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resetBadgeURI(
      id: BigNumberish,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokePermissionToken(
      revokee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenSite(
      site: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    surrenderPermissionToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_MINIMUM_STAKE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assignPermissionToken(
      assignee: string,
      level: BigNumberish,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    badgeRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    badgeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnBadge(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnXPAsBadgeToken(
      xp: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateMinStake(
      demeritPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    entityName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    genesisTokenHolder(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBadgeRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBadgeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBadgeXPToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPermissionToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    migrateToEntity(
      _entity: string,
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrateToTokens(
      badge: string,
      permission: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintBadge(
      to: string,
      level: BigNumberish,
      _tokenURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    permissionToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reassignGenesisToken(
      assignee: string,
      tokenURI: string,
      switchToSuper: boolean,
      superTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resetBadgeRecipient(
      id: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resetBadgeURI(
      id: BigNumberish,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokePermissionToken(
      revokee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenSite(
      site: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    surrenderPermissionToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
