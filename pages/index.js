import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twig Studio</title>
        <meta name="description" content="Twig Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='content-container'>
        <h1 className='title'>Twig Studio</h1>
        <p className='description'>Site under development ✨</p>
      </div>
    </div>
  )
}
