import React from 'react';
import buttonStyle from './Buttons.module.css';

export function BasicButton({ onClick, text, style, className } : {
  onClick: () => void, 
  text: string, 
  style?: React.CSSProperties,
  className?: string
} ) {
  return <div style={style} className={className}>
    <button className={buttonStyle.basicButton} onClick={onClick}>
      {text}
    </button>
  </div>
}