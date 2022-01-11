import React, { useEffect, useState } from 'react';
import PageTitleView from '../components/PageTitleView';
import NavBar from '../components/navBar/NavBar';
import style from '../styles/create/create.module.css'
import DraftBadgeView from '../components/create/DraftBadgeView';
import MultiStepView from '../components/GenericComponents/MultiStepView';
import MintBadgeView from "../components/create/MintBadgeView";
import { BadgeData } from '../schemas/BadgeData';

type PageState = "DraftBadge" | "MintBadge";
export default function CreateBadgeView() {

  const [pageState, setPageState] = useState<PageState>("DraftBadge");
  
  /** All drafts, recipient info stored here */
  const [draftBadgeData, setDraftBadgeData] = useState<BadgeData | null>(null);
  const [recipientWalletAddressInfo, setRecipientWalletAddressInfo] = useState<string | null>(null);
  const [recipientEmailInfo, setRecipientEmailInfo] = useState<string | null>(null);

  function getIndexOfCurrentStep(): number {
    return pageState === "DraftBadge" ? 0 : 1;
  }

  function onSubmitDraftBadgeData(badgeData: BadgeData) {
    console.log(badgeData);
    setDraftBadgeData(badgeData);
    setPageState("MintBadge");
  }

  return <div className={style.background}>
    <NavBar sticky={true}/>
    <PageTitleView title='Award a Badge'/>
    
    <div className={style.pageContainer}>
      <MultiStepView 
        steps={["Draft Badge", "Mint Badge"]} 
        indexOfCurrentStep={getIndexOfCurrentStep()}
        style={{ marginTop: '30px' }}
      />
      { pageState === "DraftBadge" ?  
        <DraftBadgeView 
          onSubmitDraftBadgeData={onSubmitDraftBadgeData}
          draftBadgeData={draftBadgeData}
        /> :
        <MintBadgeView 
          draftBadgeData={draftBadgeData}
          recipientAddress={recipientWalletAddressInfo}
          recipientEmail={recipientEmailInfo}
          onBackToDraft={() => setPageState("DraftBadge")}
          onWalletAddressValueChange={(address) => setRecipientWalletAddressInfo(address)}
          onEmailValueChange={(email) => setRecipientEmailInfo(email)}

        />
      }
    </div>
  </div>
}