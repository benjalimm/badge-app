import { useRouter } from 'next/router';
import { getCsrfToken, signIn, signOut } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import { useAccount, useConnect, useNetwork, useSigner, useSignMessage } from 'wagmi'

export default function useSiwe(): { login: () => Promise<void> } {
  const router = useRouter()
  const { connect, connectors }  = useConnect();
  const { signMessageAsync  } = useSignMessage();
  const {  pendingChainId, activeChain } = useNetwork()
  const { data: accountData } = useAccount();

  // ** SIGN IN WITH ETHEREUM ** \\
  const login = async () => {
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
  }

  return { login };
}