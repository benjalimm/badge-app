import React from 'react';
import { useEffect, useRef } from "react"

import lottie from "lottie-web"

interface LottieProps {
  animationData: any
  className?: string
  style?: React.CSSProperties
}

const Lottie = ({ animationData, className, style }: LottieProps) => {
  const element = useRef<HTMLDivElement>(null)
  const lottieInstance = useRef<any>()

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData,
        container: element.current,
      })
    }
  }, [])

  return <div className={className }style={style} ref={element}></div>
}

export default Lottie;