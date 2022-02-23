import React from "react";
import { Article } from "../../../../components/Article";
import Button from "../../../../components/Button/button";
import styles from "../../home/articles/homeArticle.module.css";
import { attributes, react as WhyKnightFrankContent } from '../../../../content/knightfrank.md';

type Props = {};

export default function HeartOfKnightFrankArticle({}: Props) {
  const { heartOfKnightFrankArticleTitle, heartOfKnightFrankArticleDescription } = attributes;

  return (
    <Article
      className={styles.locationsContainer}
      backgroundClassName={styles.locationsContainerBackground}
    >
      <Article.TextContainer hasBackground>
        <Article.Header title={heartOfKnightFrankArticleTitle} subtitle="Subtitle" />
        <Article.Text>
          {heartOfKnightFrankArticleDescription}
        </Article.Text>
        <Article.Actions>
          <Button variant="secondary" href="/locations">
            The Heart of Knight Frank
          </Button>
        </Article.Actions>
      </Article.TextContainer>
    </Article>
  );
}
