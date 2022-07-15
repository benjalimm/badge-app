import { signIn } from 'next-auth/react';
import React, { useEffect, useState} from 'react';
import { UserRejectedRequestError } from 'wagmi';
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
  authenticated: boolean
} 
export default function AlphaLoginPage(props: Props) {
  const [pageState, setPageState] = useState<PageState>("AwaitingConnection");
  const { alphaUser, authenticated } = props;
  const { login } = useSiwe();

  useEffect(() => {
    console.log(alphaUser)
    console.log(`authenticated: ${authenticated}`)
    if (!alphaUser && authenticated === true) {
      setPageState("AccessDenied");
    }

  }, [alphaUser, authenticated])

  useEffect(() => {

    if (!authenticated) {
      setTimeout(() => {
        console.log("Attempting to sign in...")
        login().catch(err => {
          if (err instanceof UserRejectedRequestError) {
            setPageState("CancelledConnection");
          }
        
          console.log(err);
        })
        
      }, 500)
      
    }

  }, [])

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