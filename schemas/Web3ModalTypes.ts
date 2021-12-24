import Web3Modal from 'web3modal'

export type StateType = {
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
}

export type ActionType =
  | {
    type: 'SET_WEB3_PROVIDER'
    provider?: StateType['provider']
    web3Provider?: StateType['web3Provider']
    address?: StateType['address']
    chainId?: StateType['chainId']
  }
  | {
    type: 'SET_ADDRESS'
    address?: StateType['address']
  }
  | {
    type: 'SET_CHAIN_ID'
    chainId?: StateType['chainId']
  }
  | {
    type: 'RESET_WEB3_PROVIDER'
  }

export interface Web3ModalContextType {
  provider?: any;
  address?: string;
  web3Modal?: Web3Modal;
  web3Provider?: any;
  chainId?: number;
  active?: boolean;
  connect?: () => Promise<void>;
  disconnect?: () => Promise<void>;
}
