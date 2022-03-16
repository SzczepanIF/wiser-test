import { attributes, react as BusinessContent } from '../../../../content/business.md';
import Header from "../../../../components/Header/Header";
import styles from "./businessArticle.module.css";

const MainArticle = () => {
  const {
    mainArticleSubtitle,
    mainArticleSubtitleEmphasizedText,
    mainArticleTitle,
    mainArticleDescription,
  } = attributes;

  return (
    <Header hasBottomBackgroundBlock={true}>
      <Header.LeftSide className={styles.aboutPageLeftSideSpacing}>
        <Header.HeaderContent
          subtitle={mainArticleSubtitle}
          subtitleEmphasizedText={mainArticleSubtitleEmphasizedText}
          title={mainArticleTitle}
        ></Header.HeaderContent>
        <Header.Description>{mainArticleDescription}</Header.Description>
      </Header.LeftSide>
      <Header.RighttSide>
        <div className={styles.aboutPageImageContainer}/>
      </Header.RighttSide>
    </Header>
  );
};

export default MainArticle;
