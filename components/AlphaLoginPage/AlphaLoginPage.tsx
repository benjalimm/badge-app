import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState} from 'react';
import { useAccount, UserRejectedRequestError } from 'wagmi';
import { AlphaUser } from '../../backend/AirtableController';
import auth from '../../pages/api/auth/[...nextauth]';
import useSiwe from '../../utils/hooks/useSiwe';
import { DomainTypeProps } from '../../utils/serverSidePropsUtil';
import AlphaInstructions from './pageComponents/AlphaInstructions';
import PageTitleView from '../GenericComponents/PageTitleView';
import NavBar from '../navBar/NavBar';
import style from "./AlphaLoginPage.module.scss"
import AccessDenied from './pageComponents/AccessDenied';
import AwaitingConnection from './pageComponents/AwaitingConnection';

type PageState = "AwaitingConnection" | "CancelledConnection" | "AccessDenied" 

interface Props extends DomainTypeProps { 
  alphaUser: AlphaUser | null
} 
export default function AlphaLoginPage(props: Props) {
  const [pageState, setPageState] = useState<PageState>("AwaitingConnection");
  const { alphaUser } = props;
  const { login, cancelledLastLogin, loading } = useSiwe();
  const { status } = useSession();

  useEffect(() => {
    console.log(alphaUser)
    console.log(`Cancelled last login: ${cancelledLastLogin}`)
    console.log(`Loading: ${loading}`)
    if (loading) {
      setPageState("AwaitingConnection")
    } else if (alphaUser === null && status === "authenticated") {
      setPageState("AccessDenied");
    } else if (cancelledLastLogin) {
      setPageState("AccessDenied");
    }

  }, [alphaUser, loading, status, cancelledLastLogin])

  useEffect(() => {

    if (status !== "authenticated" && status !== "loading") {
      setTimeout(() => {
        console.log("Attempting to sign in...")
        login().catch(err => {
          console.log(err);
        })
        
      }, 1000)
        
    }

  }, [status])

  function goToWaitlist(){
    window.open('https://forms.gle/4T1P2G95GH6VUXiv8', '_blank');
  }

  function renderViewBasedOnState() {
    switch (pageState) {
      
      case "AccessDenied":
        return <AccessDenied onClick={goToWaitlist}/>
      default:
        return <AwaitingConnection />
    }
  }

  return <div className={style.background}>
    <NavBar sticky={true} 
      {...props} 
      connectButtonAction="CONNECT_WALLET"
    />
    <PageTitleView title="Login to Badge alpha"/>
    <div className={style.pageContainer}>
      {
        renderViewBasedOnState()
      }

    </div>
    
  </div>
}