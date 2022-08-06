import { Chain } from "@prisma/client";

export type BadgeChain = "ETHEREUM"|"POLYGON" | "MUMBAI" | "OPTIMISTIC_KOVAN" | "OPTIMISM" | "RINKEBY";

export interface ChainInfo {
  chain: BadgeChain;
  baseUrl: string;
  transactionPath: string;
  tokenPath: string;
  addressPath: string;
}

export type ChainValueType = "Transaction" | "Token" | "Address";

export const chainValueTypeToInfoProperty: {[key: string]: string } = {
  "Transaction": "transactionPath",
  "Token": "tokenPath",
  "Address": "addressPath"
}

export function castBadgeChainAsPrismaChain(badgeChain: BadgeChain): Chain {
  if (badgeChain === "ETHEREUM" || badgeChain === "OPTIMISM" || badgeChain === "RINKEBY") {
    return badgeChain
  }
  throw new Error(`Invalid chain: ${badgeChain}`)
}