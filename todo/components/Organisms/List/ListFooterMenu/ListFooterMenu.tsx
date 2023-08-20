import React from 'react';
import styles from './ListFooterMenu.module.scss';

type FooterMenuProps = {
  text: string;
  link: string;
}

type FooterMenuListType = {
  footerMenuList: FooterMenuProps[];
}

const ListFooterMenu: React.FC<FooterMenuListType> = ({footerMenuList}) => {
  return (
    <ul className={styles.menuList}>
      {footerMenuList.map((item, index) => {
        return (
          <li key={index} className={styles.menuListItem}>
          <a
            className={styles.menuItemLink}
            href={item.link}
            target="_blank"
            rel="noopener"
            >
            {item.text}
          </a>
        </li>
        );
      })}
    </ul>
  );
}

export default ListFooterMenu;
