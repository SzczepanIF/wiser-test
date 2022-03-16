import React from "react";
import Button from "../../../../components/Button/button";
import styles from "./homeArticle.module.css";
import { Play } from "react-bootstrap-icons";
import { Title } from "../../../../components/Title";

import { attributes, react as HomeContent } from '../../../../content/home.md';
import TextImageArticle from '../../../../components/Article/TextImageArticle/TextImageArticle';

type Props = {};

export default function WhyKnightFrankArticle({}: Props) {
  const { whyKnightFrankArticleSectionName, whyKnightFrankArticleTitle, whyKnightFrankArticleDescription, whyKnightFrankArticleButton, whyKnightFrankArticleVideButtonTitle } = attributes;

  return (
    <TextImageArticle
      hasSectionHeading={false}
      hasArticleHeading={true}
      hasBackground={false}
      hasRectangleOnImgae={false}
      removeLeftRightSpacingOnMobile={true}
    >
      <TextImageArticle.Container
        reversedContentOnMobile={true}
        className={styles.whyKnightFrankArticleContainer}
      >
        <TextImageArticle.LeftSide>
          <div className={`${styles.videoBlock} d-flex flex-column`}>
            <div className={styles.videoImg}>
              <img src="/home_video.png" alt="Video" width="100%" />
            </div>
            <div className={`${styles.videoPlay} d-flex videoPlay`}>
              <Button variant="primary" className="video-button" rounded icon={<Play size={28} style={{paddingLeft: "2px"}} />} />
              <Title className={styles.videoTitle}>{whyKnightFrankArticleVideButtonTitle}</Title>
            </div>
          </div>
        </TextImageArticle.LeftSide>
        <TextImageArticle.RightSide className={styles.whyKnightFrankRightSide}>
          <TextImageArticle.TextHeader
            sectionName={whyKnightFrankArticleSectionName}
            title={whyKnightFrankArticleTitle}
          ></TextImageArticle.TextHeader>
          <TextImageArticle.Text className={styles.whyKnightFrankDescription}>
            {whyKnightFrankArticleDescription}
          </TextImageArticle.Text>
          <TextImageArticle.TextActions>
            <Button variant="secondary" href="/culture">
              {whyKnightFrankArticleButton}
            </Button>
          </TextImageArticle.TextActions>
        </TextImageArticle.RightSide>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
