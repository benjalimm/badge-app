import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCsrfToken, signIn, signOut } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import { useAccount, useConnect, useNetwork, UserRejectedRequestError, useSigner, useSignMessage } from 'wagmi'
import { v4 as uuidv4 } from 'uuid';

export default function useSiwe(): { 
  login: () => Promise<void>,
  loading: boolean,
  cancelledLastLogin: boolean,
} {
  const { connect, connectors }  = useConnect();
  const { signMessageAsync  } = useSignMessage();
  const {  pendingChainId, activeChain } = useNetwork()
  const { data: accountData } = useAccount();
  const [loading,setLoading] = useState(false);
  const [listenerId, setListenerId] = useState("");
  const [cancelledLastLogin, setCancelled] = useState(false);

  // ** SIGN IN WITH ETHEREUM ** \\
  const login = async () => {
    try {
      setCancelled(false);
      SiweManager.setLoadingState(true);
      await connect(connectors[0]);
      const callbackUrl = `` // Redirect set to false -> Ignore callback Url
      const message = new SiweMessage({
        domain: window.location.host,
        address: accountData?.address,
        statement: 'Sign in with Ethereum into Badge.',
        uri: window.location.origin,
        version: '1',
        chainId: activeChain.id || pendingChainId ,
        nonce: await getCsrfToken()
      });
      const signature = await signMessageAsync({ message: message.prepareMessage() });
      await signIn('credentials', { message: JSON.stringify(message), redirect: false, signature, callbackUrl });
      SiweManager.setLoadingState(false);

    } catch (error) {
      console.error(error)
      SiweManager.setLoadingState(false);

      if (error instanceof UserRejectedRequestError) {
        setCancelled(true)
      }
      throw error;
    }
    
  }

  useEffect(() => {

    const id = SiweManager.listenToLoading(loading => {
      setLoading(loading)
    })
    setListenerId(id)

    return () => {
      SiweManager.stopListening(listenerId)
    }

  },[])

  return { login, loading, cancelledLastLogin };
}

// ** MANAGE SHARED STATE FOR SIWE HERE ** \\
class SiweManager {
  static loading = false;
  private static listeners: {id: string, execute: ((loading: boolean) => void)}[] = [];

  static setLoadingState(loading: boolean) {
    this.loading = loading;
    this.listeners.forEach(listener => {
      listener.execute(loading);
    })
  }

  static listenToLoading(setLoading: (loading: boolean) => void): string {
    setLoading(SiweManager.loading);
    const id = uuidv4()
    this.listeners.push({ id, execute: setLoading });
    return id;
  }

  static stopListening(id: string) {
    const index = this.listeners.findIndex((listener) => listener?.id === id);
    delete this.listeners[index];
  }
}