import { Signer } from "ethers";
import { BadgeToken__factory, Entity__factory } from "../../typechain";

export async function setSiteForEntity(
  entityAddress: string, 
  site: string, 
  signer: Signer
) {
  const entity = Entity__factory.connect(entityAddress, signer);

  const badgeTokenAddress = await entity.badgeToken();
  const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
  badgeToken.once("TokenSiteSet", (site: string) => {
    console.log(`Token site set to ${site}`)
  })
  await entity.setTokenSite(site);
}