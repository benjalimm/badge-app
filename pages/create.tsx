import React, { useEffect } from 'react';
import PageTitleView from '../components/PageTitleView';
import NavBar from '../components/navBar/NavBar';
import style from '../styles/create/create.module.css'
import DraftBadgeView from '../components/create/DraftBadgeView';

export default function CreateBadgeView() {
  return <div className={style.background}>
    <NavBar sticky={true}/>
    <PageTitleView title='Award a Badge'/>
    <div className={style.pageContainer}>
      <DraftBadgeView/>
    </div>
  </div>
}