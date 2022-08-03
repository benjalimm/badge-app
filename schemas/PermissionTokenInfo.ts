export interface PermissionTokenInfo {
  address: string;
  collectionId: number;
  adminAddress: string;
  ipfsUrl: string;
  tokenType: "GENESIS" | "SUPER_USER" | "ADMIN";
}