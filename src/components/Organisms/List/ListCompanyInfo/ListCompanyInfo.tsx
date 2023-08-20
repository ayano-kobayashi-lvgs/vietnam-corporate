import React from "react";
import styles from "./ListCompanyInfo.module.scss";

type InfoProps = {
  title?: string;
  description: { text: string, link?: string }[];
}

type CompanyInfoType = {
  companyInfo: InfoProps[];
  hasSpace: boolean;
}

const ListCompanyInfo: React.FC<CompanyInfoType> = ({companyInfo, hasSpace}) => {
  return (
    <ul className={styles.list}>
      {companyInfo.map((item, index) => {
        return (
          <li key={index} className={styles.item}>
            {item.title ? <p className={styles.title}>{item.title}</p> : null}
            <ul className={styles.list}>
              {item.description.map((description, index) => {
                return (
                  <li key={index}>
                    <p className={`${styles.text} ${hasSpace ? styles.textWithSpace: ''}`}>
                      {description.link ? (
                        <a href={description.link} target="_blank"
                          className={styles.link}>
                          {description.text}
                        </a>
                      ) : (
                        description.text
                      )}
                    </p>
                  </li>
                )
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default ListCompanyInfo;
