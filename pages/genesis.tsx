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
import Entity from '../artifacts/contracts/Entity.sol/Entity.json';
import BadgeToken from '../artifacts/contracts/BadgeToken.sol/BadgeToken.json';
import PermissionToken from '../artifacts/contracts/PermissionToken.sol/PermissionToken.json';
import { badgeContractAddress } from '../configs/blockchainConfig';
import Web3Modal from 'web3modal';
import { chainNetworkUrl } from '../configs/blockchainConfig';
type PageState = "ENTRY" | "LOADING" |"SUCCESS"

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

  /**
   * 
   */
  async function deployEntity(entityName: string) {

    try {
      setPageState("LOADING")
      console.log(`chainNetworkUrl: ${chainNetworkUrl}`);
      // const web3Modal = new Web3Modal({
      //   network: chainNetworkUrl, // optional
      //   cacheProvider: true,
      // })
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner();

      // Get genesis token contract address
      // const badgeContract = new ethers.Contract(badgeContractAddress, BadgeV1.abi, provider);
      // const genesisTokenAddress = await badgeContract.genesisToken();

      // // Initialize genesis token contract with signer 
      // const genesisTokenContract = new ethers.Contract(genesisTokenAddress, GenesisToken.abi, signer);

      //1. Deploy entity contract
      const entityContractFactory = new ethers.ContractFactory(Entity.abi, Entity.bytecode)

      const entity = await entityContractFactory.deploy(entityName)

      // Listen to EntityDeployed event
      entity.once("EntityDeployed", (entityAddress: string, entityName: string, genesisTokenHolder: string) => {
        console.log("Entity deployed ", entityAddress, entityName);
        // setEntityInfo({
        //   address: entityAddress,
        //   name: entityName,
        //   genesisTokenHolder: genesisTokenHolder
        // })

        // if (pageState !== "SUCCESS") {
        //   setPageState("SUCCESS");
        // }
      })

      //2. Deploy permission token contract
      const permissionTokenContractFactory = new ethers.ContractFactory(PermissionToken.abi, PermissionToken.bytecode)
      const permissionToken = await permissionTokenContractFactory.deploy(entity.address, entityName)
      entity.once("Transfer", (from: string, to: string, contractAddress: string) => {
        console.log("Transfer event", from, to, contractAddress);
      })

      // 3. Set permission token contract address in entity
      await entity.setPermTokenAddress(permissionToken.address)

      //4. Deploy badge token contract
      const badgeTokenContractFactory = new ethers.ContractFactory(BadgeToken.abi, BadgeToken.bytecode)
      const badgeToken = await badgeTokenContractFactory.deploy(entity.address, entityName)

      // // Execute transaction to mint
      // const transaction = await genesisTokenContract.mintGenToken("tokenURI", entityName, badgeContractAddress);
      // await transaction.wait();

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

