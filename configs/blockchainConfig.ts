import config from './blockchain.config';
import { BadgeChain } from '../schemas/ChainTypes'; 
export const isLocal = config.isLocal;
export const isProd: boolean = process.env.IS_PROD == 'true'

// SET CURRENT CHAIN HERE
console.log(process.env.CURRENT_CHAIN)
export const currentChain: BadgeChain = "RINKEBY";
console.log(`Current chain: ${currentChain}`);
export const getCurrentConfig = (chain: BadgeChain) => {
  switch (chain) {
    case "OPTIMISTIC_KOVAN":
      return config.optimisticKovan;
    case "MUMBAI":
      return config.mumbai;
    case "OPTIMISM":
      return config.optimismMainnet;
    case "POLYGON":
      return config.polygonMainnet;
    case "RINKEBY":
      return config.ethereumRinkeby
    case "ETHEREUM":
      return config.mainnet;
  }
}

export const currentConfig = getCurrentConfig(currentChain);

export const chainNetworkUrl = isProd ? config.mainnet.url : (isLocal ? config.local.url : currentConfig.url);
export const badgeContractAddress = isProd ? config.mainnet.badgeContractAddress : (isLocal ? config.local.badgeContractAddress : currentConfig.badgeContractAddress);
