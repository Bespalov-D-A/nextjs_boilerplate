import React, { FC } from 'react';

// styles
import s from './team.module.scss'

const Team:FC = () => {
  return (
    <div className={s.teamWrapper}>
      <div className={s.imgWrapper}></div>
      <div className={s.textWrapper}>
        <span className={s.title}>Team</span>
        <span className={s.text}>We’ve brought together an incredible team from all corners of the globe, passionate about building a platform that puts our customers first. Our team members are experts in their fields, united by a shared commitment to providing seamless, real-time service for travelers everywhere. Whether through email, online chat, or a quick phone call, we’re here for you—anytime, anywhere.</span>
      </div>
    </div>
  )
}

export default Team;