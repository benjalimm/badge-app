import React, { createContext } from 'react';
import Web3Modal from 'web3modal'
import { providers } from 'ethers'
import providerOptions from '../configs/Web3ModalProviderOptions';
import { StateType, ActionType, Web3ModalContextType } from '../schemas/Web3ModalTypes';

export const Web3AuthContext = createContext<Web3ModalContextType>({});

export let web3Modal: Web3Modal;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

export const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
}

export function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

