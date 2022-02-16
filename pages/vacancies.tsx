import type { NextPage } from 'next';
import Head from 'next/head';
import { Subtitle, Title } from "../components/Title";
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/footer';
import Article from '../components/Article/article';
import NavbarComponent from '../components/navbar/navbar';

const VacanciesPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Knight Frank Careers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        />
      </Head>

      <body>
      <main className={styles.main}>
          <NavbarComponent />
          <div className={styles.grid}>
          <div className="kf-title">
            <img src={'http://via.placeholder.com/640x120'} width="100%" />
            <Title variant="primary" >Vacancies</Title>
            <Title>Vacancies Title</Title>
            <Subtitle>Vacancies Subtitle</Subtitle>
          </div>
          </div>
        </main>

        <Footer />
      </body>
    </div>
  )
}

export default VacanciesPage
