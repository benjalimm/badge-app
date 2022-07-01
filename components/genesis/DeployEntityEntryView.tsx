import React, { useEffect, useState } from 'react';

import styles from './DeployEntityEntryView.module.css';
import sharedStyle from './shared.module.css';
import cx from 'classnames';
import { isReallyEmpty } from '../../utils/stringUtils';
import { BasicButton } from '../GenericComponents/Buttons';
import TextBox from '../GenericComponents/TextBox';

export function DeployEntityEntryView(
  { 
    onNext
  } :{ 
    onNext: (entityName: string) => void }) {
  const [currentText, setCurrentText] =  useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsError(false)
  }, [currentText]);

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setCurrentText(event.currentTarget.value);
  }

  function isEmpty() {
    return isReallyEmpty(currentText);
  }

  function next() {
    if (!isEmpty()) {
      onNext(currentText);
    } else {
      // If user attempts to go next with empty name, show error message
      setIsError(true)
    }
    
  }

  return <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.formContainerView}>
        <h3 className={styles.formHeaderText}>Entity name</h3>
      
        <TextBox
        
          placeholder="Entity name (e.g. Uniswap)" 
          onChange={onChange}
          value={currentText}
          message={"Entity name cannot be empty"}
          style={{ marginTop: "10px" }}
          highlight={isError ? "ERROR" : undefined}
        />
      </div>
      <BasicButton 
        onClick={next} 
        className={styles.nextButton} 
        text="Next"
      />
    </div>
    
  </div>
}

export default DeployEntityEntryView;