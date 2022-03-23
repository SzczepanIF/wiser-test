import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Footer from "../../../components/Footer/footer";
import NavbarComponent from "../../../components/navbar/navbar";


import { attributes, react as LocationsContent } from '../../../content/locations.md';

import LocationsBgHeader from "../../components/locations/bg/locationsBigHeader/locationsBgHeader";
import WhereAreWeArticle from "../../components/locations/bg/whereAreWeArticle/whereAreWeArticle";
import AboutLocationArticle from "../../components/locations/bg/aboutLocationArticle/aboutLocationArticle";
import OurBehavioursArticle from "../../components/locations/bg/ourBehavioursArticle/ourBehavioursArticle";
import QuoteArticle from "../../../components/QuoteArticle/quoteArticle";
import LocationSliderArticle from "../../components/locations/bg/locationSliderArticle/locationSliderArticle";
import VacanciesArticle from "../../components/locations/bg/vacanciesArticle/vacanciesArticle";
import EarlyCareersArticle from "../../components/locations/bg/earlyCareersArticle/earlyCareersArticle";

import { TQuote } from "../../../utils/types";
import React from "react";

const AustraliaPage: NextPage = () => {
  const [quotesData, setQuotesData] = React.useState<TQuote[]>([]);
  React.useEffect(() => {
    const getQuotes = async () => {
      const data = await quotesRandomData();
      setQuotesData(data);
    };

    getQuotes();
  }, []);

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
        <LocationsContent />

        <main className={`${styles.main} ${styles.locationsBigMain}`}>
          <NavbarComponent />
          <div className={styles.grid}>
            <LocationsBgHeader />
            <WhereAreWeArticle />
            <AboutLocationArticle />
            <QuoteArticle items={quotesData} />
            <OurBehavioursArticle />
            <LocationSliderArticle />
            <EarlyCareersArticle />
            <VacanciesArticle />
          </div>
        </main>

        <Footer />
      </body>
    </div>
  );
};

export default AustraliaPage;

async function quotesRandomData() {
  let data: TQuote[] = [];

  const quotes = [
    "I joined Knight Frank as a project manager in the Design and Delivery Department, and had the opportunity to participate in lots of renovation and development projects right from the start. After two years, I moved departments and joined OSCA – changing roles and gaining cross-functional skills has been so much easier here than I expected. Knight Frank is a very human company, where everyone is really able to express themselves. Right now, I'm feeling professionally fulfilled, and extremely happy – things couldn't be better!",
    "Working for Knight Frank means getting to be part of a global network, and I’ve had frequent opportunities to collaborate with offices in other countries. Every project is a new challenge, and gives me the opportunity to learn new skills, and grow my experience. I am also grateful for all the open-minded and supportive colleagues I’ve had the chance to work with, and who have been a huge part of my wonderful career path.",
    "Opportunity is the name of the game at Knight Frank – working here has opened so many doors that I've never previously thought possible or considered. You have access to an awesome group of professionals around the world and you're encouraged to take charge of your own career.",
  ];

  await fetch("https://randomuser.me/api/?results=3")
    .then((res) => res.json())
    .then(({ results }) => {
      const mapped = (results || []).map((user: any, idx: number) => {
        return {
          quote: quotes[idx],
          author: {
            name: `${user.name.first} ${user.name.last}`,
            avatar: user.picture.medium,
            businessUnit: `${user.id.name || "ACE"}, ${user.login.username}`,
            location: user.location.city,
          },
        };
      });

      data = mapped;
    });

  return data;
}