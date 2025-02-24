'use client';

import React, { FC, useState } from 'react';
import Image from 'next/image';

import { Select } from '@mantine/core';

// styles
import styles from '../Select/select.module.scss';
// image
import myIcon from '../../../../../public/icons/arrowDown.svg'


interface ITextInput {
  label: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const CustomSelect:FC<ITextInput> = ({label, required, errorMessage, error}) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={`${styles.inputWrap} ${error && styles.inputError}`}>
      <label>
        {label}
        {required && " * "}
        <span className={styles.errorMessage}>{error && errorMessage}</span>
      </label>
      <Select
        rightSection={<Image src={myIcon} className={`${styles.selectArrow} ${opened && styles.selectArrowOpen}`} alt="arrow"/>}
        data={[
          { value: 'question', label: 'Question' },
          { value: 'feedback', label: 'Feedback' },
          { value: 'complaint', label: 'Complaint' },
        ]}
        onDropdownOpen={() => setOpened(true)}
        onDropdownClose={() => setOpened(false)}
      />
    </div>
  )
}

export default CustomSelect;