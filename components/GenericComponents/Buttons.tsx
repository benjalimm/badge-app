import React from 'react';
import buttonStyle from '../../styles/GenericComponents/buttons.module.css';

<<<<<<< HEAD
export function BasicButton({ onClick, text, style, className } : {
  onClick: () => void, 
  text: string, 
  style?: React.CSSProperties,
  className?: string
} ) {
  return <div style={style} className={className}>
=======
export function BasicButton({ onClick, text, style }: {onClick: () => void, text: string, style?: React.CSSProperties} ) {
  return <div style={style}>
>>>>>>> main
    <button className={buttonStyle.basicButton} onClick={onClick}>
      {text}
    </button>
  </div>
}