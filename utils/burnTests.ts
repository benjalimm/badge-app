import { Provider } from "@wagmi/core";
import { Signer } from "ethers";
import { Entity, Entity__factory, BadgeToken, BadgeToken__factory } from "../typechain";

const entityAddress: string = "0xeb7A24a0828665527480C4aAF28Cb6F241585Fc9"
const user2Address: string = "0x845B62836650b762996FDf596AabFd19AfFAE02D"

export async function revokeBadgeAsEntity(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  await entity.burnBadge(1);
}

export async function burnWithPrejudice(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  const badgeTokenAddress = await entity.badgeToken();
  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
  await badgeToken.burn(1, true);
}

export async function getDemeritPoint(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  const badgeTokenAddress = await entity.badgeToken();
  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
  const points = await badgeToken.getDemeritPoints()
  console.log(`Demerit points: ${points}`)
}