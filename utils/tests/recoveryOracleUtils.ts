import { BigNumberish, Signer } from "ethers";
import { BadgeRegistry__factory, BadgeRecoveryOracle__factory, BadgeToken__factory, Entity__factory, BadgeXP__factory } from "../../typechain";
import { ethers } from "ethers";
import { BaseProvider } from "@ethersproject/providers";
import { getCurrentEntityFromLocalStorage } from "../services/EntityLocalStorageManager";

export async function setRecoveryAddress(recoveryAddress: string, signer: Signer) {
  const badgeRecoveryOracle = await BadgeRecoveryOracle__factory.connect("0x9F6Ffba499448509DFF9F232638BE2fc505aDe72", signer);
  await badgeRecoveryOracle.setRecoveryAddress(recoveryAddress);
  badgeRecoveryOracle.once("RecoveryAddressSet", (initalAddress: string, recoveryAddress: string) => {
    console.log(`Recovery address successfully set to ${recoveryAddress}`);
  })
}
//0x5CdD699cA4190b8E5983944BCE32CB357BF56190
export async function recoverBadges(signer: Signer) {
  
  const address = getCurrentEntityFromLocalStorage().address;
  const entity = Entity__factory.connect(address, signer);
  const badgeAddress = await entity.badgeToken();
  const badgeToken = BadgeToken__factory.connect(badgeAddress, signer);
  const info = await badgeToken.recover(2);
  console.log(`Recovery transaction info: ${info}`)
}

export async function recoverXPTokens(signer: Signer) {
  const badgeXPContract = BadgeXP__factory.connect("0x2e0f66A3196033FdD97dd229c5532ef1968213c7", signer);
  await badgeXPContract.recover("0x845B62836650b762996FDf596AabFd19AfFAE02D")
  badgeXPContract.once("Transfer", (from: string, to: string, value: number) => {
    console.log(`Recovered ${value} XP tokens from ${from} to ${to}`);
  })
}

export async function migrateToEntity(signer: Signer) {
  const address = getCurrentEntityFromLocalStorage().address;
  const entity = Entity__factory.connect(address, signer);
  await entity.migrateToEntity("0x83888eD3d560F1332F2575F7F0BCA4f46ECe70D8", "0xEcB32975702b4fE634093BE37578b7AC7e7f7221")
}

export async function setTokenForEntity(signer: Signer) {
  const newEntity = Entity__factory.connect("0x83888eD3d560F1332F2575F7F0BCA4f46ECe70D8", signer)

  await newEntity.migrateToTokens("0x18D71e8cD99e5c3A6F2D579c66A171E15e1483EC", "0x91Eb2667324Ea91C231108DF5897f564fb2599cB")
}