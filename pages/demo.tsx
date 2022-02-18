import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/footer";
import { Subtitle, Title } from "../components/Title";
import NavbarComponent from "../components/navbar/navbar";
import RealisePosibilities from "../components/RealisePossibilities/realisePossibilities";
import QuoteArticle from "../components/QuoteArticle/quoteArticle";
import { TQuote } from "../utils/types";
import CountUpContainer from "../components/CountUpContainer/countupContainer";
import LocationsArticle from "./components/home/articles/locationsArticle";
import WhoAreWeArticle from "./components/home/articles/whoAreWeArticle";
import SocialResponsibilityArticle from "./components/business/articles/socialResponsibility";
import Remove_ButtonsPresentation from "../components/Button/remove_buttonsPresentation";

const Demo: NextPage = () => {
  const [quotesData, setQuotesData] = React.useState<TQuote[]>([]);

  const countUpData = React.useMemo(
    () => ({
      people: 20000,
      territories: 57,
      globalTeams: 1,
      offices: 488,
    }),
    []
  );

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
        <main className={styles.main}>
          <NavbarComponent />

          <div className={styles.grid}>
            <div className="kf-title">
              <Title variant="primary">Primary title component</Title>
              <Title>Title component</Title>
              <Subtitle>Subtitle component</Subtitle>
              <Subtitle emphasizedText="Additional Text">
                Subtitle component
                <Subtitle.Emphasized>Additional text</Subtitle.Emphasized>
              </Subtitle>
              <Subtitle color="green">Subtitle component 2</Subtitle>
              <div className="w-50" style={{ background: "#ddd" }}>
                <Subtitle color="white">Subtitle component 3</Subtitle>
              </div>
            </div>
            <div className="py-5">
              <CountUpContainer data={countUpData} />
            </div>
            <QuoteArticle items={quotesData} />
            <RealisePosibilities>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Beatae, delectus?
            </RealisePosibilities>
            <Remove_ButtonsPresentation />
          </div>
        </main>

        <Footer />
      </body>
    </div>
  );
};

export default Demo;

async function quotesRandomData() {
  let data: TQuote[] = [];

  const quotes = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, hic?",
    "Cumque ipsum consequatur consectetur quaerat dolorem ex magnam enim necessitatibus repudiandae! Veniam aspernatur ratione cupiditate commodi sunt nemo magni deserunt.",
    "Rerum praesentium maiores debitis reprehenderit sit voluptates eum distinctio, voluptas corporis sint eligendi! Eius, voluptas nulla consequuntur nihil quisquam, minus in, asperiores amet voluptate cumque nisi. Nesciunt cumque eum repudiandae laborum doloribus dicta fugit, accusamus distinctio fuga, voluptas hic. Porro, quaerat esse.",
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
