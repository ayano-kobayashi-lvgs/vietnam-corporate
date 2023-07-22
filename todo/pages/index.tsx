import React from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from "@styles/Home.module.scss"
import Link from 'next/link'
import Services from '../components/PageContents/Top/Services/Services';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leverages Career Vietnam</title>
        <meta name="description" content="A fast growing global recruitment agency pursuing the happiness of all people concerned. Create and leverage your future career with our experienced consultants." />
        <link rel="icon" href="/img/common/icon/favicon.ico" />
        <link rel="preconnect"href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto:wght@100;300;400;500;700;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" media="print" onLoad="this.media='all'" />
      </Head>
      <main>
        <Services />
      </main>
      <footer></footer>
    </div>
  );
}

export default Index;
