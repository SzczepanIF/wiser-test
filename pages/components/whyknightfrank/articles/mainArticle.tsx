import { Article, PrimaryArticle } from "../../../../components/Article";

import styles from "./whyknightfrank.module.css";

import { attributes, react as WhyKnightFrankContent } from '../../../../content/knightfrank.md';

type Props = {};

const MainArticleKnightFrank = (props: Props) => {
  const { mainArticleTitle, mainArticleDescription } = attributes;
  
  return (
      <PrimaryArticle imgSrc="/svg/businessMain.svg">
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

export default MainArticleKnightFrank;
