import config from './blockchain.config';
import { Chain } from '../schemas/ChainTypes'; 
export const isLocal = config.isLocal;
export const isProd: boolean = process.env.IS_PROD == 'true'

// SET CURRENT CHAIN HERE
export const currentChain: Chain = "Ethereum Rinkeby";
export const getCurrentConfig = (chain: Chain) => {
  switch (chain) {
    case "Optimistic Kovan":
      return config.optimisticKovan;
    case "Polygon Mumbai":
      return config.mumbai;
    case "Optimistic Mainnet":
      return config.optimismMainnet;
    case "Polygon POS":
      return config.mainnet;
    case "Ethereum Rinkeby":
      return config.ethereumRinkeby
  }
}

export const currentConfig = getCurrentConfig(currentChain);

export const chainNetworkUrl = isProd ? config.mainnet.url : (isLocal ? config.local.url : currentConfig.url);
export const badgeContractAddress = isProd ? config.mainnet.badgeContractAddress : (isLocal ? config.local.badgeContractAddress : currentConfig.badgeContractAddress);
