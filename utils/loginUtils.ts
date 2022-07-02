const handleLogin = async () => {
  try {
    await connect(connectors[0]);
    const callbackUrl = '/protected';
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
  } catch (error) {
    console.log(error)
  }
}