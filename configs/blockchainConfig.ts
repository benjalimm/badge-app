import config from './blockchain.config';

export const isLocal = config.isLocal;
export const isProd: boolean = process.env.IS_PROD == 'true'

// SET CURRENT CHAIN HERE
export const currentConfig = config.optimisticKovan;

export const chainNetworkUrl = isProd ? config.mainnet.url : (isLocal ? config.local.url : currentConfig.url);
export const badgeContractAddress = isProd ? config.mainnet.badgeContractAddress : (isLocal ? config.local.badgeContractAddress : currentConfig.badgeContractAddress);
