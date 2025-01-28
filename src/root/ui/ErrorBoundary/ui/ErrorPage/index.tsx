import Image from 'next/image';
import s from './style.module.scss';
import pattern from './images/pattern.png';
import errorImage from './images/500.png';
import { NS, useTranslation } from '@shared/config/i18n';
import { LNG } from '@shared/lib/global';

interface Props {
  lng: LNG;
}

export const ErrorPage = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, NS.Errors);
  return (
    <div className={s.outerWrapper}>
      <div className={s.wrapper}>
        <div className={s.innerWrapper}>
          <h1 className={s.errorCode}>505</h1>
          <p className={s.errorTitle}>
            {t('error.internal', { ns: NS.Errors })}
          </p>
          <p className={s.errorDescription}>
            {t('error.refreshing', { ns: NS.Errors })}
          </p>
        </div>
        <Image src={pattern} className={s.patternImg} alt="pattern" />
        <Image src={errorImage} className={s.errorImg} alt="500" />
      </div>
    </div>
  );
};
