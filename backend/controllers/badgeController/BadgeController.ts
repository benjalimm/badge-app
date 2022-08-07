import prismaClient from "../../Prisma";
import { Badge } from "@prisma/client";
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
      return shortHash.toLowerCase()
    }
    // 3. If it does, recursively call this function until we get a unique hash
    return this.generateUniqueShortHash()
  }
  async createBadge(badgeInfo: BadgeInfo): Promise<Badge> {
    const shortHash = await this.generateUniqueShortHash();
    const { chain, collectionAddress, collectionId } = badgeInfo;

    // 1. Ensure Badge doesn't already exists
    const badge = await prismaClient.badge.findFirst({ where: { collectionAddress, chain, collectionId }});

    if (badge) throw new Error(`Badge already exists: Collection: ${collectionAddress} // TokenId: ${collectionId} // Chain: ${chain} `);
    
    // 2. Get entity information
    const entity = await entityController.getEntity({ 
      queryType: "BADGE_TOKEN_ADDRESS",
      query: { badgeTokenAddress: collectionAddress },
      chain: castBadgeChainAsPrismaChain(chain)
    });

    // 3. Log badge to database
    return prismaClient.badge.create({ 
      data: { 
        ...badgeInfo, 
        shortHash, 
        entityId: entity.id 
      } 
    });
  }
   
}

const badgeController = new BadgeController();
export default badgeController;
