
import React from 'react';
import styles from './MissionValue.module.scss';
import TitleSection from '../../../Atoms/Title/TitleSection/TitleSection';
import MessageMain from '../../../Atoms/Message/MessageMain/MessageMain';
import MessageSub from '../../../Atoms/Message/MessageSub/MessageSub';

type MissionValueProps = {
  title: string;
  messageMain: string;
  subMessage: string;
  officialPosition: string;
  representativeName: string;
  src: string;
  alt: string;
}

const MissionValue: React.FC = () => {
  const missionValue: MissionValueProps = {
    title: 'MISSION & VALUE',
    messageMain: 'Open the new doors for Japanese and Vietnamese people beyond the border.',
    subMessage: 'A large number of people recognize that working or studying abroad is on their bucket list, We can provide the best options for you in regard to working and studying abroad.We aim to support both Vietnamese and Japanese recruitment activities with solving social problems.',
    officialPosition: 'General Director',
    representativeName: 'Shuhei Nishikawa',
    src: '/img/top/imgDirector_desktop.png',
    alt: 'general director'
  };

  return (
    <section className={styles.contBox}>
      <div className={styles.card}>
        <div className={styles.textArea}>
          <TitleSection title={missionValue.title}></TitleSection>
          <MessageMain message={missionValue.messageMain}></MessageMain>
          <MessageSub message={missionValue.subMessage}></MessageSub>
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
