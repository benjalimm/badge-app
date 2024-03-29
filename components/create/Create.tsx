import React, { useEffect, useState } from 'react';
import PageTitleView from '../GenericComponents/PageTitleView';
import NavBar from '../navBar/NavBar';
import style from './Create.module.scss'
import DraftAndMintBadgeView from './pageComponents/DraftAndMintBadgeView';
import MultiStepView from '../GenericComponents/MultiStepView';
import { BadgeData, BadgeInfo } from '../../schemas/BadgeData';
import { PageState } from '../../schemas/create';
import useCurrentEntity from '../../utils/hooks/useCurrentEntity';
import MintBadgeLoadingView from './pageComponents/MintBadgeLoadingView';
import MintBadgeReceiptView from './pageComponents/MintBadgeReceiptView';
import { currentChain } from '../../configs/blockchainConfig';
import { useSigner, useAccount, useProvider } from 'wagmi';
import { checkIfTransactionisSuccessful } from '../../utils/etherscan';
import { useSession } from 'next-auth/react';
import { Entity__factory, BadgeToken__factory } from '../../typechain';
import { calculateBadgePrice, getBaseBadgePrice } from '../../utils/priceOracleUtils';
import { convertWeiBigNumberToEth } from '../../utils/ethConversionUtils';
import { ethers } from 'ethers';
import { calculateBXP } from '../../utils/badgeXPUtils';
import { uploadBadgeIPFS } from '../../utils/badgeUploadUtils';
import { badgeMediaList } from '../../utils/badgeMediaList';
import { DomainTypeProps } from '../../utils/serverSidePropsUtil';
import useGateKeep from '../../utils/hooks/useGateKeep';
import { Chain } from '@prisma/client';
import { getMarketPlaceAssetLink } from '../../utils/marketplaceLinksUtils';

