import React from 'react';
import buttonStyle from '../../styles/GenericComponents/buttons.module.css';

export function BasicButton({ onClick, text, style }: {onClick: () => void, text: string, style?: React.CSSProperties} ) {
  return <div style={style}>
    <button className={buttonStyle.basicButton} onClick={onClick}>
      {text}
    </button>
  </div>
}