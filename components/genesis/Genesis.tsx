import Navbar from '../navBar/NavBar'
import React, { useEffect, useState, ReactElement } from 'react'
import styles from './Genesis.module.scss'
import PageTitleView from '../GenericComponents/PageTitleView'
import DeployEntityEntryView from './pageComponents/DeployEntityEntryView';
import DeployEntitySuccessView from './pageComponents/DeployEntitySuccessView';
import DeployEntityLoadingView from './pageComponents/DeployEntityLoadingView';
import { EntityInfo } from '../../schemas/EntityInfo';
import { badgeContractAddress, currentChain } from '../../configs/blockchainConfig';
import EntityLocalStorageManager from '../../utils/EntityLocalStorageManager';
import { useSession } from 'next-auth/react';
import { useSigner, useProvider, useAccount } from 'wagmi';
import { BadgeRegistry__factory } from "../../typechain";
import MultiStepView from '../GenericComponents/MultiStepView';
import { RegisterEntityConfirmationView } from './pageComponents/RegisterEntityConfirmationView';
import { BigNumber } from 'ethers';
import { getScanUrl } from '../../utils/chainUtils';
import { ethToWeiMultiplier } from '../../utils/ethConversionUtils';
import { DomainTypeProps } from '../../utils/serverSidePropsUtil';
import useGateKeep from '../../utils/hooks/useGateKeep';
import { uploadPermTokenIPFS } from '../../utils/permTokenUploadUtils';
import { RegisterEntityRequestData } from '../../schemas/api/EntityModels';
import GenesisTokenIntro from './pageComponents/GenesisTokenIntro';
import { getMarketPlaceAssetLink } from '../../utils/marketplaceLinksUtils';

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

export default function RegisterEntityPage(domainTypeProps : DomainTypeProps) {
  const { allowed } = useGateKeep(domainTypeProps.domainType);

  // ** ENTITY INFO ** \\
  const [entityName, setEntityName] = useState<string>(""); 
  const [entityInfo, setEntityInfo] = useState<EntityInfo | null>(null); 
  const [minStake, setMinStake] = useState<BigNumber | null>(BigNumber.from(`${0.015 * ethToWeiMultiplier}`));
  const [estimatedGasFees, setEstimatedGasFees] = useState<BigNumber | null>(BigNumber.from(`${0.013 * ethToWeiMultiplier}`));

  // ** PAGE STATE INFO ** \\
  const [isIntro, setIsIntro] = useState(true);
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
  const { address } = useAccount();
  const { data:signer, status: signerStatus } = useSigner()
  const provider = useProvider();
  const active = status !== "unauthenticated";

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
    console.log("Estimating gas fees...")
    const badgeRegistry = BadgeRegistry__factory.connect(badgeContractAddress, signer)
    badgeRegistry.estimateGas.registerEntity(entityName, "https://ipfs.infura.io/abcdefghijklmnop", true, { value: minStake }).then(gas => {
      console.log(`Estimated gas fees: ${gas}`)
      setEstimatedGasFees(gas)
    }).catch(err => {
      console.log("Error with estimating gas")
      console.error(err)
      setEstimatedGasFees(BigNumber.from("0"))
    })

  }, [minStake, entityName, randomState])

  useEffect(() => {

    if (address) {
      provider.getBalance(address).then(balance => {
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

  // // TODO: FIX THIS
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
    console.log(`Signer status: ${signerStatus}`)
    setIsButtonLoading(true);
    try {
      // 1. Instantiate Badge Registry
      const badgeRegistry = BadgeRegistry__factory.connect(badgeContractAddress, signer)

      setDeployState("STARTED_IPFS_UPLOAD")

      // 3. Check if ipfs url exist, if not -> generate IPFS
      const ipfsUrl = await uploadPermTokenIPFS(entityName, "Genesis")

      // 4. Set deploy state to uploaded
      setDeployState("IPFS_UPLOADED")
      console.log(`IPFS URL: ${ipfsUrl}`)

      // 5. Call register entity on Badge registry contract
      const minStakeAmount = await badgeRegistry.baseMinimumStake()
      console.log(`Min stake amount: ${minStakeAmount}`)

      // 6. Before registering, listen for entity registeration event, set data of entity once event is emitted
      let transactionHash: string;
      badgeRegistry.once("EntityRegistered", (entityAddress: string, entityName: string, genesisTokenHolder: string, permissionToken: string, badgeToken: string) => {

        if (genesisTokenHolder === address) {
          console.log("Entity registered ", entityAddress, entityName);
          setDeployState("ENTITY_REGISTERED")

          // 6.1. Set entity info for view
          const info: EntityInfo  = {
            address: entityAddress,
            name: entityName,
            badgeToken,
            permissionToken,
            permissionTokenType: "GENESIS",
            timestampOfLastVerified: Date.now(),
            chain: currentChain,
            genesisTokenHolder: genesisTokenHolder
          }
          setEntityInfo(info);

          // 6.2. Set entity info for local storage -> IMPORTANT
          EntityLocalStorageManager.setLatestCurrentEntity(info);

          // 6.3. Set page state to success, this will change the state to the receipt view
          if (pageState !== "Success") {
            setPageState("Success");
          }

          // 6.4 Send api call to record a database snapshot of entity and permission token
          updateEntityAndPermissionTokenSnapshot({ 
            entityInfo: info, 
            txHash: transactionHash, 
            ipfsUrl 
          })
          
        }
        
      })
      
      // 7. Execute registration
      const transaction = await badgeRegistry.registerEntity(entityName, ipfsUrl, true, { value: minStakeAmount });
      transactionHash = transaction.hash;
      setTxHash(transactionHash);
      setIsButtonLoading(false);

      // 8. Start entity deployment + start loading progress bar
      setDeployState("STARTED_ENTITY_DEPLOYMENT")
      setPageState("Loading")
    } catch (error) {
      setIsButtonLoading(false);
      console.error(error)
    }     
  } 

  function updateEntityAndPermissionTokenSnapshot(data: RegisterEntityRequestData) {
    console.log("Sending badge email")
    return fetch('/api/entity', { 
      method: "POST" , 
      body : JSON.stringify({ data })
    }).then((res) => {
      console.log(res)
    }).catch(err => {
      console.error(err);
    })
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
          genesisHolderEnsName={""}
          transactionLink={getScanUrl(currentChain, txHash, 'Transaction')}
          permissionTokenLink={getScanUrl(currentChain, entityInfo.permissionToken, 'Token')}
          badgeTokenLink={getScanUrl(currentChain, entityInfo.badgeToken, 'Token')}
          marketPlaceLink={getMarketPlaceAssetLink(currentChain, entityInfo.badgeToken, 1)}

        />
      default:
        return <div>Unknown Page State</div>
    }
  }

  function getIndexOfCurrentStep(): number {
    return  pageState === "AddEntityInfo" ? 0 : 1
  }

  /***********/

  if (!allowed) return null;

  return (
    <div className={styles.background}>
      <Navbar 
        sticky={true}
        connectButtonAction="CONNECT_WALLET" 
        {...domainTypeProps}
      />
      <PageTitleView title={"Register an entity on-chain"}/> 
      
      <div className={styles.pageContainer}>{
        isIntro ? <GenesisTokenIntro onContinue={ () => setIsIntro(false)}/> : 
          <React.Fragment>
            <MultiStepView
              steps={["Add entity info", "Register entity"]}
              indexOfCurrentStep={getIndexOfCurrentStep()}  
              style={{ marginTop: '30px' }}
            />
            { renderViewBasedOnPageState() }

          </React.Fragment>
  
      }    
      </div>
      
    </div>
  )
}

