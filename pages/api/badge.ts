
import { NextApiRequest, NextApiResponse } from 'next';
import badgeController from '../../backend/controllers/badgeController/BadgeController';
import userController from '../../backend/controllers/userController/UserController';
import { castBadgeInfo } from '../../schemas/BadgeData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
  switch (req.method) {
    case "POST":
      await createBadgeRoute(req, res);
      break
    default:
      res.status(400).json({ error: "Method not allowed" });
  }
}

async function createBadgeRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);  
    const badgeInfo = castBadgeInfo(body.data.badgeInfo);

    // 1. Ensure user exists in database
    await userController.createUserIfNotExists({ address: badgeInfo.recipientAddress})

    // 2. Create Badge
    const badge = await badgeController.createBadge(badgeInfo);
    res.status(200).json({ data: { badge } });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}