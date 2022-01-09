import React, { useState, useEffect } from 'react'
import { AnimationType } from '../../schemas/genesis';
import cx from 'classnames';
import style from '../../styles/genesis.module.css';

interface AnimationPair {
  startingClasses: string;
  endingClasses: string;
}

type AnimationState = "Start" | "End"
const delayMilliseconds = 0;
const animationMilliseconds = 300;

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

  function getAnimationPair(type: AnimationType): AnimationPair {
    switch (type) {
      case "EntryToLoading":
        return {
          startingClasses: style.entryContainer,
          endingClasses: style.loadingContainerAnimation
        }
      case "LoadingToSuccess":
        return {
          startingClasses: style.loadingContainerAnimation,
          endingClasses: style.successContainerAnimation
        }
      default:
        return {
          startingClasses: style.loadingContainerAnimation,
          endingClasses: style.successContainerAnimation
        }
    }
  }

  function getViewClasses(): string {
    const pair = getAnimationPair(animationType);
    return (animationState === "Start") ? pair.startingClasses : pair.endingClasses;
  }

  return <div className={getViewClasses()}/>
}