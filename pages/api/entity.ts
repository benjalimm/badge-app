import { NextApiRequest, NextApiResponse } from 'next';
import entityController from '../../backend/controllers/entityController/EntityController';
import { RegisterEntityRequestData } from '../../schemas/api/EntityModels';
import { EntityInfo } from '../../schemas/EntityInfo';
import { castRegisterEntityRequestData } from '../../schemas/api/EntityModels';
import permissionTokenController from '../../backend/controllers/permissionTokenController/PermissionTokenController';
import userController from '../../backend/controllers/userController/UserController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      await createEntityRoute(req, res);
      break
    default:
      res.status(400).json({ error: "Method not allowed" });
  }
}

async function createEntityRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);  
    const data = castRegisterEntityRequestData(body.data);
    const { entityInfo, txHash, ipfsUrl } = data;

    // 1. Ensure genesis token holder has been added
    await userController.createUserIfNotExists({ 
      address: entityInfo.genesisTokenHolder
    })
    
    // 2. Add entity snapshot
    const entity = await entityController.createEntity(entityInfo, txHash);
    const { id, permissionTokenAddress } = entity;

    // 3. Add permission token snapshot
    const permissionToken = await permissionTokenController.createPermissionToken({ 
      address: permissionTokenAddress,
      collectionId: 1,
      tokenType: "GENESIS",
      adminAddress: entityInfo.genesisTokenHolder,
      ipfsUrl: ipfsUrl
    }, txHash, id)
    res.status(200).json({ data: { entity, permissionToken }});
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
  
}