import React from "react";
import TextImageArticle from '../../../../components/Article/TextImageArticle/TextImageArticle';
import styles from "./businessArticle.module.css";
import { attributes, react as BusinessContent } from '../../../../content/business.md';

export default function WhatDowWeDoArticle() {
  const { whatDoWeDoArticleSectionName, whatDoWeDoArticleTitle, whatDoWeDoArticleDescription } = attributes;

  return (
    <div className="WhatDoWeDoArticle">
      <TextImageArticle
        hasSectionHeading={true}
        hasArticleHeading={false}
        hasBackground={false}
        hasRectangleOnImgae={false}
      >
        <TextImageArticle.SectionHeader
          sectionName={whatDoWeDoArticleSectionName}
          title={whatDoWeDoArticleTitle}
        />
        <TextImageArticle.Container
          reversedContentOnMobile={true}
          className={styles.whatDoWeDoArticleContainer}
        >
          <TextImageArticle.LeftSide>
            <div className={styles.whatDoWeDoImageContainer}/>
          </TextImageArticle.LeftSide>
          <TextImageArticle.RightSide className={styles.whatDoWeDoArticleRightSide}>
            <TextImageArticle.Text className={styles.whatDoWeDoArticleDescription}>
              {whatDoWeDoArticleDescription}
            </TextImageArticle.Text>
          </TextImageArticle.RightSide>
        </TextImageArticle.Container>
      </TextImageArticle>
    </div>
  );
}
