import Button from "../../../../components/Button/button";
import styles from "./homeArticle.module.css";

import { attributes, react as HomeContent } from '../../../../content/home.md';
import Header from "../../../../components/Header/Header";


const MainArticle = () => {
  const {
    mainArticleSubtitle,
    mainArticleSubtitleEmphasizedText,
    mainArticleTitle,
    mainArticleDescription,
    mainArticleButtonText,
  } = attributes;

  return (
    <>
      <Header>
        <Header.LeftSide className={styles.homePageLeftSideSpacing}>
          <Header.HeaderContent
            subtitle={mainArticleSubtitle}
            subtitleEmphasizedText={mainArticleSubtitleEmphasizedText}
            title={mainArticleTitle}
            isTitleNarrow={false}
          ></Header.HeaderContent>
          <Header.Description
            isBoldText={false}
            hasSpacing={true}
          >{mainArticleDescription}</Header.Description>
          <Header.Actions className={styles.homePageActionButton}>
            <Button variant="primary" href="/vacancies">
              {mainArticleButtonText}
            </Button>
          </Header.Actions>
        </Header.LeftSide>
        <Header.RighttSide>
          <div className={styles.homePageBackgroundImageContainer}/>
        </Header.RighttSide>
      </Header>
      <div className={styles.homePageMainImageWrapper}>
        <div className={styles.homePageMainImageContainer}/>
      </div>
    </>
  );
};

export default MainArticle;
