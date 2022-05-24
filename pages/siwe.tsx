import { getCsrfToken, signIn } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import { useAccount, useConnect, useNetwork, useSignMessage } from 'wagmi'
import React from 'react';
import Layout from "../components/siwe/Layout";

function Siwe() {
  const { connect, connectors }  = useConnect();
  const { signMessageAsync, error: signError  } = useSignMessage();
  const { data: networkData, pendingChainId } = useNetwork()
  const { data: accountData } = useAccount();

  const handleLogin = async () => {
    try {
      await connect(connectors[0]);
      const callbackUrl = '/protected';
      const message = new SiweMessage({
        domain: window.location.host,
        address: accountData?.address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: pendingChainId,
        nonce: await getCsrfToken()
      });
      const signature = await signMessageAsync({ message: message.prepareMessage() });
      signIn('credentials', { message: JSON.stringify(message), redirect: false, signature, callbackUrl });
    } catch (error) {
      console.log(error)
      console.log(pendingChainId)
      window.alert(error)
    }
  }

  return (
    <Layout>
      <button
        onClick={(e) => {
          e.preventDefault()
          handleLogin()
        }}
      >
      Sign-In with Ethereum
      </button>
    </Layout>
  )
}

Siwe.Layout = Layout

export default Siwe