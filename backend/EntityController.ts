import { BadgeChain } from "../schemas/ChainTypes";
import { Chain, Entity } from "@prisma/client";
import { EntityInfo } from "../schemas/EntityInfo";
import prismaClient from "./Prisma";

class EntityController {
  private getChain(chain: BadgeChain): Chain {
    switch (chain) {
      case "Ethereum Mainnet":
        return "ETHEREUM"
      case "Optimism Mainnet":
        return "OPTIMISM"
      case "Ethereum Rinkeby":
        return "RINKEBY"
      default: 
        throw new Error(`Chain ${chain} is not supported - Can't persist in database`)
      
    }
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
}

const entityController = new EntityController()
export default entityController;