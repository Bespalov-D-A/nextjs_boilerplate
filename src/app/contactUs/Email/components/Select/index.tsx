import React, { FC } from 'react';
import { Select } from '@mantine/core';
// styles
import styles from '../Select/select.module.scss';

interface ITextInput {
  label: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const CustomSelect:FC<ITextInput> = ({label, required, errorMessage, error}) => {
  return (
    <div className={`${styles.inputWrap} ${error && styles.inputError}`}>
      <label>
        {label}
        {required && " * "}
        <span className={styles.errorMessage}>{error && errorMessage}</span>
      </label>
      <Select
        data={[
          { value: 'question', label: 'Question' },
          { value: 'feedback', label: 'Feedback' },
          { value: 'complaint', label: 'Complaint' },
        ]}
      />
    </div>
  )
}

export default CustomSelect;