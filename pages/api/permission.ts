import { NextApiRequest, NextApiResponse } from 'next';
import permissionTokenController from '../../backend/controllers/permissionTokenController/PermissionTokenController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      await getPermissionTokensRoute(req, res);
      break
    default:
      res.status(400).json({ error: "Method not allowed" });
  }
}

async function getPermissionTokensRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);  
    
    const { adminAddress } = req.query;

    // 1. Get permission tokens
    const tokens = await permissionTokenController.getPermissionTokens(adminAddress as string);

    res.status(200).json({ data: { permissionTokens: tokens }});
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
  
}