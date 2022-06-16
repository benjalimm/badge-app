import { Provider } from "@wagmi/core";
import { Signer } from "ethers";
import { Entity, Entity__factory, BadgeToken, BadgeToken__factory } from "../typechain";
import { ethers } from "ethers";

const entityAddress: string = "0x8c1Ff198AE9AF4b186EE30372A9334B812EC89F5"
const user2Address: string = "0x845B62836650b762996FDf596AabFd19AfFAE02D"

export async function revokeBadgeAsEntity(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  await entity.burnBadge(1);
}

export async function burnWithPrejudice(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  const badgeTokenAddress = await entity.badgeToken();
  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
  await badgeToken.burn(3, true);
}

export async function getDemeritPoint(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  const badgeTokenAddress = await entity.badgeToken();
  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
  const points = await badgeToken.getDemeritPoints()
  console.log(`Demerit points: ${points}`)
}

export async function calculateMinStake(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  const minStake = await entity.getMinStake();
  console.log(minStake);
  console.log(`MinStake:${ethers.utils.formatEther(minStake)} eth`)
}

export async function sendEthToStake(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  const badgeTokenAddress = await entity.badgeToken();
  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
  const minStake = (await entity.getMinStake())
  await signer.sendTransaction({ to: badgeTokenAddress, value: minStake })
}