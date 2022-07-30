import { BadgeChain } from './ChainTypes';

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

// ** PARSERS ** \\
export function parseListOfEntityInfo(json: any): ListOfEntityInfo {
  // TODO: Actually check if the json is valid. For now, just assume it.
  return json as ListOfEntityInfo;
}