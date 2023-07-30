import React from 'react';
import styles from './Mv.module.scss';

type MvProps = {
  messageMain: string;
  messageSub: string;
}

const Mv: React.FC = () => {
  const mv: MvProps = {
    messageMain: 'Enjoy the new.',
    messageSub: 'Create your future career with our experienced consultants.'
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
