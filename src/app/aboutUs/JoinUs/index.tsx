import React, {FC} from 'react';

// styles
import layout from '../../ui/layout.module.scss';
import s from './joinUs.module.scss'

const JoinUs:FC = () => {
  return (
    <div className={s.joinWrapper}>
      <div className={layout.container}>
        <span className={`${s.joinText} ${s.mb48} ${s.w910}`}>At RentyCars.com, we’re driven by a passion to
          connect travelers with the perfect car wherever their journey takes them.
          We believe every trip should start with ease and end with unforgettable memories, and that’s why we’re here.</span>

        <span className={`${s.joinText} ${s.mb48} ${s.w910}`}>Your experience matters to us. With a commitment to convenience,
          reliability and flexibility, we’ve built a space where you can feel confident and supported every step of the way.
        </span>
        <div className={s.sloganWrapper}>
          <span className={s.joinSlogan}>Join us on this exciting journey — we can’t wait to be part of yours!</span>
          <img className={s.carIcon} src="./images/aboutUs/carIcon.png" alt="img" />
        </div>
      </div>
      <img src="./images/aboutUs/aboutUsBg.jpg" className={s.imgWrapper} alt="img"/>
      <div className={layout.container}>
        <span className={`${s.joinText} ${s.mb32} ${s.w730}`}>From the spark of an idea to the launch of RentyCars.com in October 2024,
          we’ve connected over
        <span className={`${s.joinTextBold} ${s.orangeText}`}>110 </span>
        <span className={s.joinTextBold}>partners</span>
        —and that number keeps growing every week.
      </span>
        <span className={`${s.joinText} ${s.w950}`}>Together, we’re proud to serve travelers in more than
        <span className={`${s.joinTextBold} ${s.orangeText}`}>145 </span>
        <span className={s.joinTextBold}>countries </span>
        across 15,000+ locations, bringing the best car rental options to one place. Our goal is to make your journey smoother,no matter where you’re headed.
      </span>
      </div>
    </div>
  )
}

export default JoinUs;