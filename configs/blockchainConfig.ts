import config from './blockchain.config';
<<<<<<< HEAD
import { Chain } from '../schemas/ChainTypes'; 
export const isLocal = config.isLocal;
export const isProd: boolean = process.env.IS_PROD == 'true'

// SET CURRENT CHAIN HERE
export const currentChain: Chain = "Optimistic Kovan"
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
  }
}

export const currentConfig = getCurrentConfig(currentChain);

export const chainNetworkUrl = isProd ? config.mainnet.url : (isLocal ? config.local.url : currentConfig.url);
export const badgeContractAddress = isProd ? config.mainnet.badgeContractAddress : (isLocal ? config.local.badgeContractAddress : currentConfig.badgeContractAddress);
=======

export const isLocal = config.isLocal;
export const isProd: boolean = process.env.IS_PROD == 'true'
export const chainNetworkUrl = isProd ? config.mainnet.url : (isLocal ? config.local.url : config.mumbai.url);
export const badgeContractAddress = isProd ? config.mainnet.badgeContractAddress : (isLocal ? config.local.badgeContractAddress : config.mumbai.badgeContractAddress);
>>>>>>> main
