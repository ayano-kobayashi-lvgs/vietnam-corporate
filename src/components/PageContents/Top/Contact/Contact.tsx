import React from 'react';
import styles from './Contact.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

type ContactProps = {
  alt: string;
  src: string;
  itemTitle: string;
  info: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const contactList: ContactProps[] = [
    {
      alt: 'Address',
      src: '/img/common/icon/icnLocation.png',
      itemTitle: t('contact.address.title'),
      info: t('contact.address.info')
    },
    {
      alt: 'Email',
      src: '/img/common/icon/icnMail.png',
      itemTitle: t('contact.email.title'),
      info: t('contact.email.info')
    },
  ]

  return (
    <section className={styles.contentBox}>
      <h2 className={styles.title}>FIND US</h2>
      <ul className={styles.contactList}>
        {contactList.map((contact, index) => {
          return (
            <li key={index} className={styles.contactListItem}>
              <p className={styles.img}>
                <Image src={contact.src} alt={contact.alt} width={160} height={160}></Image>
              </p>
              <p className={styles.itemTitle}>{contact.itemTitle}</p>
              <p className={styles.info}>{contact.info}</p>
            </li>
          )
        })}
      </ul>
      <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.472514982308!2d105.81133851557045!3d21.013771386006457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab852148ec59%3A0x5d9ad4b67eaf792e!2zVG_DoCBuaMOgIDEwMSBMw6FuZyBI4bqh!5e0!3m2!1sja!2sjp!4v1649297894753!5m2!1sja!2sjp"></iframe>
      </div>
    </section>
  );
}

export default Contact;
