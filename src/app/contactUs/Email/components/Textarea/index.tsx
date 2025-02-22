import React, { FC } from 'react';
import { Textarea } from '@mantine/core';
// styles
import styles from '../Textarea/textarea.module.scss';

interface ITextInput {
  label: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const CustomTextarea:FC<ITextInput> = ({label, required, errorMessage, error}) => {
  return (
    <div className={`${styles.inputWrap} ${error && styles.inputError}`}>
      <label>
        {label}
        {required && " * "}
        <span className={styles.errorMessage}>{error && errorMessage}</span>
      </label>
      <Textarea
        required={required}
      />
    </div>
  )
}

export default CustomTextarea;