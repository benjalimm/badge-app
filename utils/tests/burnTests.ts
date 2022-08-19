import { Provider } from "@wagmi/core";
import { Signer } from "ethers";
import { Entity, Entity__factory, BadgeToken, BadgeToken__factory } from "../../typechain";
import { ethers } from "ethers";
import { getCurrentEntityFromLocalStorage } from "../services/EntityLocalStorageManager";

const entityAddress: string = "0x0De9389e76AF895f3549800a858BB34791786Ca5"
const user2Address: string = "0x95dE2aF29E3cc1B776C70ECe4c6392022B1180dC"

export async function revokeBadgeAsEntity(signer: Signer) {
  const address = getCurrentEntityFromLocalStorage().address;
  const entity = Entity__factory.connect(address, signer)
  await entity.burnBadge(1);
}

export async function burnWithPrejudice(signer: Signer) {
  const address = getCurrentEntityFromLocalStorage().address;
  const entity = Entity__factory.connect(address, signer)
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

export async function resetBadgeURI(signer: Signer) {
  const address = getCurrentEntityFromLocalStorage().address;
  const entity = Entity__factory.connect(address, signer)
  const badgeTokenAddress = await entity.badgeToken();

  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);

  badgeToken.once("BadgeURIReset", (from: string, to: string) => {
    console.log(`Badge URI reset from ${from} to ${to}`)
  })

  await entity.resetBadgeURI(2, "URI_2");
}

export async function resetBadgeRecipient(signer: Signer) {
  const address = getCurrentEntityFromLocalStorage().address;
  const entity = Entity__factory.connect(address, signer)
  await entity.resetBadgeRecipient(1, user2Address);
  entity.once("RecipientReset", (from: string, to: string) => {
    console.log(`Recipient reset from ${from} to ${to}`)
  })
}