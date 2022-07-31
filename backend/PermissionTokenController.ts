import { PermissionToken } from "@prisma/client";
import { PermissionTokenInfo } from "../schemas/PermissionTokenInfo";
import prismaClient from "./Prisma";

class PermissionTokenController {

  async createPermissionToken({ 
    collectionId, 
    adminAddress, 
    tokenType  
  }: PermissionTokenInfo, 
  txHash: string, 
  entityId: string): Promise<PermissionToken> {
    const permissionTokenEntity = await prismaClient.permissionToken.create({ data: { 
      entityId,
      collectionId,
      adminAddress,
      tokenType,
      txHash
    }})
    return permissionTokenEntity
  }
  
}

const permissionTokenController = new PermissionTokenController();
export default permissionTokenController;