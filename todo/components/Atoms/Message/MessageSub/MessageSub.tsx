import React from 'react';
import styles from './MessageSub.module.scss';

type MessageSubType = {
  message: string;
}

const MessageSub: React.FC<MessageSubType> = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
}

export default MessageSub;
