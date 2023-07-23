import React from 'react';
import styles from './Company.module.scss';
import TitleSection from '../../../Atoms/Title/TitleSection/TitleSection';
import MessageMain from '../../../Atoms/Message/MessageMain/MessageMain';
import MessageSub from '../../../Atoms/Message/MessageSub/MessageSub';
import ListCompanyInfo from '../../../Organisms/List/ListCompanyInfo/ListCompanyInfo';

type MessageProps = {
  messageMain: string;
  messageSub: string;
};

type InfoProps = {
  title?: string;
  description: { text: string, link?: string }[];
}

type CompanyInfoListProps = {
  id: string,
  src: string;
  alt: string;
  header: string;
  infoList: InfoProps[];
  hasSpace: boolean;
};

const Company: React.FC = () => {
  const Message: MessageProps = {
    messageMain: 'Based in Tokyo, Leverages Group is a fast growing global recruitment group that has 20+ offices across Japan and worldwide.',
    messageSub: 'We pursue not only the happiness of our clients and customers but also our employees, bringing the best out of everyone and creating win-win situations and values for all people concerned.'
  };

  const companyInfoList: CompanyInfoListProps[] = [
    {
      id: 'vietnamOfficeInfo',
      src: '/img/top/imgSgBranch.png',
      alt: 'Branches',
      header: 'VIETNAM OFFICE',
      infoList: [
        {
          title: 'COMPANY NAME',
          description: [{ text: 'Leverages Career Vietnam Co., Ltd.' }]
        },
        {
          title: 'ESTABLISHED',
          description: [{ text: 'Dec 2019' }],
        },
        {
          title: 'BUSINESS',
          description: [{ text: 'Human resources business'}, { text: 'Study abroad consulting business'}],
        },
        {
          title: 'MANAGING DIRECTOR',
          description: [{ text: 'Shuhei Nishikawa' }],
        }
      ],
      hasSpace: false
    },
    {
      id: 'headOfficeInfo',
      src: '/img/top/imgHeadOffice.jpg',
      alt: 'Head Office',
      header: 'HEAD OFFICE',
      infoList: [
        {
          title: 'COMPANY NAME',
          description: [{ text: 'Leverages Co., Ltd.' }]
        },
        { title: 'ESTABLISHED',
          description: [{ text: 'April 2005' }]
        },
        { title: 'BUSINESS',
          description: [
            { text: 'Recruitment Services' },
            { text: 'System Engineering Services' },
            { text: 'Web Media Services' }
          ]
        },
        {
          title: 'REPRESENTATIVE DIRECTOR',
          description: [{ text: 'Tomohide Iwatsuki' }]
        },
        {
          title: 'ASSOCIATED COMPANIES',
          description: [
              { text: 'Levtech Co., Ltd.', link: 'https://levtech.jp/company/' },
              { text: 'Leverages MedicalCare Co., Ltd.', link: 'https://leverages-medicalcare.jp/' },
              { text: 'Leverages M&A Advisory Co., Ltd.', link: 'https://leveragesma.jp/' },
              { text: 'Leverages Career Mexico S.A. de C.V.', link: 'https://mx.leveragescareer.com/?lang=en' },
              { text: 'Levtech Co., Ltd.', link: 'https://leveragescareer.com/ja/cn/info/about/' }
          ]
        }
      ],
      hasSpace: false
    },
    {
      id: 'relatedServicesInfo',
      src: '/img/top/imgService.jpg',
      alt: 'Related Services',
      header: 'RELATED SERVICES',
      infoList: [
        {
          description: [
            { text: 'Leverages Global Support', link: 'https://lp.leverages-global-support.com/' },
            { text: 'WeXpats', link: 'https://we-xpats.com/en/destination/as/jp/' },
            { text: 'WeXpats Guide', link: 'https://we-xpats.com/en/guide/as/jp/' },
            { text: 'WeXpats Forum', link: 'https://we-xpats.com/en/forum/as/jp/' },
            { text: 'WeXpats Jobs', link: 'https://we-xpats.com/en/job/as/jp/' },
            { text: 'WeXpats Biz', link: 'https://we-xpats.com/ja/biz/as/jp/' },
            { text: 'Leverages Career Mexico', link: 'https://lc-mexico.com/' },
          ]
        }
      ],
      hasSpace: true
    }
  ];

  return (
    <section className={styles.contentBox}>
      <TitleSection title={'OUR GROUP'}></TitleSection>
      <div className={styles.messageBox}>
        <MessageMain message={Message.messageMain}></MessageMain>
        <MessageSub message={Message.messageSub}></MessageSub>
      </div>
      <div className={styles.CompanyList}>
        {companyInfoList.map((company, index) => {
          return (
            <div key={index} className={styles.listItem}>
              <p className={styles.img}>
                <img src={company.src} alt={company.alt}></img>
              </p>
              <div className={styles.infoArea}>
                <p className={styles.header}>{company.header}</p>
                <ListCompanyInfo companyInfo={company.infoList} hasSpace={company.hasSpace}></ListCompanyInfo>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Company;
