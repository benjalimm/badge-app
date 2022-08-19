import { BadgeChain, ChainInfo, ChainValueType, chainValueTypeToInfoProperty } from "../../schemas/ChainTypes";

const listOfChainInfo: ChainInfo[] = [
  {
    chain: "MUMBAI",
    baseUrl: "https://mumbai.polygonscan.com",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "POLYGON",
    baseUrl: "https://polygonscan.com",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "OPTIMISTIC_KOVAN",
    baseUrl: "https://kovan-optimistic.etherscan.io",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "OPTIMISM",
    baseUrl: "https://optimistic.etherscan.io",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "RINKEBY",
    baseUrl: "https://rinkeby.etherscan.io",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  },
  {
    chain: "ETHEREUM",
    baseUrl: "https://etherscan.io",
    transactionPath: "tx",
    tokenPath: "token",
    addressPath: "address"
  }

]

export function getChainInfo(chain: BadgeChain): ChainInfo {
  return listOfChainInfo.find(x => x.chain === chain)
}

export function getScanUrl(
  chain: BadgeChain, 
  value: string, 
  valueType: ChainValueType
): string {
  const chainInfo = getChainInfo(chain);
  const property = chainValueTypeToInfoProperty[valueType];
  const path = chainInfo[property] as string;
  return `${chainInfo.baseUrl}/${path}/${value}`;
}