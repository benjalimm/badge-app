import { EntityInfo, EXAMPLE_ENTITY_INFO, parseEntityInfo } from "../EntityInfo";
import { ensureAllPropertiesAreDefined } from "../genericObjectParser";

export interface RegisterEntityRequestData {
  entityInfo: EntityInfo;
  ipfsUrl: string;
  txHash: string;
}

export const EXAMPLE_REGISTER_ENTITY_REQUEST_BODY: RegisterEntityRequestData = {
  entityInfo: EXAMPLE_ENTITY_INFO,
  ipfsUrl: "ipfs://...",
  txHash: "0x0000000000000000000000000000000000000000"
}

export function castRegisterEntityRequestData(data: any): RegisterEntityRequestData {
  if (ensureAllPropertiesAreDefined<RegisterEntityRequestData>(data, EXAMPLE_REGISTER_ENTITY_REQUEST_BODY) && parseEntityInfo(data.entityInfo)) {
    return data
  }
  throw new Error(`JSON could not be parsed as RegisterEntityRequestBody. JSON: ${JSON.stringify(data)}`);
}