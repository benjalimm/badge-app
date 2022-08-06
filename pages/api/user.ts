import { NextApiRequest, NextApiResponse } from 'next';
import userController from '../../backend/controllers/UserController';
import { castUserInfo } from '../../schemas/UserInfo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      await retrieveOrCreateUserRoute(req, res);
      break
    default:
      res.status(400).json({ error: "Method not allowed" });
  }
}

async function retrieveOrCreateUserRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);  
    const userInfo = castUserInfo(body.data.user)
    const user = await userController.createUserIfNotExists(userInfo)
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }

}