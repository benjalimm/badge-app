
export type Chain = "Ethereum Mainnet"|"Polygon POS" | "Polygon Mumbai" | "Optimistic Kovan" | "Optimism Mainnet" | "Ethereum Rinkeby";
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