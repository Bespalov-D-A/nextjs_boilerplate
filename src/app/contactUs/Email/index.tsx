import React, { FC } from 'react';
// styles
import { Flex } from '@mantine/core';
import styles from './email.module.scss'
// components
import ContactForm from './ContactForm';

const Email:FC = () => {
  return (
    <div className={styles.emailWrap}>
      <div>
        <Flex className={styles.titleWrap}>
          <img width="40px" src="/icons/email.svg" alt="email icon" />
          <span className={styles.title}>Email us</span>
        </Flex>
        <span className={styles.text}>Please call us if you have an urgent issue (e.g., cancellations, problems with pickup/check-in, or trouble locating a branch)</span>
      </div>
      <div className={styles.formWrap}>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Email;