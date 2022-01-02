import config from './blockchain.config';

export const isLocal = config.isLocal;
export const isProd: boolean = process.env.IS_PROD == 'true'
export const chainNetworkUrl = isProd ? config.mainnet.url : (isLocal ? config.local.url : config.mumbai.url);
export const badgeContractAddress = isProd ? config.mainnet.badgeContractAddress : (isLocal ? config.local.badgeContractAddress : config.mumbai.badgeContractAddress);
