import prismaClient from "../Prisma";
import { User } from "@prisma/client";
import { UserInfo } from "../../schemas/UserInfo";

class UserController {
  async createUserIfNotExists({ address, name, email }: UserInfo): Promise<User> {
    const user = await prismaClient.user.findFirst({ where: { address }});
    if (user) {
      return user;
    }
    const emails = email ? [email] : undefined;
    const index = email ? 0 : undefined;
    return prismaClient.user.create({ data: { address, name, emails, indexOfPreferredEmail: index }});
  }
}

const userController = new UserController();
export default userController;