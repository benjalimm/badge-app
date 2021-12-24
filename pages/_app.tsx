import React from 'react'
import { AppProps } from 'next/app'
import '../styles/index.css'
// import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
// import { provider } from 'web3-core/types';
import { Web3AuthContext, Web3ModalAuth } from '../contexts/Web3AuthContext';

function getLibrary(provider: any) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Web3ModalAuth>
    <Component {...pageProps} />
  </Web3ModalAuth>  
}

export default MyApp