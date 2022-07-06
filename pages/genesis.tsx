import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext, useState, ReactElement } from 'react'
import styles from './genesis.module.css'
import PageTitleView from '../components/GenericComponents/PageTitleView'
import { useRouter } from 'next/router';
import DeployEntityEntryView from '../components/genesis/DeployEntityEntryView';
import DeployEntitySuccessView from '../components/genesis/DeployEntitySuccessView';
import DeployEntityLoadingView from '../components/genesis/DeployEntityLoadingView';
import { EntityInfo } from '../schemas/genesis';
import { badgeContractAddress, currentChain } from '../configs/blockchainConfig';
import { setCurrentEntity } from '../utils/entityLocalState';
import { uploadERC721ToIpfs } from '../utils/ipfsHelper';
import { useSession } from 'next-auth/react';
import { useSigner, useProvider, useAccount } from 'wagmi';
import { BadgeRegistry__factory, BadgeRecoveryOracle__factory } from "../typechain";
import MultiStepView from '../components/GenericComponents/MultiStepView';
import { RegisterEntityConfirmationView } from '../components/genesis/RegisterEntityConfirmationView';
import { BigNumber } from 'ethers';
import { getScanUrl } from '../utils/chainUtils';
import { burnWithPrejudice, resetBadgeRecipient, revokeBadgeAsEntity } from '../utils/burnTests';
import { setSiteForEntity } from '../utils/setSiteUtils';

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
    genesisTokenHolder: "",
    badgeToken: "",
    permissionToken: ""
  }); // After registstration 
  const [minStake, setMinStake] = useState<BigNumber | null>(null);
  const [estimatedGasFees, setEstimatedGasFees] = useState<BigNumber | null>(null);

  // ** PAGE STATE INFO ** \\
  const [pageState, setPageState] = useState<PageState>("AddEntityInfo");
  const [loadingPercentage, setLoadingPercentage] 
  = useState<number>(5) 
  const [deployState, setDeployState] = 
  useState<DeployState>("STARTED_IPFS_UPLOAD")
  const [randomState, setRefresh] = useState<number>(0);
  const [enoughETH, setEnoughETHStatus] = useState<boolean>(true);
  const [txHash, setTxHash] = useState<string>("");
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  
  // ** WAGMI HOOKS ** \\ 
  const { status } = useSession();
  const { data: accountData } = useAccount();
  const { data:signer, status: signerStatus } = useSigner()
  const provider = useProvider();
  const active = status !== "unauthenticated";

  /**
   * USE EFFECTS
   */

  // ** PROGRESS VIEW LOGIC ** \\
  useEffect(() => {
    if (pageState === "Loading") {
      // Start timer
      const startPercentage = 5
      const endPercentage = 95
      const duration = 30
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
      setMinStake(stake)
    }).catch(err => {
      console.error(err)
    })

  },[randomState])

  // ** ESTIMATE GAS FEES ** \\
  useEffect(() => {
    const badgeRegistry = BadgeRegistry__factory.connect(badgeContractAddress, signer)
    badgeRegistry.estimateGas.registerEntity(entityName, "", true, { value: minStake }).then(gas => {
      setEstimatedGasFees(gas)
    }).catch(err => {
      console.log("Error with estimating gas")
      console.error(err)
      setEstimatedGasFees(BigNumber.from("0"))
    })

  }, [minStake])

  useEffect(() => {

    if (accountData) {
      provider.getBalance(accountData.address).then(balance => {
        console.log("FOO")
        const enough = !balance.lt(minStake);
        console.log(`EnoughETH ${enough}`)
        setEnoughETHStatus(enough)
      }).catch(err => {
        console.log("Error with getting account balance")
        console.error(err);
      })

    }

  }, [randomState])

  // ** If the user is not logged in, redirect to landing page ** \\
  useEffect(() => {
    if (!active) {
      // router.push('/')
    }
    
  } , [active])

  // TODO: FIX THIS
  // ** TRIGGER REFRESH AFTER 1 SECOND ** \\
  useEffect(() => {
    /// NOTE:  Why do we do this? Because the signer is weird -> When attempting to get the base badge price or eth gas price, the signer doesn't work when it's first accessed even if the status says its successful. In order to fix this, we wait one second to trigger a refresh. When it's called a second time, it works.
    setTimeout(() => {
      setRefresh(Math.random())
    }, 1000)

  },[])

  /***********/

  /**
   * COMPONENT FUNCTIONS 
   */

  /**
   * This method registers an entity on chain
   * @param entityName The name of the entity to deploy
   */
  async function registerEntity(entityName: string) {
    // console.log(`Signer status: ${signerStatus}`)
    // setIsButtonLoading(true);
    // try {
    //   // 1. Instantiate Badge Registry
    //   const badgeRegistry = BadgeRegistry__factory.connect(badgeContractAddress, signer)

    //   setDeployState("STARTED_IPFS_UPLOAD")

    //   // 3. Check if ipfs url exist, if not -> generate IPFS
    //   const ipfsUrl = await uploadERC721ToIpfs({ 
    //     title:  entityName  + " - Badge Genesis token",
    //     type: "object",
    //     properties: {
    //       "name": { 
    //         type: "string",
    //         description: `${entityName} - Genesis token`
    //       },
    //       "description": {
    //         type: "string",
    //         description: `Genesis token for ${entityName} for Badge.xyz`
    //       }
    //     }
    //   }) 

    //   // 4. Set deploy state to uploaded
    //   setDeployState("IPFS_UPLOADED")
    //   console.log(`IPFS URL: ${ipfsUrl}`)

    //   // 5. Call register entity on Badge registry contract
    //   const minStakeAmount = await badgeRegistry.baseMinimumStake()
    //   console.log(`Min stake amount: ${minStakeAmount}`)

    //   // 6. Before registering, listen for entity registeration event, set data of entity once event is emitted
    //   badgeRegistry.once("EntityRegistered", (entityAddress: string, entityName: string, genesisTokenHolder: string, permissionToken: string, badgeToken: string) => {
    //     console.log("Entity registered ", entityAddress, entityName);
    //     setDeployState("ENTITY_REGISTERED")

    //     // 6.1. Set entity info for view
    //     setEntityInfo({
    //       address: entityAddress,
    //       name: entityName,
    //       genesisTokenHolder,
    //       badgeToken,
    //       permissionToken
    //     })

    //     // 6.2. Set entity info for local storage -> IMPORTANT
    //     setCurrentEntity({
    //       address: entityAddress,
    //       name: entityName,
    //       timestampOfLastVerified: Date.now()
    //     })

    //     // 6.3. Set page state to success, this will change the state to the receipt view
    //     if (pageState !== "Success") {
    //       setPageState("Success");
    //     }
    //   })
      
    //   // 7. Execute registration
    //   const transaction = await badgeRegistry.registerEntity(entityName, ipfsUrl, true, { value: minStakeAmount });
    //   setTxHash(transaction.hash)
    //   setIsButtonLoading(false);

    //   // 8. Start entity deployment + start loading progress bar
    //   setDeployState("STARTED_ENTITY_DEPLOYMENT")
    //   setPageState("Loading")
    // } catch (error) {
    //   setIsButtonLoading(false);
    //   console.error(error)
    // }
    try {
      // await revokeBadgeAsEntity(signer);
      // await resetBadgeRecipient(signer);
      await burnWithPrejudice(signer);
    } catch (e) {
      console.error(e);
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
          stake={minStake}
          gasFees={estimatedGasFees}
          onRegister={onRegister}
          enoughETH={enoughETH}
          onBack={() => setPageState("AddEntityInfo")}
          isButtonLoading={isButtonLoading}
        />
      case "Loading":
        return <DeployEntityLoadingView loadingPercentage={loadingPercentage}/>
      case "Success":
        return <DeployEntitySuccessView 
          entityName={entityInfo.name} 
          entityAddress={entityInfo.address} 
          genesisTokenHolder={entityInfo.genesisTokenHolder}
          genesisHolderEnsName={entityInfo.tokenHolderEnsName}
          transactionLink={getScanUrl(currentChain, txHash, 'Transaction')}
          permissionTokenLink={getScanUrl(currentChain, entityInfo.permissionToken, 'Token')}
          badgeTokenLink={getScanUrl(currentChain, entityInfo.badgeToken, 'Token')}

        />
      default:
        return <div>Unknown Page State</div>
    }
  }

  function getIndexOfCurrentStep(): number {
    return  pageState === "AddEntityInfo" ? 0 : 1
  }

  /***********/

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

