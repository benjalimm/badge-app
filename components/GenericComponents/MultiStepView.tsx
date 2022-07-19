import React from 'react';
import msvStyle from './MultiStepView.module.css';
import cx from 'classnames';

export default function MultiStepView({ steps, indexOfCurrentStep, style }: 
{ steps: string[], indexOfCurrentStep: number, style?: React.CSSProperties } ) {
  return <div className={msvStyle.multiStepContainer} style={style}>
    {
      steps.map((step, index) => {
        return <Step 
          text={step} 
          index={index} 
          selected={index==indexOfCurrentStep}
          key={index}
        />
      })
    }

  </div>
}

function Step({ text, index, selected }: { text: string, index: number, selected: boolean }) {

  const stepInnerContainerClasses = selected ? cx(msvStyle.stepInnerContainer, msvStyle.selected) : msvStyle.stepInnerContainer;
  return <div className={msvStyle.stepContainer}>
    <div className={stepInnerContainerClasses}>
      <h1 className={msvStyle.stepHeader}>{`Step ${index + 1}`}</h1>  
      <span className={msvStyle.stepText}>{text}</span>
    </div>
  </div>
}