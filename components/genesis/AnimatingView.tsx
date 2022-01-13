import React, { useState, useEffect } from 'react'
import { AnimationType } from '../../schemas/genesis';
import cx from 'classnames';
import style from '../../styles/genesis.module.css';

type AnimationState = "Start" | "End"
const delayMilliseconds = 0;
const animationMilliseconds = 500;

export default function AnimatingView(
  { animationType, onAnimationComplete } : 
  { animationType: AnimationType,
    onAnimationComplete: () => void 
  }) {
  const [animationState, setAnimationState] = useState<AnimationState>("Start")

  useEffect(() => {
    
    setAnimationState("End")
    setTimeout(() => {
      onAnimationComplete()
    } , animationMilliseconds)
      
  }, [animationType])

  function getViewClasses(): string {
    switch (animationType) {
      case "EntryToLoading":
        return style.entryToLoadingContainer
      case "LoadingToSuccess":
        return style.loadingToSuccessContainer
      default:
        return style.loadingToSuccessContainer
    }

  }

  return <div className={getViewClasses()}/>
}