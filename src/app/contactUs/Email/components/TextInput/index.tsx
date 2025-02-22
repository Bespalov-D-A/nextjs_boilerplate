import React, { FC } from 'react';
import { TextInput } from '@mantine/core';
// styles
import styles from './textInput.module.scss';

interface ITextInput {
  label: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const CustomTextInput:FC<ITextInput> = ({label, required, errorMessage, error}) => {
  return (
    <div className={`${styles.inputWrap} ${error && styles.inputError}`}>
      <label>
        {label}
        {required && " * "}
        <span className={styles.errorMessage}>{error && errorMessage}</span>
      </label>
      <TextInput
        required={required}
      />
    </div>
  )
}

export default CustomTextInput;