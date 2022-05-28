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

interface IEntityFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createEntity(string,address,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createEntity",
    values: [string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createEntity",
    data: BytesLike
  ): Result;

  events: {
    "EntityDeployed(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntityDeployed"): EventFragment;
}

export type EntityDeployedEvent = TypedEvent<
  [string, string] & { entityName: string; entityAddress: string }
>;

export class IEntityFactory extends BaseContract {
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

  interface: IEntityFactoryInterface;

  functions: {
    createEntity(
      _entityName: string,
      genesisUser: string,
      genesisTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createEntity(
    _entityName: string,
    genesisUser: string,
    genesisTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createEntity(
      _entityName: string,
      genesisUser: string,
      genesisTokenURI: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "EntityDeployed(string,address)"(
      entityName?: null,
      entityAddress?: null
    ): TypedEventFilter<
      [string, string],
      { entityName: string; entityAddress: string }
    >;

    EntityDeployed(
      entityName?: null,
      entityAddress?: null
    ): TypedEventFilter<
      [string, string],
      { entityName: string; entityAddress: string }
    >;
  };

  estimateGas: {
    createEntity(
      _entityName: string,
      genesisUser: string,
      genesisTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createEntity(
      _entityName: string,
      genesisUser: string,
      genesisTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
