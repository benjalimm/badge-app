import React, { useEffect, useState } from 'react';
import PageTitleView from '../components/GenericComponents/PageTitleView';
import NavBar from '../components/navBar/NavBar';
import style from './create.module.css'
import DraftAndMintBadgeView from '../components/create/DraftAndMintBadgeView';
import MultiStepView from '../components/GenericComponents/MultiStepView';
import { BadgeData } from '../schemas/BadgeData';
import { PageState } from '../schemas/create';
import { uploadERC721ToIpfs } from '../utils/ipfsHelper';
import { getCurrentEntity } from '../utils/entityLocalState';
import MintBadgeLoadingView from '../components/create/MintBadgeLoadingView';
import MintBadgeReceiptView from '../components/create/MintBadgeReceiptView';
import { currentChain } from '../configs/blockchainConfig';
import { useSigner, useAccount, useProvider } from 'wagmi';
import { checkIfTransactionisSuccessful } from '../utils/etherscan';
import { useSession } from 'next-auth/react';
import { Entity__factory, BadgeToken__factory } from '../typechain';
import { calculateBadgePrice, getBaseBadgePrice } from '../utils/priceOracleUtils';
import { convertWeiBigNumberToEth, ethToWeiMultiplier, weiToEthMultiplier } from '../utils/ethConversionUtils';
import { ethers } from 'ethers';

export default function CreateBadgeView() {
  
  // ** PAGE STATE ** \\
  const [randomState, setRandomState] = useState<number>(0)
  const [pageState, setPageState] = useState<PageState>("DraftBadge");
  const [loadingPercentage, setLoadingPercentage] = useState<number>(0)

  // ** PERTINENT BADGE DATA ** \\
  const [badgeData, setBadgeData] = useState<BadgeData | null>(null)
  const [recipientAddress, setRecipientAddress] = useState<string | null>(null);
  const [email, setEmailAddress] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [estimatedGasFeesInEth, setEstimatedGasFeesInEth] = 
  useState<number | null>(null)
  const currentEntityInfo = getCurrentEntity();

  // ** BASE BADGE PRICE ** \\
  const [baseBadgePriceInEth, setBaseBadgePriceInEth] = useState<number>(0);

  // ** WAGMI HOOKS ** \\
  const { data: signer, status: signerStatus, isLoading, isSuccess } = useSigner()
  const { data: session, status: sessionStatus } = useSession()

  // ** SHOULD MANUALLY POLL STATE  ** \\
  const [shouldPoll, setShouldPoll] = useState<boolean>(false)

  function getFinalBadgePrice(): number {
    console.log("Get final badge price")
    return calculateBadgePrice(baseBadgePriceInEth, badgeData?.level || 0)
  }

  // ** LOADING INDICATOR LOGIC ** \\
  useEffect(() => {
    if (pageState === "LoadingMintBadge") {
      
      // 1. Start at 5%
      const startPercentage = 5

      // 2. Complete at 95%
      const endPercentage = 95

      // 3. Timer should be 20s
      const duration = 20
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
      checkIfTransactionisSuccessful(transactionHash, session.user!.name!).then(successful => {
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

  // ** GET BASE BADGE PRICE ** \\
  useEffect(() => {
    console.log(`status: ${signerStatus}`)
    if (isSuccess) {
      console.log(`Getting base badge price with session status ${sessionStatus} and signer status ${signerStatus}`)
      
      getBaseBadgePrice(signer).then(price => {
        console.log(`Base badge price: ${price}`);
        const eth = convertWeiBigNumberToEth(price)
        setBaseBadgePriceInEth(eth);
      }).catch(err => {
        
        console.log(`Error setting base badge price: ${JSON.stringify(err)}`)
      })
    }
    
  }, [randomState, isSuccess])

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
    setBadgeData(badgeData);
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
    setRecipientAddress(recipientAddress);
    if(email) setEmailAddress(email);

    try {
      // Check if entity info is present
      if (!currentEntityInfo) {
        throw new Error("No current entity info");
      }

      // 2. Upload ERC721 metadata to IPFS
      const url = await uploadERC721ToIpfs({
        title: badgeData.title,
        type: 'object',
        properties: {
          "name": { 
            type: 'string',
            description: badgeData.title
          },
          "description": {
            type: 'string',
            description: badgeData.content
          },
          "image": {
            type: 'string',
            description: "https://www.dropbox.com/s/i0nqh2fprq8lsb5/Badge%20Trophy.mp4?raw=1"
          }
        }
      })
      console.log(`Badge IPFS URL: ${url}`)
      
      // 3. Instantiate Entity contract
      console.log(currentEntityInfo.address);
      const entity = Entity__factory.connect(currentEntityInfo.address, signer);
      const badgeTokenAddress = await entity.badgeToken()
      console.log(`badgeTokenAddress: ${badgeTokenAddress}`);
      const badgeToken = BadgeToken__factory.connect(badgeTokenAddress, signer);
    
      console.log(`Badge level: ${badgeData.level}`);
      
      // 4. Start listeneing for transfer
      badgeToken.once("Transfer", (from: string, to: string, id: string) => {
        console.log("Transfer event triggered", from, to);
        console.log("Successfully minted Badge")
        setPageState("BadgeSuccessfullyMinted")

        const updatedBadgeData = { ...badgeData, id: parseInt(id) }
        setBadgeData(updatedBadgeData);
        console.log(parseInt(id))
      })

      const badgePriceInEth = getFinalBadgePrice()
      
      // 5. Mint Badge + set page state to loading
      const transaction = await entity.mintBadge(
        recipientAddress, 
        badgeData.level,
        url,
        { value: ethers.utils.parseEther(`${badgePriceInEth}`) }
      );
      setPageState("LoadingMintBadge");
      
      setTransactionHash(transaction.hash)

    } catch (error) {
      console.log(error);
    }
  }

  function renderMainViewBasedOnPageState() {
    switch (pageState) {
      case "LoadingMintBadge":
        return <MintBadgeLoadingView loadingPercentage={loadingPercentage}/>

      case "BadgeSuccessfullyMinted":
        return <MintBadgeReceiptView
          badgeId={badgeData.id}
          recipient={recipientAddress}
          email={email}
          level={badgeData.level}
          chain={currentChain}
          transactionHash={transactionHash}

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
        />

    }
  }

  return <div className={style.background}>
    <NavBar sticky={true}/>
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