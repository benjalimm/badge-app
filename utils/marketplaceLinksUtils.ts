import { BadgeChain } from "../schemas/ChainTypes"

type MarketPlaceLinkInfo = {
  chain: BadgeChain;
  baseUrl: string;
  assetPath: string;
  walletAddressPath: string;
}

const listOfMarketplaceLinkInfo: MarketPlaceLinkInfo[] = [
  {
    chain: "ETHEREUM",
    baseUrl: "https://opensea.io",
    assetPath: "/assets/ethereum/",
    walletAddressPath: "/"
  },
  {
    chain: "OPTIMISM",
    baseUrl: "https://quixotic.io",
    assetPath: "/asset/",
    walletAddressPath: ""
  },
  {
    chain: "RINKEBY",
    baseUrl: "https://testnets.opensea.io",
    assetPath: "/assets/rinkeby/",
    walletAddressPath: "/"
  },
  {
    chain: "POLYGON",
    baseUrl: "https://opensea.io",
    assetPath: "/assets/polygon/",
    walletAddressPath: "/"
  },
  {
    chain: "MUMBAI",
    baseUrl: "https://testnets.opensea.io",
    assetPath: "/assets/polygon/",
    walletAddressPath: "/"
  }
]

function getMarketPlaceInfo(chain: BadgeChain): MarketPlaceLinkInfo {
  const info = listOfMarketplaceLinkInfo.find(x => x.chain === chain)

  if (info) return info;
  return listOfMarketplaceLinkInfo[0];
}

export function getMarketPlaceAssetLink(
  chain: BadgeChain, 
  collectionAddress: string, 
  id: number
): string {
  const info = getMarketPlaceInfo(chain);
  return `${info.baseUrl}${info.assetPath}${collectionAddress}/${id}`;
}

export function getMarketPlaceWalletLink(
  chain: BadgeChain, 
  walletAddress: string
): string {
  const info = getMarketPlaceInfo(chain);
  return `${info.baseUrl}${info.walletAddressPath}${walletAddress}`;
}