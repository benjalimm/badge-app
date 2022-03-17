import React from 'react';
import style from '../../styles/landingPage/bottomTab.module.css';
import cx from 'classnames';

export function BottomTabs(
  { indexOfHighlightedTab, numberOfTabs, onClick } : 
  { 
    indexOfHighlightedTab: number, 
    numberOfTabs: number,
    onClick: (index: number) => void,
  }) {
  return (
    <div className={style.tabBarContainer}>
      { 
        [...Array(numberOfTabs)].map((_, index) => {
          return <CircleTab 
            isHighlighted={index == indexOfHighlightedTab} 
            key={index}
            index={index}
            onClick={onClick}
          />
        })
      }
    </div>
  );
}

export function CircleTab(
  { isHighlighted, onClick, index } : 
  { 
    isHighlighted: boolean,
    index: number,
    onClick: (index: number) => void,
  
  }) {

  function onTap() {
    console.log(index)
    onClick(index);
  }
  
  const className = isHighlighted ? cx(style.circle, style.highlighted) : style.circle
  return <div className={className} onClick={onTap}/>
}