export interface PermissionTokenInfo {
  address: string;
  collectionId: number;
  adminAddress: string;
  tokenType: "GENESIS" | "SUPER_USER" | "ADMIN";
}