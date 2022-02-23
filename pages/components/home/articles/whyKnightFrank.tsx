import React from "react";
import { Article } from "../../../../components/Article";
import Button from "../../../../components/Button/button";
import Image from "next/image";
import styles from "./homeArticle.module.css";
import { Play } from "react-bootstrap-icons";
import { Title } from "../../../../components/Title";

import { attributes, react as HomeContent } from '../../../../content/home.md';

type Props = {};

export default function WhyKnightFrankArticle({}: Props) {
  const { whyKnightFrankArticleTitle, whyKnightFrankArticleDescription } = attributes;

  return (
    <Article textPosition="right" textOnWhiteBackground>
      <Article.TextContainer>
        <Article.Header
          title={whyKnightFrankArticleTitle}
          subtitle="Why Knight Frank?"
        />
        <Article.Text>
          whyKnightFrankArticleDescription
        </Article.Text>
        <Article.Actions>
          <Button variant="secondary" href="/culture">
            Why Knight Frank?
          </Button>
        </Article.Actions>
      </Article.TextContainer>
      <Article.Left>
        <div className={`${styles.videoBlock} d-flex flex-column`}>
          <div className={styles.videoImg}>
            <img src="/home_video.png" alt="Video" width="500" height="280" />
          </div>
          <div className={`${styles.videoPlay} d-flex align-items-center`}>
            <Button variant="primary" rounded icon={<Play />} />
            <Title className={styles.videoTitle}>Global video title</Title>
          </div>
        </div>
      </Article.Left>
    </Article>
  );
}
