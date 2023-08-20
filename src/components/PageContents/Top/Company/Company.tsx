import React from 'react';
import styles from './Company.module.scss';
import TitleSection from '../../../Atoms/Title/TitleSection/TitleSection';
import MessageMain from '../../../Atoms/Message/MessageMain/MessageMain';
import MessageSub from '../../../Atoms/Message/MessageSub/MessageSub';
import ListCompanyInfo from '../../../Organisms/List/ListCompanyInfo/ListCompanyInfo';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const Message: MessageProps = {
    messageMain: t('company.messageMain'),
    messageSub: t('company.messageSub')
  };

  const companyInfoList: CompanyInfoListProps[] = [
    {
      id: 'vietnamOfficeInfo',
      src: '/img/top/imgSgBranch.png',
      alt: 'Branches',
      header: t('company.branch.header'),
      infoList: [
        {
          title: t('company.branch.companyName.title'),
          description: [{ text: t('company.branch.companyName.description')}]
        },
        {
          title: t('company.branch.establishedDate.title'),
          description: [{ text: t('company.branch.establishedDate.description')}],
        },
        {
          title: t('company.branch.business.title'),
          description: [
            { text: t('company.branch.business.description01')},
            { text: t('company.branch.business.description02')}
          ],
        },
        {
          title: t('company.branch.managingDirector.title'),
          description: [{ text: t('company.branch.managingDirector.description')}],
        }
      ],
      hasSpace: false
    },
    {
      id: 'headOfficeInfo',
      src: '/img/top/imgHeadOffice.jpg',
      alt: 'Head Office',
      header: t('company.headOffice.header'),
      infoList: [
        {
          title: t('company.headOffice.companyName.title'),
          description: [{ text: t('company.headOffice.companyName.description')}]
        },
        { title: t('company.headOffice.establishedDate.title'),
          description: [{ text: t('company.headOffice.establishedDate.description')}]
        },
        { title: t('company.headOffice.business.title'),
          description: [
            { text: t('company.headOffice.business.description01')},
            { text: t('company.headOffice.business.description02')},
            { text: t('company.headOffice.business.description03')}
          ]
        },
        {
          title: t('company.headOffice.representativeDirector.title'),
          description: [{ text: t('company.headOffice.representativeDirector.description')}]
        },
        {
          title: t('company.headOffice.associateCompanies.title'),
          description: [
              { text: t('company.headOffice.associateCompanies.levtech'), link: 'https://levtech.jp/company/' },
              { text: t('company.headOffice.associateCompanies.leveragesMedicalCare'), link: 'https://leverages-medicalcare.jp/' },
              { text: t('company.headOffice.associateCompanies.mAndAAdvisory'), link: 'https://leveragesma.jp/' },
              { text: t('company.headOffice.associateCompanies.mexicoBranch'), link: 'https://mx.leveragescareer.com/?lang=en' },
              { text: t('company.headOffice.associateCompanies.ChinaBranch'), link: 'https://leveragescareer.com/ja/cn/info/about/' }
          ]
        }
      ],
      hasSpace: false
    },
    {
      id: 'relatedServicesInfo',
      src: '/img/top/imgService.jpg',
      alt: 'Related Services',
      header: t('company.relatedServices.header'),
      infoList: [
        {
          description: [
            { text: t('company.relatedServices.leveragesGlobalSupport.title'), link: 'https://lp.leverages-global-support.com/' },
            { text: t('company.relatedServices.wexpats.title'), link: 'https://we-xpats.com/en/destination/as/jp/' },
            { text: t('company.relatedServices.wexpatsGuide.title'), link: 'https://we-xpats.com/en/guide/as/jp/' },
            { text: t('company.relatedServices.wexpatsForum.title'), link: 'https://we-xpats.com/en/forum/as/jp/' },
            { text: t('company.relatedServices.wexpatsJobs.title'), link: 'https://we-xpats.com/en/job/as/jp/' },
            { text: t('company.relatedServices.wexpatsBiz.title'), link: 'https://we-xpats.com/ja/biz/as/jp/' },
            { text: t('company.relatedServices.lcMexico.title'), link: 'https://lc-mexico.com/' },
          ]
        }
      ],
      hasSpace: true
    }
  ];

  return (
    <section className={styles.contentBox}>
      <div className={styles.titleWrap}>
        <TitleSection title={'OUR GROUP'}></TitleSection>
        <div className={styles.messageBox}>
          <MessageMain message={Message.messageMain}></MessageMain>
          <MessageSub message={Message.messageSub}></MessageSub>
        </div>
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
