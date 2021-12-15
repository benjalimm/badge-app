import React from 'react';
import style from '../../styles/landingPage/bottomTab.module.css';
import cx from 'classnames';

export function BottomTabs(
  { indexOfHighlightedTab, numberOfTabs } : 
  { indexOfHighlightedTab: number, numberOfTabs: number}) {
  return (
    <div className={style.tabBarContainer}>
      { 
        [...Array(numberOfTabs)].map((_, index) => {
          return <CircleTab isHighlighted={index == indexOfHighlightedTab}/>
         })
      }
    </div>
  );
}

export function CircleTab({ isHighlighted } : { isHighlighted: boolean}) {
  const className = isHighlighted ? cx(style.circle, style.highlighted) : style.circle
  return <div className={className}/>
}