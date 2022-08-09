import { ensureAllPropertiesAreDefined } from "./genericObjectParser";

export type BadgeEmailData = {
  title: string;
  content: string;
  scanLink: string;
  marketPlaceLink: string;
  badgeLevel: number;
  badgeXP: number;
  entityName: string;
  entityContractAddress: string;
  recipientAddress: string;
  gifUrl: string;
}

const EXAMPLE_BADGE_EMAIL_DATA: BadgeEmailData = {
  title: "",
  content: "",
  scanLink: "",
  marketPlaceLink: "",
  badgeLevel: 0,
  badgeXP: 0,
  entityName: "",
  entityContractAddress: "",
  recipientAddress: "",
  gifUrl: ""
}

export function castBadgeEmailData(data: any): BadgeEmailData {
  if (ensureAllPropertiesAreDefined(data, EXAMPLE_BADGE_EMAIL_DATA)) {
    return data;
  }
  throw new Error(`JSON could not be parsed as BadgeEmailData. JSON: ${JSON.stringify(data)}`);
}