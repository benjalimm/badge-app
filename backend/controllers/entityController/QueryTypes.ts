import { Chain } from "@prisma/client";

export type BaseEntityQuery = {
  queryType: "ENTITY_ADDRESS" | "BADGE_TOKEN_ADDRESS" | "PERMISSION_TOKEN_ADDRESS";

  chain: Chain;
}

export type BadgeTokenQuery = {
  queryType: "BADGE_TOKEN_ADDRESS";
  query: { badgeTokenAddress: string };
} & BaseEntityQuery

export type PermissionTokenQuery = {
  queryType: "PERMISSION_TOKEN_ADDRESS";
  query: { permissionTokenAddress: string }
} & BaseEntityQuery

export type EntityAddressQuery = {
  queryType: "ENTITY_ADDRESS";
  query: { entityAddress: string }
} & BaseEntityQuery

export type EntityQuery = BadgeTokenQuery | PermissionTokenQuery | EntityAddressQuery;
