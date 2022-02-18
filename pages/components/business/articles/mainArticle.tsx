import { Article, PrimaryArticle } from "../../../../components/Article";

import styles from "./businessArticle.module.css";

type Props = {};

const MainArticle = (props: Props) => {
  return (
    <PrimaryArticle imgSrc="/svg/businessMain.svg">
      <PrimaryArticle.Title
        title="Get to know us"
        subtitle="Careers at"
        subtitleEmphasizedText="Knight Frank"
      />
      <PrimaryArticle.Content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt autem ad
        nulla totam possimus saepe fugiat. Praesentium molestias aliquam alias.
      </PrimaryArticle.Content>
    </PrimaryArticle>
  );
};

export default MainArticle;
