import React from "react";
import Button from "../../../../components/Button/button";
import styles from "./homeArticle.module.css";
import TextImageArticle from '../../../../components/Article/TextImageArticle/TextImageArticle';

import { attributes, react as HomeContent } from '../../../../content/home.md';

export default function WhoAreWeArticle() {
  const { whoAreWeArticleSubtitle, whoAreWeArticleTitle, whoAreWeArticleDescription, whoAreWeDescriptionButton } = attributes;

  return (
    <TextImageArticle
      hasSectionHeading={false}
      hasArticleHeading={true}
      hasBackground={false}
      hasRectangleOnImgae={true}
      removeLeftRightSpacingOnMobile={true}
    >
      <TextImageArticle.Container
        reversedContentOnMobile={true}
        className={styles.whoAreWeContainer}
      >
        <TextImageArticle.LeftSide>
          {/* TODO convert to shared component with props */}
          <div className={styles.whoAreWeImageContainer}>
            <div className={styles.imageIndicator} />
          </div>
        </TextImageArticle.LeftSide>
        <TextImageArticle.RightSide className={styles.whoAreWeRightSide}>
          <TextImageArticle.TextHeader
            sectionName={whoAreWeArticleSubtitle}
            title={whoAreWeArticleTitle}
          ></TextImageArticle.TextHeader>
          <TextImageArticle.Text className={styles.whoAreWeArticleDescription}>
            {whoAreWeArticleDescription}
          </TextImageArticle.Text>
          <TextImageArticle.TextActions>
            <Button variant="secondary" href="/business">
              {whoAreWeDescriptionButton}
            </Button>
          </TextImageArticle.TextActions>

        </TextImageArticle.RightSide>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
