import prismaClient from "../../Prisma";
import { Badge, Chain } from "@prisma/client";
import { generateRandomHash } from "../../../utils/randomHashGenerator";
import { BadgeInfo } from "../../../schemas/BadgeData";
import entityController from "../entityController/EntityController";
import { castBadgeChainAsPrismaChain } from "../../../schemas/ChainTypes";

class BadgeController {

  private async generateUniqueShortHash(): Promise<string> {
    // 1. Generate hash
    const shortHash = generateRandomHash(4);

    // 2. Check if hash doesn't already exist in database
    const badge = await prismaClient.badge.findFirst({ where: { shortHash }});

    if (!badge) {
      // 3. If not, return hash
      return shortHash;
    }
    // 3. If it does, recursively call this function until we get a unique hash
    return this.generateUniqueShortHash()
  }
  async createBadge(badgeInfo: BadgeInfo): Promise<Badge> {
    const shortHash = await this.generateUniqueShortHash();
    const { chain, collectionAddress } = badgeInfo;

    const entity = await entityController.getEntity({ 
      queryType: "BADGE_TOKEN_ADDRESS",
      badgeTokenAddress: collectionAddress,
      chain: castBadgeChainAsPrismaChain(chain)
    });

    return prismaClient.badge.create({ 
      data: 
      { ...badgeInfo, 
        shortHash, 
        entityId: entity.id 
      } 
    });
  }
   
}

const badgeController = new BadgeController();
export default badgeController;
