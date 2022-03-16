import { Article, PrimaryArticle } from "../../../../components/Article";

import styles from "./locationsk.module.css";

import { attributes, react as WhyKnightFrankContent } from '../../../../content/locations.md';

type Props = {};

const MainArticleLocations = (props: Props) => {
  const { mainArticleTitle, mainArticleDescription } = attributes;

  return (
      <PrimaryArticle imgSrc="/svg/globe.svg">
        <PrimaryArticle.Title
          title={mainArticleTitle}
          subtitle="Careers at"
          subtitleEmphasizedText="Knight Frank"
        />
        <PrimaryArticle.Content>
          {mainArticleDescription}
        </PrimaryArticle.Content>
      </PrimaryArticle>
  );
};

export default MainArticleLocations;
