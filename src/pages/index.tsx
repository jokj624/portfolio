import Head from 'next/head';
import styles from '@/styles/home/Home.module.scss';

import { Header } from '@/components/header';
import { Profile } from '@/components/profile';
import { Banner } from '@/components/banner';
import { About } from '@/components/about';
import { Footer } from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Backend Developer Jobchae</title>
        <meta
          name="description"
          content="끊임없이 도전하는 백엔드 개발자 잡채입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main className={styles.main}>
        <Header />
        <Profile />
        <Banner />
        <About />
        <Footer />
      </main>
    </>
  );
}
