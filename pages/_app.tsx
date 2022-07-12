import React, { useEffect, useCallback, useReducer, useState} from 'react';
import { AppProps } from 'next/app'
import '../styles/index.css'
import { SessionProvider } from "next-auth/react"
import { WagmiConfig } from "wagmi"
import client, { chains } from '../utils/wagmiClient';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </RainbowKitProvider>
      
    </WagmiConfig>
  )
  
}

export default MyApp