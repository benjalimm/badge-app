import { Chain } from "@prisma/client";
import { BadgeChain } from "./ChainTypes";
import { ensureAllPropertiesAreDefined } from "./genericObjectParser";

// Badge data - Used for the actual Badge component
export interface BadgeData {
  id?: number;
  title: string;
  content: string;
  videoPath: string;
  level: number;
  entityName: string;
  recipientEns?: string;
}

// Used to pass info between frontend and backend
export type BadgeInfo = {
  jsonUrl: string;
  collectionAddress: string;
  collectionId: number;
  chain: Chain;
  recipientAddress: string;
  recipientEns?: string;
  title: string;
  description: string;
  animationUrl: string;
  imageUrl: string;
  level: number;
  bxp: number;
  txHash: string;
}

const EXAMPLE_BADGE_INFO: BadgeInfo = { 
  jsonUrl: "",
  collectionId: 0,
  recipientAddress: "",
  title: "",
  description: "",
  animationUrl: "",
  imageUrl: "",
  level: 0,
  bxp: 0,
  txHash: "",
  chain: "OPTIMISM",
  collectionAddress: ""
}

export function castBadgeInfo(value: any): BadgeInfo {
  if (ensureAllPropertiesAreDefined(value, EXAMPLE_BADGE_INFO)) {
    return value;
  }
  throw new Error(`JSON could not be parsed as BadgeInfo. JSON: ${JSON.stringify(value)}`);
}