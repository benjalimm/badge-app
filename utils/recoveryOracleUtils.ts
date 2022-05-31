import { BigNumberish, Signer } from "ethers";
import { BadgeRegistry__factory, BadgeRecoveryOracle__factory, BadgeToken__factory, Entity__factory, BadgeXP__factory } from "../typechain";

export async function setRecoveryAddress(recoveryAddress: string, signer: Signer) {
  const badgeRecoveryOracle = await BadgeRecoveryOracle__factory.connect("0x4b7aFFC00Ff470feF60bf2C10B9778Def20B03D4", signer);
  await badgeRecoveryOracle.setRecoveryAddress(recoveryAddress);
  badgeRecoveryOracle.once("RecoveryAddressSet", (initalAddress: string, recoveryAddress: string) => {
    console.log(`Recovery address successfully set to ${recoveryAddress}`);
  })
}

export async function recoverBadges(signer: Signer) {
  const entity = Entity__factory.connect("0xC0DeaC3D7e6995ab486fd0EB63f388dD72E58189", signer)
  const badgeTokenAddress = await entity.badgeToken();
  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
  const info = await badgeToken.recover("0x15eDb84992cd6E3ed4f0461B0Fbe743AbD1eA7b5", [1])
  console.log(`Recovery transaction info: ${info}`)
  badgeToken.once("RecoveryComplete", (ids: BigNumberish[], initialAddress: string, recoveredAddress: string) => {
    console.log(`Recovery successfully complete for ${ids}`);
  })
}

export async function recoverXPTokens(signer: Signer) {
  const badgeXPContract = BadgeXP__factory.connect("0x8377D1C05759bdd668d9BAf29825719772ad5107", signer);
  await badgeXPContract.recover("0x15eDb84992cd6E3ed4f0461B0Fbe743AbD1eA7b5")
  badgeXPContract.once("Transfer", (from: string, to: string, value: number) => {
    console.log(`Recovered ${value} XP tokens from ${from} to ${to}`);
  })
}