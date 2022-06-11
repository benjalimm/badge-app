import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext, useState, ReactElement } from 'react'
import styles from '../styles/genesis.module.css'
import PageTitleView from '../components/PageTitleView'
import { useRouter } from 'next/router';
import DeployEntityEntryView from '../components/genesis/DeployEntityEntryView';
import DeployEntitySuccessView from '../components/genesis/DeployEntitySuccessView';
import DeployEntityLoadingView from '../components/genesis/DeployEntityLoadingView';
import { EntityInfo } from '../schemas/genesis';
import { badgeContractAddress } from '../configs/blockchainConfig';
import { setCurrentEntity } from '../utils/entityLocalState';
import { uploadERC721ToIpfs } from '../utils/ipfsHelper';
import { useSession } from 'next-auth/react';
import { useSigner, useProvider } from 'wagmi';
import { BadgeRegistry__factory, BadgeRecoveryOracle__factory } from "../typechain";
import { setNewEntity, setTokenForEntity } from '../utils/recoveryOracleUtils';

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

  /** Progress view timer */
  useEffect(() => {
    if (pageState === "LOADING") {
      // Start timer
      const startPercentage = 5
      const endPercentage = 95
      const duration = 20
      let currentPercentage = startPercentage
      const incrementedPercentagePerMs = (endPercentage - startPercentage) / (duration * 100) 
      const interval = setInterval(() => {
        if (currentPercentage < endPercentage) {
          currentPercentage += incrementedPercentagePerMs
          setLoadingPercentage(currentPercentage)
        }

        if (currentPercentage >= endPercentage) {
          clearInterval(interval)
        }
      }, 10);

    }

  }, [pageState, deployState])

  /**
   * This method registers an entity on chain
   * @param entityName The name of the entity to deploy
   */
  async function registerEntity(entityName: string) {

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

      // 4. Set deploy state to uploaded
      setDeployState("IPFS_UPLOADED")
      console.log(`IPFS URL: ${ipfsUrl}`)

      // 5. Call register entity on Badge registry contract
      await badgeRegistry.registerEntity(entityName, ipfsUrl, true);

      // 6. Start entity deployment + start loading progress bar
      setDeployState("STARTED_ENTITY_DEPLOYMENT")
      setPageState("LOADING")

      // 7. Wait for entity to be registered, set data of entity once event is emitted
      badgeRegistry.once("EntityRegistered", (entityAddress: string, entityName: string, genesisTokenHolder: string) => {
        console.log("Entity registered ", entityAddress, entityName);
        setDeployState("ENTITY_REGISTERED")

        // 7.1. Set entity info for view
        setEntityInfo({
          address: entityAddress,
          name: entityName,
          genesisTokenHolder: genesisTokenHolder
        })

        // 7.2. Set entity info for local storage -> IMPORTANT
        setCurrentEntity({
          address: entityAddress,
          name: entityName,
          timestampOfLastVerified: Date.now()
        })

        // 7.3. Set page state to success, this will change the state to the receipt view
        if (pageState !== "SUCCESS") {
          setPageState("SUCCESS");
        }
      })
    } catch (error) {
      console.error(error)
    }
    
  }

  /** If the user is not logged in, redirect to landing page */
  useEffect(() => {
    if (!active) {
      router.push('/')
    }
  } , [active])

  function renderViewBasedOnPageState(): ReactElement {
    switch (pageState) {
      case "ENTRY":
        return <DeployEntityEntryView deployEntity={registerEntity}/>
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

