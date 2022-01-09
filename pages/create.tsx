import React, { useEffect } from 'react';
import PageTitleView from '../components/PageTitleView';
import NavBar from '../components/navBar/NavBar';
import style from '../styles/create/create.module.css'
import DraftBadgeView from '../components/create/DraftBadgeView';
import MultiStepView from '../components/GenericComponents/MultiStepView';
export default function CreateBadgeView() {

  return <div className={style.background}>
    <NavBar sticky={true}/>
    <PageTitleView title='Award a Badge'/>
    
    <div className={style.pageContainer}>
      <MultiStepView 
        steps={["Draft Badge", "Mint Badge"]} 
        indexOfCurrentStep={0}
        style={{ marginTop: '30px' }}
      />
      <DraftBadgeView/>
    </div>
  </div>
}