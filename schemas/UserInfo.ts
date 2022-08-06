import { ensureAllPropertiesAreDefined } from "./genericObjectParser";

export interface UserInfo {
  address: string;
  name?: string;
  email?: string;
}

export const EXAMPLE_USER_INFO: UserInfo = {
  address: "0x0000000000000000000000000000000000000000"
}

export function castUserInfo(userInfo: any): UserInfo {
  if (ensureAllPropertiesAreDefined(userInfo, EXAMPLE_USER_INFO)) {
    return userInfo;
  }
  throw new Error(`JSON could not be parsed as UserInfo. JSON: ${JSON.stringify(userInfo)}`);
}