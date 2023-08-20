import React from 'react';
import styles from './MessageMain.module.scss';

type MessageMainType = {
  message: string;
}

const MessageMain: React.FC<MessageMainType> = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
}

export default MessageMain;
