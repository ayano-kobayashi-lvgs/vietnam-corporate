import React from 'react';
import styles from './Services.module.scss';
import Image from 'next/image';

type ServiceProps = {
  alt: string;
  src: string;
  description: string;
  reflink: string;
}

const Services: React.FC = () => {
  const serviceList: ServiceProps[] = [
    {
      alt: 'WeXpatsJobs',
      src: '/img/common/logo/logo_WexpatsJobs.svg',
      description: 'WeXpats Job is a website for job search for the non-Japanese people who are looking to work in Japan. WeXpats Job has one of the largest pools of jobs which welcome foreign employment. With WeXpats Job, you can search jobs in your own language!',
      reflink: 'https://we-xpats.com/en/job/as/jp'
    },
    {
      alt: 'WeXpatsSchool',
      src: '/img/common/logo/logo_WeXpatsSchool.svg',
      description: 'WeXpats School is an agent which specializes in service for studying abroad for the people who are thinking about studying in Japan. Our school provides a full range of services from consultation for study abroad to living in Japan.',
      reflink: 'https://we-xpats.com/en/school/as/jp/'
    },
    {
      alt: 'WeXpatsNihongo',
      src: '/img/common/logo/logo_WeXpatsNihongo.svg',
      description: 'WeXpats Nihongo is a language learning service for non-Japanese people. The method of active learning is used for practical vocal class.',
      reflink: 'https://lp.we-xpats.com/vn/nihongo/vi/'
    }
  ]

  return (
    <section className={styles.contentBox}>
      <h3 className={styles.title}>OUR SERVICE</h3>
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
    </section>
  );
}

export default Services;
