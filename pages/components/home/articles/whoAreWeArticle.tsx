import React from "react";
import { Article } from "../../../../components/Article";
import Button from "../../../../components/Button/button";
import styles from "./homeArticle.module.css";

import { attributes, react as HomeContent } from '../../../../content/home.md';

type Props = {};

export default function WhoAreWeArticle({}: Props) {
  const { whoAreWeArticleTitle, whoAreWeArticleDescription } = attributes;

  return (
    <Article textPosition="right" textOnWhiteBackground>
      <Article.TextContainer>
        <Article.Header
          title={whoAreWeArticleTitle}
          subtitle="Who are we?"
        />
        <Article.Text>
          {whoAreWeArticleDescription}
        </Article.Text>
        <Article.Actions>
          <Button variant="secondary" href="/business">
            Find out more
          </Button>
        </Article.Actions>
      </Article.TextContainer>
      <Article.Right>
        <img src="/home_people.png" alt="People" width="500" height="500" />
      </Article.Right>
    </Article>
  );
}
