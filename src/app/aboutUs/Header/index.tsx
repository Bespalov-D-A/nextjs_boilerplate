import React, {FC} from 'react';

// mantine
import { Flex } from '@mantine/core';

// styles
import s from './header.module.scss'

const Header:FC = () => {
  return (
    <div className={s.header}>
      <h3 className={s.title}>Bringing you the <span className={s.titleYellow}>best car rental options</span> for every journey</h3>
      <img className={s.titleIcon} src="./images/aboutUs/smileIcon.png" alt="icon" />
    </div>
  )
}

export default Header;