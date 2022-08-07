
import { NextApiRequest, NextApiResponse } from 'next';
import badgeController from '../../backend/controllers/badgeController/BadgeController';
import emailController from '../../backend/controllers/emailController/EmailController';
import entityController from '../../backend/controllers/entityController/EntityController';
import userController from '../../backend/controllers/userController/UserController';
import { BadgeInfo, castBadgeInfo } from '../../schemas/BadgeData';
import { BadgeEmailData } from '../../schemas/BadgeEmailData';
import { getScanUrl } from '../../utils/chainUtils';
import { getVideoUrlFromIpfsLink } from '../../utils/ipfsHelper';

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
    const email: string = body.data.email;

    // 1. Ensure user exists in database
    await userController.createUserIfNotExists({ address: badgeInfo.recipientAddress})

    // 2. Create Badge
    const badge = await badgeController.createBadge(badgeInfo);

    // 3. Send email
    if (email) {
      const emailData = await convertBadgeInfoToBadgeEmailData(badgeInfo);
      const data = JSON.stringify(emailData);
      console.log(`EmailData: ${data}`)
      await emailController.sendBadgeEmail(email, emailData);
    }
    
    res.status(200).json({ data: { badge } });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function convertBadgeInfoToBadgeEmailData(info:BadgeInfo): Promise<BadgeEmailData> {
  const entity = await entityController.getEntity({ 
    queryType: "BADGE_TOKEN_ADDRESS", 
    query: { badgeTokenAddress: info.collectionAddress }, 
    chain: info.chain
  });
  const badgeEmailData: BadgeEmailData = {
    title: info.title,
    content: info.description,
    scanLink: getScanUrl(info.chain, info.txHash, "Transaction"),
    badgeLevel: info.level,
    badgeXP: info.bxp,
    entityName: entity.name,
    entityContractAddress: info.collectionAddress,
    recipientAddress: info.recipientAddress,
    gifUrl: getVideoUrlFromIpfsLink(info.imageUrl),
  }

  return badgeEmailData;
}