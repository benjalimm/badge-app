import { currentChain } from "../../configs/blockchainConfig";

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
    case "OPTIMISTIC_KOVAN":
      return 'api-kovan-optimistic.etherscan.io'
    case "OPTIMISM":
      return 'optimistic.etherscan.io'
    case "RINKEBY":
      return "rinkeby.etherscan.io"
    default:
      return "etherscan.io"

  }
}

export const etherscanAddress =  getEtherscanAddress();

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