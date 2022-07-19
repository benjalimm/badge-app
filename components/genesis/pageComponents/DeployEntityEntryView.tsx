import React, { useEffect, useState } from 'react';

import styles from './DeployEntityEntryView.module.css';
import { isReallyEmpty } from '../../../utils/stringUtils';
import { BasicButton } from '../../GenericComponents/Buttons';
import TextBox from '../../GenericComponents/TextBox';

export function DeployEntityEntryView(
  { 
    onNext
  } :{ 
    onNext: (entityName: string) => void }) {
  const [currentText, setCurrentText] =  useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  // ** USE EFFECTS ** \\

  useEffect(() => {
    setIsError(false)
  }, [currentText]);

  // ** LISTEN TO ENTER KEY ** \\
  useEffect(() => {
    function keyDownHandler(event: KeyboardEvent) {
      if (event.key === "Enter") {
        event.preventDefault();
        next();
      }
    }

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  }, [currentText])

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
        <h3 className={styles.formHeaderText}>Set entity name</h3>
      
        <TextBox
        
          placeholder="(e.g. Uniswap)" 
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