import Article from "../../../../components/Article/article";
import Button from "../../../../components/Button/button";

import styles from "./businessArticle.module.css";

type Props = {};

const MainArticle = (props: Props) => {
  const articleVariant = "primary";

  return (
    <Article variant={articleVariant} className={styles.mainArticle}>
      <Article.TextContainer variant={articleVariant}>
        <Article.Header
          title="Get to know us"
          titleType={articleVariant}
          subtitle="Careers at Knight Frank"
          subtitleEmphasizedText="Knigth Frank"
        />
        <Article.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          voluptatem aperiam, earum similique quibusdam libero consequuntur
          dolore laborum fuga cum?
        </Article.Text>
      </Article.TextContainer>
      <Article.Right className={styles.mainArticleBackground}></Article.Right>
    </Article>
  );
};

export default MainArticle;
