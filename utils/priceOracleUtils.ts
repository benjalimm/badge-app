import {  Signer } from "ethers";
import { BadgeRegistry__factory, BadgePriceOracle__factory } from "../typechain";
import { badgeContractAddress } from "../configs/blockchainConfig";
import { ethers } from 'ethers';

export async function getBaseBadgePrice(signer: Signer): Promise<number> {
  console.log("1. Attempting to get base badge price")
  // 1. Get registry
  const registry = BadgeRegistry__factory.connect(badgeContractAddress, signer)

  // 2. Get oracle address
  const oracleAddress = await registry.badgePriceOracle();

  console.log(`2. Oracle address: ${oracleAddress}`)

  // 3. Get base bage price
  const oracle = BadgePriceOracle__factory.connect(oracleAddress, signer);
  const price = await oracle.baseBadgePrice()

  console.log(`3. Base badge price: ${price}`)
  return price.toNumber();
}

export function calculateBadgePrice(baseBadgePrice: number, level: number): number {
  if (level > 0) {
    const multiplier = Math.pow(2.5, level - 1)
    return (baseBadgePrice) * multiplier
  }
  return 0;
}