import React, { FC } from 'react';
// styles
import { Flex } from '@mantine/core';
import styles from './callItem.module.scss';
// constants
const imageUrl = '/icons/flag'
interface IProps {
  flagName: string;
  country: string;
  phone: string;
}

const CallItem: FC<IProps> = ({ flagName, country, phone }) => {
  return (
    <div className={styles.wrapper}>
      <Flex className={styles.topWrap}>
        <img className={styles.img} src={`${imageUrl}/${flagName}.svg`} alt="flag" />
        <span className={styles.label}>{country}</span>
      </Flex>
      <a className={styles.phoneLink} href={`tel:${phone}`}>{phone}</a>
    </div>
  );
}

export default CallItem;