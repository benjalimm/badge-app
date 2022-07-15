import React from 'react';
import buttonStyle from './Buttons.module.scss';
import cx from 'classnames';
import { PulseLoader } from 'react-spinners';

export function BasicButton({ onClick, text, style, className, isLoading } : {
  onClick: () => void, 
  text: string, 
  style?: React.CSSProperties,
  className?: string
  isLoading?: boolean
} ) {

  const _isLoading = (isLoading) ? isLoading : false;
  
  function onPress() {
    // Disable button while loading
    if (!_isLoading) {
      onClick();
    }
  }
  return <button className={cx(buttonStyle.basicButton, className)} onClick={onPress} style={style}> 
    { _isLoading ? <PulseLoader 
      size={5} 
      color={'#ffffff'} 
    /> : text }
  
  </button>
}