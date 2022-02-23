import React from "react";
import { Article } from "../../../../components/Article";
import Button from "../../../../components/Button/button";
import styles from "../home/homeArticle.module.css";

import { attributes, react as BusinessContent } from '../../../../content/business.md';

type Props = {};

export default function WhoAreWeArticle({}: Props) {
  const { whatDoWeDoArticleTitle, whatDoWeDoArticleDescription } = attributes;

  return (
    <Article textPosition="right" textOnWhiteBackground variant="secondary">
      <Article.TextContainer>
        <Article.Header
          title={whatDoWeDoArticleTitle}
          subtitle="What do we do?"
        />
        <Article.Text>
          {whatDoWeDoArticleDescription}
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
