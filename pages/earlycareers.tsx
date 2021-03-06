import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Subtitle, Title } from "../components/Title";
import Footer from "../components/Footer/footer";
import NavbarComponent from "../components/navbar/navbar";
import RealisePosibilities from "../components/RealisePossibilities/realisePossibilities";

const EarlyCareersPage: NextPage = () => {
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
        <link
          rel="preload"
          href="/fonts/romain/RomainHeadline-Regular.otf"
          as="font"
          crossOrigin=""
         />
         <link
          rel="preload"
          href="/fonts/suisse/SuisseIntl-Regular.otf"
          as="font"
          crossOrigin=""
         />
      </Head>

      <body>
        <NavbarComponent />

        <main className={styles.main}>
          <NavbarComponent />
          <div className={styles.grid}>
            <div className="kf-title">
              <img src={"http://via.placeholder.com/640x120"} width="100%" />
              <Title variant="primary">Early Careers</Title>
              <Title>Early Careers Title</Title>
              <Subtitle>Early Careers Subtitle</Subtitle>
            </div>
          </div>
          <br /> <br />
          <RealisePosibilities>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Beatae, delectus?
          </RealisePosibilities>
        </main>

        <Footer />
      </body>
    </div>
  );
};

export default EarlyCareersPage;
