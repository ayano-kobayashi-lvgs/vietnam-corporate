import React from 'react';
import styles from './Mv.module.scss';
import { t } from 'i18next';

type MvProps = {
  messageMain: string;
  messageSub: string;
}

const Mv: React.FC = () => {
  const mv: MvProps = {
    messageMain: t('mv.messageMain'),
    messageSub: t('mv.messageSub')
  };

  return (
    <div className={styles.background}>
      <div className={styles.contBox}>
        <h1 className={styles.messageMain}>{mv.messageMain}</h1>
        <p className={styles.messageSub}>{mv.messageSub}</p>
      </div>
    </div>
  );
}

export default Mv;
