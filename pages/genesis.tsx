import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext, useState, ReactElement } from 'react'
import styles from '../styles/genesis.module.css'
import PageTitleView from '../components/PageTitleView'
import { useRouter } from 'next/router';
import DeployEntityEntryView from '../components/genesis/DeployEntityEntryView';
import DeployEntitySuccessView from '../components/genesis/DeployEntitySuccessView';
import DeployEntityLoadingView from '../components/genesis/DeployEntityLoadingView';
import { EntityInfo } from '../schemas/genesis';
import { ethers } from 'ethers';
import BadgeRegistry from '../artifacts/BadgeRegistry.sol/BadgeRegistry.json';
import { badgeContractAddress } from '../configs/blockchainConfig';
import { setCurrentEntity } from '../utils/entityLocalState';
import { uploadERC721ToIpfs } from '../utils/ipfsHelper';
import { useSession } from 'next-auth/react';
import { useSigner } from 'wagmi';
import { BadgeRegistry__factory} from "../typechain";

type PageState = 
"ENTRY" | 
"LOADING" |
"SUCCESS"

type DeployState = 
"STARTED_IPFS_UPLOAD" | 
"IPFS_UPLOADED" | 
"STARTED_ENTITY_DEPLOYMENT" | 
"ENTITY_REGISTERED";

export default function DeployEntityPage() {
  const router = useRouter();
  const { status } = useSession();
  const [pageState, setPageState] = useState<PageState>("ENTRY")
  const [entityInfo, setEntityInfo] = useState<EntityInfo>({ 
    address: "",
    name: "",
    genesisTokenHolder: ""
  });
  const active = status === "authenticated";
  const { data:signer } = useSigner()
  
  const [loadingPercentage, setLoadingPercentage] 
  = useState<number>(5) 
  const [deployState, setDeployState] = 
  useState<DeployState>("STARTED_IPFS_UPLOAD")

  useEffect(() => {
    if (pageState === "LOADING") {
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

  }, [pageState, deployState])

  /**
   * This method registers an entity on chain
   * @param entityName The name of the entity to deploy
   */
  async function deployEntity(entityName: string) {

    try {

      // 1. Instantiate Badge Registry
      const badgeRegistry = BadgeRegistry__factory.connect(badgeContractAddress, signer)

      setDeployState("STARTED_IPFS_UPLOAD")

      // 3. Check if ipfs url exist, if not -> generate IPFS
      const ipfsUrl = await uploadERC721ToIpfs({ 
        title:  entityName  + " - Badge Genesis token",
        type: "object",
        properties: {
          "name": { 
            type: "string",
            description: `${entityName} - Genesis token`
          },
          "description": {
            type: "string",
            description: `Genesis token for ${entityName} for Badge.xyz`
          }
        }
      }) 
      setDeployState("IPFS_UPLOADED")
      console.log(`IPFS URL: ${ipfsUrl}`)

      // 1. Deploy the entity
      await badgeRegistry.registerEntity(entityName, ipfsUrl);
      setDeployState("STARTED_ENTITY_DEPLOYMENT")
      setPageState("LOADING")

      // Listen to EntityDeployed event
      badgeRegistry.once("EntityRegistered", (entityAddress: string, entityName: string, genesisTokenHolder: string) => {
        console.log("Entity registered ", entityAddress, entityName);
        setDeployState("ENTITY_REGISTERED")

        // 1. Set entity info for view
        setEntityInfo({
          address: entityAddress,
          name: entityName,
          genesisTokenHolder: genesisTokenHolder
        })

        // 2. Set entity info for local storage
        setCurrentEntity({
          address: entityAddress,
          name: entityName,
          timestampOfLastVerified: Date.now()
        })

        // 3. Set page state to success, this will change the state to the receipt view
        if (pageState !== "SUCCESS") {
          setPageState("SUCCESS");
        }
      })
    } catch (error) {
      console.error(error)
    }
    
  }

  /**
   * If the user is not logged in, redirect to landing page
   */
  useEffect(() => {
    if (!active) {
      router.push('/')
    }
  } , [active])

  function renderViewBasedOnPageState(): ReactElement {
    switch (pageState) {
      case "ENTRY":
        return <DeployEntityEntryView deployEntity={deployEntity}/>
      case "LOADING":
        return <DeployEntityLoadingView loadingPercentage={loadingPercentage}/>
      case "SUCCESS":
        return <DeployEntitySuccessView 
          name={entityInfo.name} 
          address={entityInfo.address} 
          genesisTokenHolder={entityInfo.genesisTokenHolder}
          tokenHolderEnsName={entityInfo.tokenHolderEnsName}
        />
      default:
        return <div>Unknown Page State</div>
    }
  }

  return (
    <div className={styles.background}>
      <Navbar sticky={true}/>
      <PageTitleView title={"Deploy a new entity by minting a Genesis token"}/>
      <div className={styles.pageContainer}>
        { renderViewBasedOnPageState() }
      </div>
    </div>
  )
}

