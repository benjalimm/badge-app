
export type Chain = "Polygon POS" | "Polygon Mumbai";
export interface ChainInfo {
  chain: Chain;
  baseUrl: string;
  transactionPath: string;
  tokenPath: string;
  addressPath: string;
}

export type ChainValueType = "Transaction" | "Token" | "Address";

export const chainValueTypeToInfoProperty: {[key: string]: string } = {
  "Transaction": "transactionPath",
  "Token": "tokenPath",
  "Address": "addressPath"
}