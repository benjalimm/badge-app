import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext, useState, ReactElement } from 'react'
import styles from './genesis.module.css'
import PageTitleView from '../components/GenericComponents/PageTitleView'
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
import MultiStepView from '../components/GenericComponents/MultiStepView';
import { RegisterEntityConfirmationView } from '../components/genesis/RegisterEntityConfirmationView';
import { weiToEthMultiplier } from '../utils/ethConversionUtils';

type PageState = 
"AddEntityInfo" | 
"RegisterEntity" |
"Loading" |
"Success"

type DeployState = 
"STARTED_IPFS_UPLOAD" | 
"IPFS_UPLOADED" | 
"STARTED_ENTITY_DEPLOYMENT" | 
"ENTITY_REGISTERED";

export default function DeployEntityPage() {
  const router = useRouter();

  // ** ENTITY INFO ** \\
  const [entityName, setEntityName] = useState<string>(""); // Before registration
  const [entityInfo, setEntityInfo] = useState<EntityInfo>({ 
    address: "",
    name: "",
    genesisTokenHolder: "a"
  }); // After registstration 
  const [minStake, setMinStake] = useState<number | null>(null);

  // ** PAGE STATE INFO ** \\
  const [pageState, setPageState] = useState<PageState>("AddEntityInfo");
  const [loadingPercentage, setLoadingPercentage] 
  = useState<number>(5) 
  const [deployState, setDeployState] = 
  useState<DeployState>("STARTED_IPFS_UPLOAD")
  const [randomState, setRandomState] = useState<number>(0);
  
  // ** WAGMI HOOKS ** \\ 
  const { status } = useSession();
  const { data:signer, status: signerStatus } = useSigner()
  const active = status !== "unauthenticated";

  // ** PROGRESS VIEW LOGIC ** \\
  useEffect(() => {
    if (pageState === "Loading") {
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

  // ** GET MIN STAKE ** \\
  useEffect(() => {
    const badgeRegistry = BadgeRegistry__factory.connect(badgeContractAddress, signer)
    badgeRegistry.baseMinimumStake().then(stake => {
      console.log(`Minimum stake: ${stake}`)
      setMinStake(stake.toNumber())
    }).catch(err => {
      console.error(err)
    })

  },[randomState])

  /** If the user is not logged in, redirect to landing page */
  useEffect(() => {
    if (!active) {
      // router.push('/')
    }
    
  } , [active])

  // ** TRIGGER RANDOM STATE AFTER 1 SECOND ** \\
  useEffect(() => {
    /// NOTE:  Why do we do this? Because the signer is weird -> When attempting to get the base badge price or eth gas price, the signer doesn't work when it's first accessed even if the status says its successful. In order to fix this, we wait one second to trigger a random state. When it's called a second time, it works.
    setTimeout(() => {
      setRandomState(1)
    }, 1000)

  },[])

  /**
   * This method registers an entity on chain
   * @param entityName The name of the entity to deploy
   */
  async function registerEntity(entityName: string) {
    console.log(`Signer status: ${signerStatus}`)
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
      const minStakeAmount = await badgeRegistry.baseMinimumStake()
      console.log(`Min stake amount: ${minStakeAmount}`)

      // 6. Before registering, listen for entity registeration event, set data of entity once event is emitted
      badgeRegistry.once("EntityRegistered", (entityAddress: string, entityName: string, genesisTokenHolder: string) => {
        console.log("Entity registered ", entityAddress, entityName);
        setDeployState("ENTITY_REGISTERED")

        // 6.1. Set entity info for view
        setEntityInfo({
          address: entityAddress,
          name: entityName,
          genesisTokenHolder: genesisTokenHolder
        })

        // 6.2. Set entity info for local storage -> IMPORTANT
        setCurrentEntity({
          address: entityAddress,
          name: entityName,
          timestampOfLastVerified: Date.now()
        })

        // 6.3. Set page state to success, this will change the state to the receipt view
        if (pageState !== "Success") {
          setPageState("Success");
        }
      })
      
      // 7. Execute registration
      await badgeRegistry.registerEntity(entityName, ipfsUrl, true, { value: minStakeAmount });

      // 8. Start entity deployment + start loading progress bar
      setDeployState("STARTED_ENTITY_DEPLOYMENT")
      setPageState("Loading")
    } catch (error) {
      console.error(error)
    }
    
  }

  function onNext(entityName: string) {
    setEntityName(entityName)
    setPageState("RegisterEntity")
  }

  async function onRegister() {
    await registerEntity(entityName)
  }

  function renderViewBasedOnPageState(): ReactElement {
    switch (pageState) {
      case "AddEntityInfo":
        return <DeployEntityEntryView onNext={onNext}/>
      case "RegisterEntity":
        return <RegisterEntityConfirmationView 
          entityName={entityName}
          stake={minStake }
          onRegister={onRegister}
        />
      case "Loading":
        return <DeployEntityLoadingView loadingPercentage={loadingPercentage}/>
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

  function getIndexOfCurrentStep(): number {
    return  pageState === "AddEntityInfo" ? 0 : 1
  }

  return (
    <div className={styles.background}>
      <Navbar sticky={true}/>
      <PageTitleView title={"Register an entity on-chain"}/>
      
      <div className={styles.pageContainer}>
        <MultiStepView
          steps={["Add entity info", "Register entity"]}
          indexOfCurrentStep={getIndexOfCurrentStep()}
          style={{ marginTop: '30px' }}
        />
        { renderViewBasedOnPageState() }
      </div>
    </div>
  )
}

