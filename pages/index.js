import Head from 'next/head'
import Hello from '../components/Hello'
import Technologies from '../components/Technologies'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
          <Head>
        <title>Hector Cardona - Front-End Web Developer</title>
        <meta name="description" content="Built with Next.js &amp; React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hello />
        <Technologies />
      </main>
    </div>
  )
}
