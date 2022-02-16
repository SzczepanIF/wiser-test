import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Subtitle, Title } from "../components/Title";
import Footer from "../components/Footer/footer";
import Article from "../components/Article/article";
import NavbarComponent from "../components/navbar/navbar";
import MainArticle from "./components/business/articles/mainArticle";

const BusinessPage: NextPage = () => {
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
        <NavbarComponent />
        <main className={styles.main}>
          <MainArticle />
        </main>
        <Footer />
      </body>
    </div>
  );
};

export default BusinessPage;
