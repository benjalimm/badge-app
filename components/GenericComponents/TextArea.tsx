import React from 'react';
import style from './TextBox.module.css';

export default function TextArea({ placeholder, onChange, customHeight, fontSize, value }: {
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
  placeholder: string;
  customHeight?: string;
  fontSize?: string;
  value?: string;
}) {

  const customStyle = {
    height: customHeight,
    fontSize: fontSize,
  }
  return <div className={style.formTextFieldContainer} style={customStyle}>
    <textarea className={style.formTextArea} placeholder={placeholder} onChange={onChange} value={value}/>
  </div>
}