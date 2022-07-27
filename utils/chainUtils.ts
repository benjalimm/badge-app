import { Chain, ChainInfo, ChainValueType, chainValueTypeToInfoProperty } from "../schemas/ChainTypes";

const listOfChainInfo: ChainInfo[] = [
  {
    chain: "Polygon Mumbai",
    baseUrl: "https://mumbai.polygonscan.com",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "Polygon POS",
    baseUrl: "https://polygonscan.com",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "Optimistic Kovan",
    baseUrl: "https://kovan-optimistic.etherscan.io",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "Optimism Mainnet",
    baseUrl: "https://optimistic.etherscan.io",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "Ethereum Rinkeby",
    baseUrl: "https://rinkeby.etherscan.io",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "Ethereum Mainnet",
    baseUrl: "https://etherscan.io",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  }

]

export function getChainInfo(chain: Chain): ChainInfo {
  return listOfChainInfo.find(x => x.chain === chain)
}

export function getScanUrl(
  chain: Chain, 
  value: string, 
  valueType: ChainValueType
): string {
  const chainInfo = getChainInfo(chain);
  const property = chainValueTypeToInfoProperty[valueType];
  const path = chainInfo[property] as string;
  return `${chainInfo.baseUrl}/${path}/${value}`;
}