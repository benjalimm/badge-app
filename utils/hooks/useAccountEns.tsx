import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';
import { useProvider } from 'wagmi';
import ENSCacheManager from '../ENSCacheManager';

export default function useAccountEns(address: string): string | null {
  const [accountEns, setAccountEns] = useState<string | null>(null);
  const ensProvider = useProvider({ chainId: 1}) // ENS only exists on mainnet

  useEffect(() => {
    ENSCacheManager
      .queryAddressForEns(address, false, ensProvider).then(result => {
        setAccountEns(result);
      })
  }, [address]);

  return accountEns;
}