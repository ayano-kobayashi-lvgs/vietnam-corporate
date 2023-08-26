import React from 'react';
import styles from './MessageMain.module.scss';

type MessageMainType = {
  message: string;
  marginNeeded: boolean;
}

const MessageMain: React.FC<MessageMainType> = ({ message, marginNeeded }) => {
  return (
    <p
      className={`
        ${styles.message}
        ${marginNeeded ? styles.marginTopBottom : ''}
      `}>
      {message}
    </p>
  );
}

export default MessageMain;
