import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twig Studio</title>
        <meta name="description" content="Twig Studio" />
        <link rel="icon" href="/icon_mwn_icon.ico" />
      </Head>
      <div className='content-container'>
        <div className='logo'>
            <svg className="svgLogo" width="360" height="100" viewBox="0 0 1182 331" fill="none"   xmlns="http://www.w3.org/2000/svg">
            <path d="M1066.5 24V1C1088.33 -0.5 1141.3 5.1 1178.5 39.5C1181 43 1183 48.5 1177.5 54C1173.1 58.4 1167.67 57.5 1165.5 56.5C1149.83 44.6667 1108.1 21.6 1066.5 24Z" fill="#FA3E00"/>
            <path d="M1051.5 306.5V329.5C1004.67 326.5 908.5 290.5 898.5 170.5C898.5 104.5 933 21.5 1051.5 2.5V24.5C1009.33 30 924.3 66.9 921.5 170.5C921.5 185.5 938 294 1051.5 306.5Z" fill="#575755"/>
            <path d="M12 5C5.37258 5 0 10.3726 0 17C0 23.6274 5.37258 29 12 29H233C239.627 29 245 23.6274 245 17C245 10.3726 239.627 5 233 5H12Z" fill="#FA3E00"/>
            <path d="M111 42H134V321H133.903C133.168 326.643 128.343 331 122.5 331C116.657 331 111.832 326.643 111.097 321H111V42Z" fill="#575755"/>
            <path d="M290.766 7.82094C296.854 5.20175 304.82 10.1226 308.558 18.8119L433.22 308.569C436.958 317.258 435.054 326.425 428.966 329.045C422.878 331.664 414.912 326.743 411.174 318.054L286.512 28.2968C282.774 19.6075 284.678 10.4401 290.766 7.82094Z" fill="#575755"/>
            <path d="M499 115L431.5 271.5L444 300.5L511.5 144L499 115Z" fill="#575755"/>
            <path d="M604.5 325.5L506.5 97.5C514.9 80.7 525.667 88.5 530 94.5C560.167 165.167 621.6 309.1 626 319.5C620 333.9 609.167 329.5 604.5 325.5Z" fill="#575755"/>
            <path d="M621.5 272L633.5 301L754 21.5C753.167 13.1667 747.5 -0.199993 731.5 13C729.1 19.8 657.167 188.5 621.5 272Z" fill="#575755"/>
            <path d="M810 17C810 10.3726 815.373 5 822 5C828.627 5 834 10.3726 834 17V319C834 325.627 828.627 331 822 331C815.373 331 810 325.627 810 319V17Z" fill="#575755"/>
            <path d="M1067 308C1110.2 308 1144.67 290 1156.5 281V184H1064C1061.83 184.333 1057.2 182.9 1056 174.5C1054.8 166.1 1060.83 162.667 1064 162H1171.5C1179.9 164 1181.33 171.5 1181 175V288.5C1141.4 326.9 1088.5 332.167 1067 330V308Z" fill="#575755"/>
            </svg>
        </div>
        <p className='description'>Site under development ???</p>
        <a href="mailto:kadambarimisra@gmail.com" className="contactButton">Contact</a>
      </div>
    </div>
  )
}
