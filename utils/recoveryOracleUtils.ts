import { BigNumberish, Signer } from "ethers";
import { BadgeRegistry__factory, BadgeRecoveryOracle__factory, BadgeToken__factory, Entity__factory, BadgeXP__factory } from "../typechain";
import { ethers } from "ethers";
import { BaseProvider } from "@ethersproject/providers";

export async function setRecoveryAddress(recoveryAddress: string, signer: Signer) {
  const badgeRecoveryOracle = await BadgeRecoveryOracle__factory.connect("0xB3c2dC7D2A48958Bb1b5B785ba8EB454c14D188A", signer);
  await badgeRecoveryOracle.setRecoveryAddress(recoveryAddress);
  badgeRecoveryOracle.once("RecoveryAddressSet", (initalAddress: string, recoveryAddress: string) => {
    console.log(`Recovery address successfully set to ${recoveryAddress}`);
  })
}
//0x5CdD699cA4190b8E5983944BCE32CB357BF56190
export async function recoverBadges(signer: Signer) {
  
  const entity = Entity__factory.connect("0x5CdD699cA4190b8E5983944BCE32CB357BF56190", signer)
  const badgeTokenAddress = await entity.badgeToken();
  console.log(`Badge token: ${badgeTokenAddress}`);
  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
  const info = await badgeToken.recover(1);
  console.log(`Recovery transaction info: ${info}`)
}

export async function recoverXPTokens(signer: Signer) {
  const badgeXPContract = BadgeXP__factory.connect("0x3b30381502a2D20ddD96168199E1864A7308dB3a", signer);
  await badgeXPContract.recover("0x15eDb84992cd6E3ed4f0461B0Fbe743AbD1eA7b5")
  badgeXPContract.once("Transfer", (from: string, to: string, value: number) => {
    console.log(`Recovered ${value} XP tokens from ${from} to ${to}`);
  })
}

export async function setNewEntity(signer: Signer) {
  const entity = Entity__factory.connect("0xf941418cca469cCA7CcC106f1be4f4E903E45A95", signer)
  await entity.migrateToEntity("0x112758d35F44285014497fe9ed05655A5499D57C", "0x673F5aA8D0296eFbd65526724d360c2BE79Acf8E")
}

export async function setTokenForEntity(signer: Signer) {
  const newEntity = Entity__factory.connect("0x112758d35F44285014497fe9ed05655A5499D57C", signer)

  const oldEntity = Entity__factory.connect("0xf941418cca469cCA7CcC106f1be4f4E903E45A95", signer)

  await newEntity.migrateToTokens(await oldEntity.badgeToken(), await oldEntity.permissionToken())
}