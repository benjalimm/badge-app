import { PermissionToken, prisma } from "@prisma/client";
import { PermissionTokenInfo } from "../../../schemas/PermissionTokenInfo";
import prismaClient from "../../Prisma";

class PermissionTokenController {

  async createPermissionToken({ 
    collectionId, 
    adminAddress, 
    tokenType  ,
    ipfsUrl
  }: PermissionTokenInfo, 
  txHash: string, 
  entityId: string): Promise<PermissionToken> {
    const permissionTokenEntity = await prismaClient.permissionToken.create({ data: { 
      entityId,
      collectionId,
      adminAddress,
      tokenType,
      txHash,
      jsonUrl: ipfsUrl      
    }})
    return permissionTokenEntity
  }

  async getPermissionTokens(adminAddress: string): Promise<PermissionToken[]> {
    const tokens = await prismaClient.permissionToken.findMany({ where: { adminAddress }})
    return tokens;
  }
  
}

const permissionTokenController = new PermissionTokenController();
export default permissionTokenController;