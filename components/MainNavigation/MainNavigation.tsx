import { useRouter } from 'next/router';
import React from 'react';
import { DomainTypeProps } from '../../utils/serverSidePropsUtil';
import PageTitleView from '../GenericComponents/PageTitleView';
import NavBar from '../navBar/NavBar';
import style from './MainNavigation.module.scss';

export default function MainNavigation(domainTypeProps: DomainTypeProps) {
  return <div className={style.container}>
    <NavBar sticky={false} {...domainTypeProps}/>
    <PageTitleView title={"Navigation"}/>
    <div className={style.contentContainer}>
      <NavigationButton 
        title="Register entity" 
        route="/register"
      />
      <NavigationButton 
        title="Award a Badge" 
        route="/create"
      />

      <NavigationButton 
        title="Issue permission" 
        route="/create"
      />

    </div>
  </div>
}

function NavigationButton(
  { 
    title, 
    route,
    isDisabled 
  }:{
    title: string, 
    route: string,
    isDisabled?: boolean
  }) {
  const router = useRouter();
  const disabled = isDisabled ? isDisabled : false;
  return <button className={style.navigationButton} onClick={() => {
    if (!disabled) {
      router.push(route);
    }
  }}>
    <h1 className={style.navigationButtonTitle}>{title}</h1>
    <div className={style.circle}>
      <img className={style.rightArrow} src="images/generic/right-arrow.png"/>
    </div>
  </button>
}