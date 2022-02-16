import Article from "../../../../components/Article/article";
import Button from "../../../../components/Button/button";
import styles from "./homeArticle.module.css";

type Props = {};

const MainArticle = (props: Props) => {
  const articleVariant = "primary";

  return (
    <Article
      variant={articleVariant}
      backgroundClassName={styles.mainArticleBackground}
    >
      <Article.TextContainer variant={articleVariant}>
        <Article.Header
          title="Your partners in property"
          titleType={articleVariant}
          subtitle="Careers at Knight Frank"
          subtitleEmphasizedText="Knigth Frank"
        />
        <Article.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <p className="p-0">
            Adipisci fuga quia minus necessitatibus repellendus.
          </p>
        </Article.Text>
        <Article.Actions>
          <Button variant="primary" href="/vacancies">
            See vacancies
          </Button>
        </Article.Actions>
      </Article.TextContainer>
    </Article>
  );
};

export default MainArticle;
