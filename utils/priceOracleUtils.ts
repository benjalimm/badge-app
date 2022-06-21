import {  Signer } from "ethers";
import { BadgeRegistry__factory, BadgePriceOracle__factory } from "../typechain";
import { badgeContractAddress } from "../configs/blockchainConfig";

export async function getBaseBadgePrice(signer: Signer) {
  // 1. Get registry
  const registry = BadgeRegistry__factory.connect(badgeContractAddress, signer)

  // 2. Get oracle address
  const oracleAddress = await registry.badgePriceOracle();

  // 3. Get base bage price
  const oracle = BadgePriceOracle__factory.connect(oracleAddress, signer);
  return await oracle.baseBadgePrice();
}

export function calculateBadgePrice(baseBadgePrice: number, level: number): number {
  const multiplier = Math.pow(2.5, level - 1)
  return (baseBadgePrice) * multiplier
}