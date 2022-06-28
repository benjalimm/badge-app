import React from 'react';
import style from './TransactionContainer.module.css';
import cx from 'classnames';

export default function TransactionContainer(
  { 
    children, 
    style: customStyle,
    isError,
    errorMessage,
    className
  }
  :
  { 
    className?: string,
    children?: JSX.Element | JSX.Element[],
    style?: React.CSSProperties,
    isError?: boolean,
    errorMessage?: string
    
  } ) {
  const _isError = isError ?? false;

  const containerStyle = _isError ? cx(style.txContainer, style.error) : style.txContainer;

  return <div className={className} style={customStyle}>
    <div className={containerStyle} >
      {children}
    </div>
    { _isError ? <span className={style.errorMessage}>{ errorMessage }</span> : null
  
    }
    
  </div>
}