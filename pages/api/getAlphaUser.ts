import type { NextApiRequest, NextApiResponse } from 'next'
import airtableController, { AlphaUser } from '../../backend/controllers/AirtableController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const walletAddress = req.query.walletAddress as string;

  try {
    const betaUser: AlphaUser = await airtableController.getAlphaUser(walletAddress)
    if (betaUser) {
      res.status(200).json({betaUser});
    } else {
      res.status(200).json({betaUser: null});
    }

  } catch(error) {
    res.status(500).json({error});
  }
  
}