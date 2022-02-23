import React from "react";
import { Article } from "../../../../components/Article";
import Button from "../../../../components/Button/button";
import styles from "./homeArticle.module.css";

import { attributes, react as KnightFrankContent } from '../../../../content/home.md';

type Props = {};

export default function LocationsArticle({}: Props) {
  const { locationArticleTitle, locationArticleDescription } = attributes;

  return (
    <Article
      className={styles.locationsContainer}
      backgroundClassName={styles.locationsContainerBackground}
    >
      <Article.TextContainer hasBackground>
        <Article.Header title={locationArticleTitle} subtitle="Locations" />
        <Article.Text>
          {locationArticleDescription}
        </Article.Text>
        <Article.Actions>
          <Button variant="secondary" href="/locations">
            Explore locations
          </Button>
        </Article.Actions>
      </Article.TextContainer>
    </Article>
  );
}
