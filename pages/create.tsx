import React, { useEffect, useState, useContext } from 'react';
import PageTitleView from '../components/GenericComponents/PageTitleView';
import NavBar from '../components/navBar/NavBar';
import style from './create.module.css'
import DraftAndMintBadgeView from '../components/create/DraftAndMintBadgeView';
import MultiStepView from '../components/GenericComponents/MultiStepView';
import { BadgeData } from '../schemas/BadgeData';
import { PageState } from '../schemas/create';
import { uploadERC721ToIpfs } from '../utils/ipfsHelper';
import { ethers } from 'ethers';
import { getCurrentEntity } from '../utils/entityLocalState';
import MintBadgeLoadingView from '../components/create/MintBadgeLoadingView';
import MintBadgeReceiptView from '../components/create/MintBadgeReceiptView';
import { currentChain } from '../configs/blockchainConfig';
import { useSigner, useAccount } from 'wagmi';
import { checkIfTransactionisSuccessful } from '../utils/etherscan';
import { useSession } from 'next-auth/react';
import { Entity__factory, BadgeToken__factory } from '../typechain';

export default function CreateBadgeView() {

  const [pageState, setPageState] = useState<PageState>("DraftBadge");
  const [loadingPercentage, setLoadingPercentage] = useState<number>(0)

  /** Data */
  const [badgeData, setBadgeData] = useState<BadgeData | null>(null)
  const [recipientAddress, setRecipientAddress] = useState<string | null>(null);
  const [email, setEmailAddress] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [estimatedGasFeesInEth, setEstimatedGasFeesInEth] = 
  useState<number | null>(null)
  const currentEntityInfo = getCurrentEntity();

  /* Wagmi hooks */
  const { data:signer } = useSigner()
  const { data: accountResults } = useAccount()
  const { data: session } = useSession()

  /** Polling  */
  const [shouldPoll, setShouldPoll] = useState<boolean>(false)

  /** Start loading indicator */
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

  /** Poll transaction via api manually here*/
  useEffect(() => {
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

  /** Estimate gas fees here */
  useEffect(() => {
    estimateGasFees().then(fees => {
      console.log(fees)
      setEstimatedGasFeesInEth(fees)
    }).catch(err => {
      console.log(err);
    })
  }, [pageState])

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

  async function estimateGasFees(): Promise<number> {

    // 1. Establish connection to contract
    const entity = Entity__factory.connect(currentEntityInfo.address, signer);

    console.log("Estimating gas...")
    // 2. Estimate gas 
    /// Note: You should be able to enter in no ether with a level 0 Badge 
    const estimation = await entity.estimateGas.mintBadge("0x15eDb84992cd6E3ed4f0461B0Fbe743AbD1eA7b5", 0, "fakeURL", { value: 0})
    const etherEstimate = ethers.utils.formatEther(estimation)
    console.log(`Estimated gas: ${etherEstimate} ETH`)
    return parseInt(etherEstimate);
  }

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
      
      // 5. Mint Badge + set page state to loading
      const transaction = await entity.mintBadge(
        recipientAddress, 
        badgeData.level, 
        url,
        { value: ethers.utils.parseEther('0.05')}
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
          badgePriceInEth={0.05}
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