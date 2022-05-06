import React, { useEffect, useCallback, useReducer, useState} from 'react';
import { AppProps } from 'next/app'
import '../styles/index.css'
import { Web3AuthContext, reducer, web3Modal, initialState } from '../contexts/Web3AuthContext';
import { providers } from 'ethers'
import Web3 from 'web3';
import { ethers } from 'ethers';

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { provider, web3Provider, address, chainId } = state
  const active = !!provider;
  const connect = useCallback(async function () {
    console.log("Connecting")

    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    const network = await web3Provider.getNetwork()
    console.log(`login network`, network)
    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })
    console.log(`Wallet state: ${JSON.stringify(state)}`)
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect().then(() => {
        // disconnect()
      }).catch(err => {
        console.error(err)
      })
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        console.log('chainChanged to:', _hexChainId)
        window.location.reload()
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      const handleNetworkChanged = (networkId: string) => {
        console.log('networkChanged to:', networkId)
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('networkChanged', handleNetworkChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  return <Web3AuthContext.Provider value={{ provider, address, web3Modal, web3Provider, chainId, connect, disconnect, active}}>
    <Component {...pageProps} />
  </Web3AuthContext.Provider>  
}

export default MyApp