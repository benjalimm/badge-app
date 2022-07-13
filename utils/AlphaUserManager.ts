import Airtable from "airtable";
import airtableController, { AlphaUser } from "../backend/AirtableController";

export default class AlphaUserManager {

  static user: AlphaUser | null = null;
  static isUserInAlpha(): boolean {
    return this.user !== null;
  }

  static async getAlphaUser(walletAddress: string): Promise<AlphaUser | null> {
    const user = await airtableController.getAlphaUser(walletAddress);
    this.user = user;
    return user;
  }
  
}