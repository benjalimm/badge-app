interface EthUSDResponseData {
  data: { 
    base: string;
    currency: string;
    amount: string;
  }
}

export async function getEthUSDPrice(): Promise<number> {
  const url = 'https://api.coinbase.com/v2/prices/ETH-USD/spot';
  const response = await fetch(url);
  const data = (await response.json()) as EthUSDResponseData;
  return parseInt(data.data.amount);
}

export async function getUSDPriceForEth(eth: number): Promise<number> {
  const ethPrice = await getEthUSDPrice();
  return eth * ethPrice;
}

