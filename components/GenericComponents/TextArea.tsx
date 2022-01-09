import React from 'react';
import style from '../../styles/GenericComponents/textBox.module.css';

export default function TextArea({ placeholder, onChange, customHeight, fontSize }: {
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
  placeholder: string;
  customHeight?: string;
  fontSize?: string;
}) {

  const customStyle = {
    height: customHeight,
    fontSize: fontSize,
  }
  return <div className={style.formTextFieldContainer} style={customStyle}>
    <textarea className={style.formTextArea} placeholder={placeholder} onChange={onChange}/>
  </div>
}