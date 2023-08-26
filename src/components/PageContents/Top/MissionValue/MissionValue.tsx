
import React from 'react';
import styles from './MissionValue.module.scss';
import TitleSection from '../../../Atoms/Title/TitleSection/TitleSection';
import MessageMain from '../../../Atoms/Message/MessageMain/MessageMain';
import MessageSub from '../../../Atoms/Message/MessageSub/MessageSub';
import { useTranslation } from 'react-i18next';

type MissionValueProps = {
  title: string;
  messageMain: string;
  messageSub: string;
  officialPosition: string;
  representativeName: string;
  src: string;
  alt: string;
}

const MissionValue: React.FC = () => {
  const { t } = useTranslation();
  const missionValue: MissionValueProps = {
    title: t('missionValue.title'),
    messageMain: t('missionValue.messageMain'),
    messageSub: t('missionValue.messageSub'),
    officialPosition: t('missionValue.officialPosition'),
    representativeName: t('missionValue.representativeName'),
    src: '/img/top/imgDirector_desktop.png',
    alt: 'general director'
  };

  return (
    <section className={styles.contBox}>
      <div className={styles.card}>
        <div className={styles.textArea}>
          <TitleSection title={missionValue.title} widthSpecified={false}></TitleSection>
          <MessageMain message={missionValue.messageMain} marginNeeded={true}></MessageMain>
          <MessageSub message={missionValue.messageSub}></MessageSub>
          <p className={styles.officialPosition}>{missionValue.officialPosition}</p>
          <p className={styles.representativeName}>{missionValue.representativeName}</p>
        </div>
        <div className={styles.imgArea}>
          <img className={styles.img} src={missionValue.src} alt={missionValue.alt}></img>
          <p className={styles.circle}></p>
        </div>
      </div>
    </section>
  );
}

export default MissionValue;
