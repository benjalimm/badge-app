import React, { useEffect, useCallback, useReducer, useState} from 'react';
import { AppProps } from 'next/app'
import '../styles/index.css'
import { SessionProvider } from "next-auth/react"
import { WagmiConfig } from "wagmi"
import client from '../utils/wagmiClient';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  )
  
}

export default MyApp