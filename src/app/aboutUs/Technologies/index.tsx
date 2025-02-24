import React, { FC } from 'react';

// styles
import s from './technologies.module.scss'

const Technologies:FC = () => {
  return (
    <div className={s.teamWrapper}>
      <div className={s.textWrapper}>
        <span className={s.title}>Technologies</span>
        <span className={s.text}>Global challenges need modern solutions, and we’re committed to delivering that through cutting-edge technology. With the hard work and dedication of our talented tech team, we make sure you get the best price with just one click.<br/>
No matter where your journey takes you or what language you speak, we’re here to help you book the perfect car and make your travel experience smoother.</span>
      </div>
      <div className={s.imgWrapper}></div>
    </div>
  )
}

export default Technologies;