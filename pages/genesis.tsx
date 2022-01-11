import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext, useState, ReactElement } from 'react'
import styles from '../styles/genesis.module.css'
import PageTitleView from '../components/PageTitleView'
import { useRouter } from 'next/router';
import { Web3AuthContext } from '../contexts/Web3AuthContext';
import DeployEntityEntryView from '../components/genesis/DeployEntityEntryView';
import DeployEntitySuccessView from '../components/genesis/DeployEntitySuccessView';
import DeployEntityLoadingView from '../components/genesis/DeployEntityLoadingView';
import { EntityInfo, AnimationType } from '../schemas/genesis';
import { ethers } from 'ethers';
import BadgeV1 from '../artifacts/contracts/BadgeV1.sol/BadgeV1.json';
import GenesisToken from '../artifacts/contracts/GenesisToken.sol/GenesisToken.json';
import { badgeContractAddress } from '../configs/blockchainConfig';
import AnimatingView from '../components/genesis/AnimatingView';
import MultiStepView from '../components/GenericComponents/MultiStepView';

type PageState = "Entry" | "Loading" |"Success" | "None"
interface CurrentAndPriorPageStates {
  priorPageState: PageState;
  currentPageState: PageState;
}
/**
 * Genesis page
 */
export default function DeployEntityPage() {
  const router = useRouter();
  const { active, web3Modal } = useContext(Web3AuthContext);
  const [currentPageState, setCurrentPageState] = useState<PageState>("Entry")
  const [priorPageState, setPriorPageState] = useState<PageState>("Entry")
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const [entityInfo, setEntityInfo] = useState<EntityInfo>({ 
    address: "",
    name: "",
    genesisTokenHolder: ""
  });

  function getAnimationType(): AnimationType {
    if (priorPageState === "Entry" && currentPageState === "Loading") {
      return "EntryToLoading"
    } else if (priorPageState === "Loading" && currentPageState === "Success") {
      return "LoadingToSuccess"
    } else {
      return "None"
    }
  }

  function setPageStates(state: PageState, animate: boolean = true) {

    console.log(`Setting page states: ${priorPageState} -> ${currentPageState}`)
    setIsAnimating(animate)
    setCurrentPageState(state)
    setPriorPageState(currentPageState)
    
  }

  /**
   * 
   */
  async function deployEntity(entityName: string) {
    console.log("Attemping to deploy entity: " + entityName);
    try {
      setPageStates("Loading")
      const provider = new ethers.providers.JsonRpcProvider();
      const signer = provider.getSigner();

      // Get genesis token contract address
      const badgeContract = new ethers.Contract(badgeContractAddress, BadgeV1.abi, provider);
      const genesisTokenAddress = await badgeContract.genesisToken();

      // Initialize genesis token contract with signer 
      const genesisTokenContract = new ethers.Contract(genesisTokenAddress, GenesisToken.abi, signer);

      // Listen to EntityDeployed event
      genesisTokenContract.on("EntityDeployed", (entityAddress: string, eName: string, genesisTokenHolder: string) => {
        console.log("Entity deployed ", entityAddress, entityName);

        if (entityName === eName) {
          setPageStates("Success")
          setEntityInfo({
            address: entityAddress,
            name: entityName,
            genesisTokenHolder: genesisTokenHolder
          })
          
        }
        genesisTokenContract.off("EntityDeployed", ()=>{});
      })

      // Execute transaction to mint
      const transaction = await genesisTokenContract.mintGenToken("tokenURI", entityName, badgeContractAddress);
      await transaction.wait();

    } catch (error) {
      console.error(error)
    } 
  }

  /**
   * If the user is not logged in, redirect to landing page
   */
  useEffect(() => {
    // if (!active) {
    //   router.push('/')
    // }
  } , [active])

  function renderViewBasedOnPageState(): ReactElement {
    switch (currentPageState) {
      case "Entry":
        return <DeployEntityEntryView deployEntity={deployEntity}/>
      case "Loading":
        return <DeployEntityLoadingView />
      case "Success":
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

  function onAnimationComplete() {
    setIsAnimating(false)
  }
  
  return (
    <div className={styles.background}>
      <Navbar sticky={true}/>
      <PageTitleView title={"Deploy a new entity by minting a Genesis token"}/>
      <div className={styles.pageContainer}>
        <MultiStepView 
          steps={["Deploy entity", "Setup entity", "Award first Badge"]} 
          indexOfCurrentStep={0}
          style={{ marginTop: '30px'}}
        />

        { isAnimating ? 
          <AnimatingView 
            animationType={getAnimationType()} 
            onAnimationComplete={onAnimationComplete}/> : renderViewBasedOnPageState() 
        }
      </div>
    </div>
  )
}

