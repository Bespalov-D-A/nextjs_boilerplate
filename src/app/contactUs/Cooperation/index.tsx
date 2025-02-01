import React, { FC } from 'react';
// styles
import { Flex } from '@mantine/core';
import styles from './cooperation.module.scss'

const Cooperation: FC = () => {
  return (
    <div className={styles.cooperationWrap}>
      <div>
        <Flex mb="16px">
          <span className={styles.title}><img width="30px" src="/icons/chat.svg" alt="chat icon" /> Contact us for cooperation</span>
        </Flex>
      </div>
      <div>
        <span>Feel free to visit our Partnerships page or email us at <a className={styles.link} href="">partnerships@rentycars.com</a> with a brief overview of your car rental company.
We’ll be happy to get in touch and discuss your inquiry further.</span>
      </div>
    </div>
  )
}

export default Cooperation;