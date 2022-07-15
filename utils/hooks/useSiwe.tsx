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
      SiweManager.setCancelledState(false);
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
        SiweManager.setCancelledState(true);
      }
      throw error;
    }
    
  }

  useEffect(() => {

    const id = SiweManager.listenToState((loading, cancelled) => {
      setLoading(loading)
      setCancelled(cancelled);
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
  private static loading = false;
  private static cancelled = false;
  private static listeners: {id: string, execute: ((loading: boolean, cancelled: boolean) => void)}[] = [];

  static setLoadingState(loading: boolean) {
    this.loading = loading;
    this.listeners.forEach(listener => {
      listener.execute(loading,  this.cancelled);
    })
  }

  static setCancelledState(cancelled: boolean) {
    this.cancelled = cancelled;
    this.listeners.forEach(listener => {
      listener.execute(this.loading, cancelled);
    })
  }

  static listenToState(onChange: (loading: boolean, cancelled: boolean) => void): string {
    onChange(this.loading, this.cancelled);
    const id = uuidv4()
    this.listeners.push({ id, execute: onChange });
    return id;
  }

  static stopListening(id: string) {
    const index = this.listeners.findIndex((listener) => listener?.id === id);
    delete this.listeners[index];
  }
}