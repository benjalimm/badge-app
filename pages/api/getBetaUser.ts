import type { NextApiRequest, NextApiResponse } from 'next'
import airtableController, { BetaUser } from '../../backend/AirtableController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const walletAddress = req.query.walletAddress as string;

  try {
    const betaUser: BetaUser = await airtableController.getBetaUser(walletAddress)
    if (betaUser) {
      res.status(200).json({betaUser});
    } else {
      res.status(200).json({betaUser: null});
    }

  } catch(error) {
    res.status(500).json({error});
  }
  
}