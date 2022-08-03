import config from './blockchain.config';
import { BadgeChain } from '../schemas/ChainTypes'; 
export const isLocal = config.isLocal;
export const isProd: boolean = process.env.IS_PROD == 'true'

// SET CURRENT CHAIN HERE
export const currentChain: BadgeChain = "Ethereum Rinkeby";
export const getCurrentConfig = (chain: BadgeChain) => {
  switch (chain) {
    case "Optimistic Kovan":
      return config.optimisticKovan;
    case "Polygon Mumbai":
      return config.mumbai;
    case "Optimism Mainnet":
      return config.optimismMainnet;
    case "Polygon POS":
      return config.polygonMainnet;
    case "Ethereum Rinkeby":
      return config.ethereumRinkeby
    case "Ethereum Mainnet":
      return config.mainnet;
  }
}

export const currentConfig = getCurrentConfig(currentChain);

export const chainNetworkUrl = isProd ? config.mainnet.url : (isLocal ? config.local.url : currentConfig.url);
export const badgeContractAddress = isProd ? config.mainnet.badgeContractAddress : (isLocal ? config.local.badgeContractAddress : currentConfig.badgeContractAddress);
