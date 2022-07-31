import { BadgeChain } from './ChainTypes';
import { ensureAllPropertiesAreDefined } from './genericObjectParser';

export interface EntityInfo {
  address: string;
  name: string;
  genesisTokenHolder: string;
  badgeToken: string;
  permissionToken: string;
  permissionTokenType: "GENESIS" | "SUPER_USER" | "ADMIN";
  timestampOfLastVerified: number;
  chain: BadgeChain;
}

export interface ListOfEntityInfo {
  listOfEntityInfo: EntityInfo[];
  indexOfCurrentEntity: number;
}

// ** EXAMPLE OBJECTS ** \\
export const EXAMPLE_ENTITY_INFO: EntityInfo = {
  address: "0x0000000000000000000000000000000000000000",
  name: "Badge Labs",
  genesisTokenHolder: "0x0000000000000000000000000000000000000000",
  badgeToken: "0x0000000000000000000000000000000000000000",
  permissionToken: "0x0000000000000000000000000000000000000000",
  permissionTokenType: "GENESIS",
  timestampOfLastVerified: 0,
  chain: "Optimism Mainnet"
}

export const EXAMPLE_LIST_OF_ENTITY_INFO: ListOfEntityInfo = {
  listOfEntityInfo: [EXAMPLE_ENTITY_INFO],
  indexOfCurrentEntity: 0
}

// ** PARSERS ** \\
export function parseListOfEntityInfo(json: any): ListOfEntityInfo {
  if (ensureAllPropertiesAreDefined<ListOfEntityInfo>(json, EXAMPLE_LIST_OF_ENTITY_INFO) && parseEntityInfo(json.listOfEntityInfo)) {
    return json
  }
  throw new Error(`JSON could not be parsed as ListOfEntityInfo. JSON: ${JSON.stringify(json)}`);
}

export function parseEntityInfo(json: any): EntityInfo {
  if (ensureAllPropertiesAreDefined<EntityInfo>(json, EXAMPLE_ENTITY_INFO)) {
    return json;
  }
  throw new Error(`JSON could not be parsed as EntityInfo. JSON: ${JSON.stringify(json)}`);
}

