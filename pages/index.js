import Head from 'next/head'
import styles from '../styles/Landing.module.css'
import Image from 'next/image'
import LandingNav from '../components/LandingNav'

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Streets Auto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>
      <Image
        src="/images/landing-logo.png"
        alt="Streets Auto landing logo"
        width={500}
        height={250}
        />
        <LandingNav/>
    </main>
    </div>
  )
}
