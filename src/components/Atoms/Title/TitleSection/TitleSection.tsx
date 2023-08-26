import React from 'react';
import styles from './TitleSection.module.scss';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleType = {
  title: string;
  tag?: Tag
  widthSpecified?: boolean;
}

const TitleSection: React.FC<TitleType> = ({ title, tag: Tag = 'h3', widthSpecified }) => {
  return (
    <Tag
      className={`
        ${styles.title}
        ${widthSpecified ? styles.widthQuarter : ''}
      `}
      >
      {title}
    </Tag>
  );
}

export default TitleSection;
