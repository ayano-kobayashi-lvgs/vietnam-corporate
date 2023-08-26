import React from 'react';
import styles from './Services.module.scss';
import Image from 'next/image';
import TitleSection from '../../../Atoms/Title/TitleSection/TitleSection';
import { useTranslation } from 'react-i18next';

type ServiceProps = {
  alt: string;
  src: string;
  description: string;
  reflink: string;
}

const Services: React.FC = () => {
  const { t } = useTranslation();
  const serviceList: ServiceProps[] = [
    {
      alt: 'WeXpatsJobs',
      src: '/img/common/logo/logo_WexpatsJobs.svg',
      description: t('services.descriptionWexpatsJobs'),
      reflink: 'https://we-xpats.com/en/job/as/jp'
    },
    {
      alt: 'WeXpatsSchool',
      src: '/img/common/logo/logo_WeXpatsSchool.svg',
      description: t('services.descriptionWexpatsSchool'),
      reflink: 'https://we-xpats.com/en/school/as/jp/'
    },
    {
      alt: 'WeXpatsNihongo',
      src: '/img/common/logo/logo_WeXpatsNihongo.svg',
      description: t('services.descriptionWexpatsNihongo'),
      reflink: 'https://lp.we-xpats.com/vn/nihongo/vi/'
    }
  ]

  return (
    <section className={styles.contentBox}>
      <div className={styles.serviceListWrap}>
        <TitleSection title={t('services.title')} widthSpecified={true}></TitleSection>
        <div className={styles.serviceList}>
          {serviceList.map((service, index) => {
            return (
              <div key={index}>
                <p className={styles.img}>
                  <Image src={service.src} alt={service.alt} height={56} width={300}></Image>
                </p>
              <div className={styles.descriptionArea}>
                <p className={styles.description}>{service.description}</p>
                <p className={styles.button}>
                  <a href={service.reflink} target="_blank">
                    Read more
                    <span className={styles.buttonIcon}></span>
                  </a>
                </p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
