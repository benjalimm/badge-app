import React, { useEffect, useState, useContext } from 'react';
import PageTitleView from '../components/PageTitleView';
import NavBar from '../components/navBar/NavBar';
import style from '../styles/create/create.module.css'
import DraftAndMintBadgeView from '../components/create/DraftAndMintBadgeView';
import MultiStepView from '../components/GenericComponents/MultiStepView';
import { BadgeData } from '../schemas/BadgeData';
import { PageState } from '../schemas/create';
import { uploadERC721ToIpfs } from '../utils/ipfsHelper';
import Entity from "../artifacts/contracts/Entity.sol/Entity.json";
import BadgeToken from '../artifacts/contracts/BadgeToken.sol/BadgeToken.json';
import { ethers } from 'ethers';
import { getCurrentEntity } from '../utils/entityLocalState';
import { EntityInfo } from "../schemas/EntityLocalStorage";
import { Web3AuthContext } from '../contexts/Web3AuthContext';

export default function CreateBadgeView() {

  const [pageState, setPageState] = useState<PageState>("DraftBadge");
  const [currentEntityInfo, setCurrentEntityInfo] 
  = useState<EntityInfo | null>(null)
  const { web3Modal } = useContext(Web3AuthContext);

  useEffect(() => {
    const currentEntity = getCurrentEntity();
    if (currentEntity) {
      setCurrentEntityInfo(currentEntity);
    }
  }, [])

  function getIndexOfCurrentStep(): number {
    return pageState === "DraftBadge" ? 0 : 1;
  }

  function onSubmitDraftBadgeData(badgeData: BadgeData) {
    console.log(badgeData);
    setPageState("MintBadge");
  }

  function onBackToDraft() {
    setPageState("DraftBadge");
  }

  async function onMintAndSendBadge(badgeData: BadgeData, recipientAddress: string, email?: string) {
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
      const badgeTokenAddress = await entity.badgeTokenContract()
      console.log(`badgeTokenAddress: ${badgeTokenAddress}`);
      const badgeToken = new ethers.Contract(badgeTokenAddress, BadgeToken.abi, signer)
      
      // 4. Mint Badge
      await entity.mintBadge(recipientAddress, url)

      badgeToken.once("Transfer", (from: string, to: string, id: string) => {
        console.log("Transfer event triggered", from, to, id);
        console.log("Successfully minted Badge")
      })

    } catch (error) {
      console.log(error);
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
      <DraftAndMintBadgeView 
        onSubmitDraftBadgeData={onSubmitDraftBadgeData}
        onMintAndSendBadge={onMintAndSendBadge}
        pageState={pageState}
        onBackToDraft={onBackToDraft}
      />
    </div>
  </div>
}