import { BadgeChain } from "../../../schemas/ChainTypes";
import { Chain, Entity } from "@prisma/client";
import { EntityInfo } from "../../../schemas/EntityInfo";
import prismaClient from "../../Prisma";
import { EntityQuery } from "./QueryTypes";

class EntityController {
  private getChain(chain: BadgeChain): Chain {

    if (chain === "ETHEREUM" || chain === "OPTIMISM" || chain === "RINKEBY") {
      return chain
    }
    throw new Error(`Invalid chain: ${chain}`)
  }
  async createEntity(entityInfo: EntityInfo, txHash: string): Promise<Entity> {
    const { 
      address, 
      name,
      badgeToken,
      permissionToken,
      chain,
    } = entityInfo
    
    const entity = await prismaClient.entity.create({ data: { 
      entityAddress: address,
      name,
      badgeTokenAddress: badgeToken,
      permissionTokenAddress: permissionToken,
      chain: this.getChain(chain),
      txHash
    }})
    return entity
  }

  async getEntity(query: EntityQuery): Promise<Entity | null> {
    return prismaClient.entity.findFirst({ where: { ...query }})
  }
}

const entityController = new EntityController()
export default entityController;