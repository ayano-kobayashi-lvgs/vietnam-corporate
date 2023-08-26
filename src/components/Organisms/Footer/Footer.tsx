import React from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import ListFooterMenu from '../List/ListFooterMenu/ListFooterMenu';

type FooterProps = {
  src: string;
  alt: string;
  copyright: string;
}

type FooterMenuProps = {
  text: string;
  link: string;
}

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const footerMenu: FooterProps = {
    src: '/img/common/logo/logo_full_w.png',
    alt: 'Leverages',
    copyright: 'Copyright © 2023 Leverages Career Vietnam Co., Ltd.'
  };
  const footerMenuList: FooterMenuProps[] = [
    { text: t('footer.menuList.privacyPolicyAndTermsOfUse'), link: '/privacypolicy' },
    { text: t('footer.menuList.howWeHandlePersonalData'), link: '/how-we-handle-personal-data' },
  ]

  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logoWrap}>
          <p className={styles.logo}>
            <img src={footerMenu.src} alt={footerMenu.alt}></img>
          </p>
        </div>
        <div className={styles.menuWrap}>
          <ListFooterMenu footerMenuList={footerMenuList}></ListFooterMenu>
          <p className={styles.copyright}>
            {footerMenu.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
