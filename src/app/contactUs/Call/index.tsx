import React, { FC } from 'react';
// styles
import { Flex } from '@mantine/core';
import styles from './call.module.scss'
// components
import CallItem from './CallItem';

const Call: FC = () => {
  return (
    <div className={styles.callWrap}>
      <div>
        <Flex mb="16px">
          <img width="28px" src="/icons/call.svg" alt="call icon" />
          <span className={styles.title}>Call us</span>
        </Flex>
        <span className={styles.text}>Feel free to call us at any of the following numbers.</span>
        <span className={`${styles.text} ${styles.textMb}`}>If you already have a confirmed booking, please have your booking number ready to help us assist you more quickly.</span>
      </div>
      <div className={styles.phonesWrap}>
        <CallItem flagName="uk" country="UK" phone="+44 07700 106673"/>
        <CallItem flagName="usa" country="USA" phone="+1 (833) 631-1467"/>
        <CallItem flagName="spain" country="Spain" phone="+34 900 751 009"/>
        <CallItem flagName="cyprus" country="Cyprus" phone="+357 22 010257"/>
        <CallItem flagName="portugal" country="Portugal" phone="+351 800 500 872"/>
        <CallItem flagName="france" country="France" phone="+33 0 801 84 16 41"/>
      </div>
    </div>
  )
}

export default Call;