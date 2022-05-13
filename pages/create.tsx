import React, { useEffect, useState, useContext } from 'react';
import PageTitleView from '../components/PageTitleView';
import NavBar from '../components/navBar/NavBar';
import style from '../styles/create/create.module.css'
import DraftAndMintBadgeView from '../components/create/DraftAndMintBadgeView';
import MultiStepView from '../components/GenericComponents/MultiStepView';
import { BadgeData } from '../schemas/BadgeData';
import { PageState } from '../schemas/create';
import { uploadERC721ToIpfs } from '../utils/ipfsHelper';
import Entity from "../artifacts/Entity.sol/Entity.json";
import BadgeToken from '../artifacts/BadgeToken.sol/BadgeToken.json';
import { ethers } from 'ethers';
import { getCurrentEntity } from '../utils/entityLocalState';
import { EntityInfo } from "../schemas/EntityLocalStorage";
import { Web3AuthContext } from '../contexts/Web3AuthContext';
import MintBadgeLoadingView from '../components/create/MintBadgeLoadingView';
import MintBadgeReceiptView from '../components/create/MintBadgeReceiptView';
import TransactionInfo from '../schemas/TransactionInfo';
import { Chain } from '../schemas/ChainTypes';
import { currentChain } from '../configs/blockchainConfig';

export default function CreateBadgeView() {

  const [pageState, setPageState] = useState<PageState>("DraftBadge");
  const [currentEntityInfo, setCurrentEntityInfo] 
  = useState<EntityInfo | null>(null)
  const [loadingPercentage, setLoadingPercentage] = useState<number>(0)

  /** Data */
  const [badgeData, setBadgeData] = useState<BadgeData | null>(null)
  const [recipientAddress, setRecipientAddress] = useState<string | null>(null);
  const [email, setEmailAddress] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string>("");

  const { web3Modal } = useContext(Web3AuthContext);

  useEffect(() => {
    const currentEntity = getCurrentEntity();
    if (currentEntity) {
      setCurrentEntityInfo(currentEntity);
    }
  }, [])

  useEffect(() => {
    if (pageState === "LoadingMintBadge") {
      // Start timer
      const startPercentage = 5
      const endPercentage = 95
      const duration = 20
      let currentPercentage = startPercentage
      const incrementedPercentagePerMs = (endPercentage - startPercentage) / (duration * 100) 
      setInterval(() => {
        if (currentPercentage < endPercentage) {
          currentPercentage += incrementedPercentagePerMs
          setLoadingPercentage(currentPercentage)
        }
      }, 10);

    }

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

  async function onMintAndSendBadge(badgeData: BadgeData, recipientAddress: string, email?: string) {
    setRecipientAddress(recipientAddress);
    if(email) setEmailAddress(email);

    try {
      // Check if entity info is present
      if (!currentEntityInfo) {
        throw new Error("No current entity info");
      }

      // 1. Establish connection
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner();

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
      const entity = new ethers.Contract(currentEntityInfo.address, Entity.abi, signer);
      const badgeTokenAddress = await entity.badgeToken()
      console.log(`badgeTokenAddress: ${badgeTokenAddress}`);
      const badgeToken = new ethers.Contract(badgeTokenAddress, BadgeToken.abi, signer)
      
      console.log(`Badge level: ${badgeData.level}`);
      // 4. Mint Badge + set page state to loading
      const transaction = await entity.mintBadge(
        recipientAddress, 
        badgeData.level, 
        url,
        { value: ethers.utils.parseEther('0.05')}
      );
      setPageState("LoadingMintBadge");

      badgeToken.once("Transfer", (from: string, to: string, id: string) => {
        console.log("Transfer event triggered", from, to);
        console.log("Successfully minted Badge")
        setPageState("BadgeSuccessfullyMinted")

        const updatedBadgeData = { ...badgeData, id: parseInt(id) }
        setBadgeData(updatedBadgeData);
        console.log(parseInt(id))
      })

      const { transactionHash } = (await transaction.wait()) as TransactionInfo
      setTransactionHash(transactionHash)

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
          level={3}
          chain={currentChain}
          transactionHash={transactionHash}

        />
      default:
        return <DraftAndMintBadgeView 
          onSubmitDraftBadgeData={onSubmitDraftBadgeData}
          onMintAndSendBadge={onMintAndSendBadge}
          pageState={pageState}
          onBackToDraft={onBackToDraft}
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