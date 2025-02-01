import React, { FC } from 'react';
// styles
import layout from '../../ui/layout.module.scss'
import styles from './header.module.scss'

const Header:FC = () => {
  return (
    <div className={styles.header}>
      <div className={layout.container}>
        <h2 className={styles.title}>Need assistance?</h2>
        <h3 className={styles.title}>Our team is ready to help <br/> with your inquiry</h3>
        <span className={styles.slogan}>Make sure you have checked our <a href="#" className={styles.link}>Help Center.</a></span>
      </div>
    </div>
  )
}
export default Header;