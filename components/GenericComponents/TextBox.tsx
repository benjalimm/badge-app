import React from 'react';
import style from './TextBox.module.css';
import cx from 'classnames';

export default function TextBox({ placeholder, onChange, customHeight, fontSize, value, highlight, message }: {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void,
  placeholder: string;
  customHeight?: string;
  fontSize?: string;
  value?: string;
  highlight?: "ERROR" | "SUCCESS"
  message?: string;
}) {

  const customStyle = {
    height: customHeight,
    fontSize: fontSize,
  }

  const _isHighlight = highlight !== undefined;
  let innerContainerStyle: string;
  let messageStyle: string;
  switch (highlight) {
    case "ERROR":
      innerContainerStyle = cx(style.formTextFieldContainer, style.errorBorder);
      messageStyle = cx(style.message, style.errorMessage)
      break;
    case "SUCCESS":
      innerContainerStyle = cx(style.formTextFieldContainer, style.successBorder)
      messageStyle = cx(style.message, style.successMessage)
      break
    
    default:
      innerContainerStyle = style.formTextFieldContainer;
      messageStyle = style.message;
      break;
  }

  return <div className={style.container}>
    <div className={innerContainerStyle} style={customStyle}>
      <input className={style.formTextField} type="text" placeholder={placeholder} onChange={onChange} value={value}/>
    </div>
    { _isHighlight ? <span className={messageStyle}>{ message }</span> : null
  
    }

  </div>
  
}