import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext, useState, ReactElement } from 'react'
import styles from '../styles/genesis.module.css'
import PageTitleView from '../components/PageTitleView'
import { useRouter } from 'next/router';
import { Web3AuthContext } from '../contexts/Web3AuthContext';
import DeployEntityEntryView from '../components/genesis/DeployEntityEntryView';
import DeployEntitySuccessView from '../components/genesis/DeployEntitySuccessView';
import DeployEntityLoadingView from '../components/genesis/DeployEntityLoadingView';
import { EntityInfo } from '../schemas/genesis';
import { ethers } from 'ethers';
import BadgeToken from '../artifacts/contracts/BadgeToken.sol/BadgeToken.json';
import BadgeRegistry from '../artifacts/contracts/BadgeRegistry.sol/BadgeRegistry.json';
import PermissionToken from '../artifacts/contracts/PermissionToken.sol/PermissionToken.json';
import { badgeContractAddress } from '../configs/blockchainConfig';
import { chainNetworkUrl } from '../configs/blockchainConfig';
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { ERC721Metadata } from "../schemas/ERC721Metadata";

type PageState = "ENTRY" | "LOADING" |"SUCCESS"
const client = ipfsHttpClient({ 
  host: 'ipfs.infura.io', 
  port: 5001, 
  protocol: 'https' 
})

/**
 * Genesis page
 */
export default function DeployEntityPage() {
  const router = useRouter();
  const { active, web3Modal } = useContext(Web3AuthContext);
  const [pageState, setPageState] = useState<PageState>("ENTRY")
  const [entityInfo, setEntityInfo] = useState<EntityInfo>({ 
    address: "",
    name: "",
    genesisTokenHolder: ""
  });

  //
  async function uploadToIpfs(metadata: ERC721Metadata): Promise<string> {
    try {
      const data = JSON.stringify(metadata)
      const added = await client.add(
        data, { 
          progress: (prog) => console.log(`Received: ${prog}`)
        }
      )

      return `https://ipfs.infura.io/ipfs/${added.path}`   

    } catch (e) {
      console.log(e)
    }
  }
  async function deployEntity(entityName: string) {

    try {
      setPageState("LOADING")
      console.log(`chainNetworkUrl: ${chainNetworkUrl}`);

      // 1. Establish connection
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner();

      // 2. Instantiate Badge Registry
      const badgeRegistry = new ethers.Contract(badgeContractAddress, BadgeRegistry.abi, signer)

      // 3. Generate IPFS
      const ipfsUrl = await uploadToIpfs({ 
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

      // 4. Save 
      console.log(`IPFS URL: ${ipfsUrl}`)
      await badgeRegistry.deployEntity(entityName, ipfsUrl)

      // const entityContractFactory = new ethers.ContractFactory(Entity.abi, Entity.bytecode)

      // const entity = await entityContractFactory.deploy(entityName)

      // Listen to EntityDeployed event
      badgeRegistry.once("EntityDeployed", (entityAddress: string, entityName: string, genesisTokenHolder: string) => {
        console.log("Entity deployed ", entityAddress, entityName);
        setEntityInfo({
          address: entityAddress,
          name: entityName,
          genesisTokenHolder: genesisTokenHolder
        })

        if (pageState !== "SUCCESS") {
          setPageState("SUCCESS");
        }
      })

      badgeRegistry.once("Transfer", (from: string, to: string, contractAddress: string) => {
        console.log("Transfer event", from, to, contractAddress);
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
        return <DeployEntityLoadingView />
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