export default function CreateBadgeView(domainTypeProps: DomainTypeProps) {

  // Block if not authorized  
  const { allowed, loading } = useGateKeep(domainTypeProps.domainType)

  // ** USER STATE ** \\
  const [userEthBalance, setUserEthBalance] = useState<number | null>(null);
  
  // ** PAGE STATE ** \\
  const [randomState, setRandomState] = useState<number>(0)
  const [pageState, setPageState] = useState<PageState>("DraftBadge");
  const [loadingPercentage, setLoadingPercentage] = useState<number>(0)
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false)
  const [sentEmail, setSentEmail] = useState<boolean>(false)

  // ** PERTINENT BADGE DATA ** \\
  const [badgeInputData, setBadgeInputData] = useState<BadgeData | null>(null)
  const [ipfsUrl, setIpfsUrl] = useState<string | null>(null);
  const [recipientAddress, setRecipientAddress] = useState<string | null>(null);
  const [badgeTokenAddress, setBadgeTokenAddress] = useState<string | null>(null);
  const [tokenId, setTokenId] = useState<number | null>(null);
  const [email, setEmailAddress] = useState<string | null>(null);
  const [txHash, setTransactionHash] = useState<string>("");
  const [estimatedGasFeesInEth, setEstimatedGasFeesInEth] = 
  useState<number | null>(null)
  const currentEntityInfo = useCurrentEntity();
  const [indexOfBadgeMedia, setIndexOfBadgeMedia] = useState<number>(0);

  // ** BASE BADGE PRICE ** \\
  const [baseBadgePriceInEth, setBaseBadgePriceInEth] = useState<number>(0.0035);

  // ** WAGMI HOOKS ** \\
  const { data: signer, status: signerStatus, isLoading, isSuccess: isSignerSuccess } = useSigner()
  const { data: session, status: sessionStatus } = useSession()
  const provider = useProvider();
  const { address } = useAccount()

  // ** SHOULD MANUALLY POLL STATE  ** \\
  const [shouldPoll, setShouldPoll] = useState<boolean>(false)

  function getFinalBadgePrice(): number {
    console.log("Get final badge price")
    return calculateBadgePrice(baseBadgePriceInEth, badgeInputData?.level || 0)
  }

  // ** LOADING INDICATOR LOGIC ** \\
  useEffect(() => {
    if (pageState === "LoadingMintBadge") {
      
      // 1. Start at 5%
      const startPercentage = 5

      // 2. Complete at 95%
      const endPercentage = 95

      // 3. Timer should be 20s
      const duration = 30
      let currentPercentage = startPercentage

      // 4. Calculated increment for every loop
      const incrementedPercentagePerMs = (endPercentage - startPercentage) / (duration * 100) 
      
      // 5. Start timer
      const interval = setInterval(() => {

        // 5.1 Increment percentage
        if (currentPercentage < endPercentage) {
          currentPercentage += incrementedPercentagePerMs
          setLoadingPercentage(currentPercentage)
        }

        // 6. If timer is up + no successful Badge -> Poll manually with api
        if  (currentPercentage >= endPercentage &&  pageState === "LoadingMintBadge") {
          setShouldPoll(true)

          // 6.1 Clear interval
          clearInterval(interval);
        }
      }, 10);

    }

  }, [pageState])

  // ** MANUAL TX POLLING LOGIC ** \\
  useEffect(() => {
    // If the event doesn't trigger -> We manually call an API to figure out if the transaction was successfull.

    if (shouldPoll) {
      console.log("Polling for transaction")
      checkIfTransactionisSuccessful(txHash, session.user!.name!).then(successful => {
        if (successful) {
          setPageState("BadgeSuccessfullyMinted")
        }
      }).catch(err =>{
        console.log(`Polling error: ${err}`)
      })
    }

  }, [shouldPoll])

  // ** ESTIMATE GAS FEES ** \\
  useEffect(() => {
    
    if (sessionStatus === "authenticated") {
      estimateGasFees().then(fees => {
        console.log(fees)
        setEstimatedGasFeesInEth(fees)
      }).catch(err => {
        console.log(err);
      })

    }
    
  }, [randomState])

  // ** GET USER BALANCE ** \\
  useEffect(() => {
    console.log(`Signer: ${signer}`)

    if (address) {
      provider.getBalance(address).then(balance => {
        const ethBalance = convertWeiBigNumberToEth(balance);
        setUserEthBalance(ethBalance);
      }).catch(err => {
        console.log("Error with getting account balance")
        console.error(err);
      })

    }
  }, [randomState])

  // ** GET BASE BADGE PRICE ** \\
  useEffect(() => {
    console.log(`status: ${signerStatus}`)
    if (isSignerSuccess) {
      console.log("Signer success")
      console.log(`Getting base badge price with session status ${sessionStatus} and signer status ${signerStatus}`)
      
      getBaseBadgePrice(signer).then(price => {
        console.log(`Base badge price: ${price}`);
        const eth = convertWeiBigNumberToEth(price)
        setBaseBadgePriceInEth(eth);
      }).catch(err => {
        
        console.log(`Error setting base badge price: ${JSON.stringify(err)}`)
      })
    }
    
  }, [randomState, isSignerSuccess])

  // ** TRIGGER RANDOM STATE AFTER 1 SECOND ** \\
  useEffect(() => {
    /// NOTE:  Why do we do this? Because the signer is weird -> When attempting to get the base badge price or eth gas price, the signer doesn't work when it's first accessed even if the status says its successful. In order to fix this, we wait one second to trigger a random state. When it's called a second time, it works.
    setTimeout(() => {
      setRandomState(1)
    }, 1000)

  },[])

  function getIndexOfCurrentStep(): number {
    return pageState === "DraftBadge" ? 0 : 1;
  }

  function onSubmitDraftBadgeData(badgeData: BadgeData) {
    console.log(badgeData);
    setBadgeInputData(badgeData);
    setPageState("MintBadge");
  }

  function onBackToDraft() {
    setPageState("DraftBadge");
  }

  // ** ESTIMATE GAS FEE FUNCTION ** \\
  async function estimateGasFees(): Promise<number> {

    // 1. Establish connection to contract
    const entity = Entity__factory.connect(currentEntityInfo.address, signer);

    console.log("Estimating gas...")
    // 2. Estimate gas 
    /// Note: You should be able to enter in no ether with a level 0 Badge 
    const estimation = await entity.estimateGas.mintBadge("0x15eDb84992cd6E3ed4f0461B0Fbe743AbD1eA7b5", 0, "fakeURL", { value: 0})
    return convertWeiBigNumberToEth(estimation);
  }

  // ** MINT BADGE ** \\
  async function onMintAndSendBadge(badgeData: BadgeData, recipientAddress: string, email?: string) {

    // We set button to loading here as this is where the "Pause" starts
    setIsButtonLoading(true)

    // Cache addresses
    setRecipientAddress(recipientAddress);
    if(email) setEmailAddress(email);

    try {
      // Check if entity info is present
      if (!currentEntityInfo) {
        throw new Error("No current entity info");
      }

      // 1. Get video url
      const videoUrl = badgeMediaList[indexOfBadgeMedia].storageUrl
      const gifUrl = badgeMediaList[indexOfBadgeMedia].storageGif

      // 2. Upload ERC721 metadata to IPFS
      const url = await uploadBadgeIPFS(badgeData, videoUrl, gifUrl, calculateBXP(badgeData?.level ?? 0));
      setIpfsUrl(url);
      console.log(`Badge IPFS URL: ${url}`)
      
      // 3. Instantiate Entity contract
      console.log(currentEntityInfo.address);
      const entity = Entity__factory.connect(currentEntityInfo.address, signer);
      const badgeTokenAddress = await entity.badgeToken()
      setBadgeTokenAddress(badgeTokenAddress)
      console.log(`badgeTokenAddress: ${badgeTokenAddress}`);
      const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
    
      console.log(`Badge level: ${badgeData.level}`);
      
      // 4. Start listeneing for transfer
      let transactionHash: string;
      const onTransferSuccess = (from: string, to: string, id: string) => {
        if(to === recipientAddress) {
          console.log("Transfer event triggered", from, to);
          console.log("Successfully minted Badge")
          setPageState("BadgeSuccessfullyMinted")
          
          const tokenIdAsNumber = parseInt(id)
          setTokenId(tokenIdAsNumber)
          badgeToken.off("Transfer", onTransferSuccess)

          // 4.1 Log database snapshot in DB
          logBadgeInfoSnapshot({ 
            jsonUrl: url,
            collectionId: tokenIdAsNumber,
            collectionAddress: badgeTokenAddress,
            recipientAddress: recipientAddress,
            title: badgeData.title,
            description: badgeData.content,
            level: badgeData.level,
            bxp: calculateBXP(badgeData.level),
            chain: currentChain as Chain,
            txHash: transactionHash,
            imageUrl: badgeMediaList[indexOfBadgeMedia].storageGif,
            animationUrl: badgeMediaList[indexOfBadgeMedia].storageUrl,
            recipientEns: badgeData.recipientEns,
          }, email)
        }
      }

      badgeToken.on("Transfer", onTransferSuccess)
      
      // 5. Mint Badge + set page state to loading
      const badgePriceInEth = getFinalBadgePrice()
      const transaction = await entity.mintBadge(
        recipientAddress, 
        badgeData.level,
        url,
        { value: ethers.utils.parseEther(`${badgePriceInEth}`) }
      );
      transactionHash = transaction.hash
      setIsButtonLoading(false)
      setPageState("LoadingMintBadge")
      setTransactionHash(transactionHash)

    } catch (error) {
      // Cancel loading if there is an error
      setIsButtonLoading(false)
      console.log(error);
    }
  }

  function resetToDraftBadge() {
    setPageState("DraftBadge")
    setSentEmail(false)
  }

  async function logBadgeInfoSnapshot(badgeInfo: BadgeInfo, email?: string) {
    return fetch('/api/badge', {
      method: "POST",
      body: JSON.stringify({ data: { badgeInfo, email }})
    })
  }

  function renderMainViewBasedOnPageState() {
    switch (pageState) {
      case "LoadingMintBadge":
        return <MintBadgeLoadingView loadingPercentage={loadingPercentage}/>

      case "BadgeSuccessfullyMinted":
        return <MintBadgeReceiptView
          badgeId={tokenId}
          recipient={recipientAddress}
          email={email}
          level={badgeInputData?.level ?? 0}
          chain={currentChain}
          transactionHash={txHash}
          xp={calculateBXP(badgeInputData?.level ?? 0)}
          onContinue={resetToDraftBadge}
          ens={badgeInputData.recipientEns}
          marketPlaceLink={getMarketPlaceAssetLink(currentChain, badgeTokenAddress, tokenId)}

        />
      default:
        return <DraftAndMintBadgeView 
          onSubmitDraftBadgeData={onSubmitDraftBadgeData}
          onMintAndSendBadge={onMintAndSendBadge}
          pageState={pageState}
          onBackToDraft={onBackToDraft}
          gasFeesInEth={estimatedGasFeesInEth}
          baseBadgePriceInEth={baseBadgePriceInEth}
          finalBadgePriceInEth={getFinalBadgePrice()}
          userBalanceInEth={userEthBalance}
          isButtonLoading={isButtonLoading}
          indexOfBadgeMedia={indexOfBadgeMedia}
          setIndexOfBadgeMedia={setIndexOfBadgeMedia} 
        />

    }
  }
  if (!allowed) return null;

  return <div className={style.background}>
    <NavBar sticky={true} 
      {...domainTypeProps} 
      connectButtonAction={
        "CONNECT_WALLET"
      }/>
    <PageTitleView title='Award a Badge'/>
    
    <div className={style.pageContainer}>
      <MultiStepView 
        steps={["Create Badge", "Send Badge"]} 
        indexOfCurrentStep={getIndexOfCurrentStep()}
        style={{ marginTop: '30px' }}
      />
      {renderMainViewBasedOnPageState()}
    </div>
  </div>
}
