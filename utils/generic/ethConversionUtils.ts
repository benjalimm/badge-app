import { BigNumber, utils } from "ethers";

export const ethToWeiMultiplier: number = 1000000000000000000;
export const weiToEthMultiplier: number = 1 / ethToWeiMultiplier;
export const ethToGweiMultipler: number = 1000000000;
export const gweiToEthMultiplier: number = 1 / ethToGweiMultipler;

const lowestEthAmount = 0.00001
const lowestUSDAmount = 0.001

export function convertWeiBigNumberToEth(wei:BigNumber): number {
  let res = utils.formatEther(wei);
  return +res;
}

export function formatEthString(eth: number, toFixed: number): string {
  if (eth < lowestEthAmount) {
    return `<${lowestEthAmount} ETH`;
  }
  return (eth).toFixed(toFixed) + " ETH";
}
export function formatWeiToEthString(wei: BigNumber, toFixed: number): string {
  const eth = convertWeiBigNumberToEth(wei);
  return formatEthString(eth, toFixed);
}

export function convertAndFormatEthToUSD(eth: number, ethPrice: number): string {
  const usd = eth * ethPrice;
  if (usd < lowestUSDAmount) {
    return `<$${lowestUSDAmount} USD`
  } 
  return "$" + usd.toFixed(2) + " USD";
}

export function convertAndFormatWeiToUSD(wei: BigNumber, ethPrice: number): string {
  const ethString = utils.formatEther(wei); 
  const eth = parseFloat(ethString);
  return convertAndFormatEthToUSD(eth, ethPrice);
}