import { currentChain } from "../configs/blockchainConfig";

interface TransactionDetails {
  hash: string;
  from: string;
  to: string;
  timestamp: string;
  txreceipt_status: string;
}

interface TransactionResponse {
  status: string;
  message: string;
  result: TransactionDetails[];
}

function getEtherscanAddress(): string {
  switch (currentChain) {
    case "Optimistic Kovan":
      return 'api-kovan-optimistic.etherscan.io'
    case "Optimism Mainnet":
      return 'optimistic.etherscan.io'
    case "Ethereum Rinkeby":
      return "rinkeby.etherscan.io"

  }
}

export const etherscanAddress =  process.env.IS_PROD ? 
  'optimistic.etherscan.io' : 
  'api-kovan-optimistic.etherscan.io'

export async function getUsersListOfTransactions(
  userId: string
): Promise<TransactionDetails[]> {
  console.log(`Getting list of users transactions for userId ${userId}`)
  const response = await fetch(`https://${etherscanAddress}/api?module=account&action=txlist&address=${userId}`);
  const transactionResponse = await response.json() as TransactionResponse;
  console.log(transactionResponse)
  if (transactionResponse.status === "1") {
    return transactionResponse.result;
  }
  throw new Error(`request failed: ${transactionResponse.message}`);
}

export async function checkIfTransactionisSuccessful(
  transactionId: string, 
  userId: string
): Promise<boolean> {
  const transactionDetails = await getUsersListOfTransactions(userId);
  const transaction = transactionDetails.find(t => t.hash === transactionId);
  return transaction.txreceipt_status === "1";
}