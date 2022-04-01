export default interface TransactionInfo {
  to: string;
  from: string;
  transactionHash: string;
  blockHash: string;
  gasUsed: { type: string; hex: string };
}

