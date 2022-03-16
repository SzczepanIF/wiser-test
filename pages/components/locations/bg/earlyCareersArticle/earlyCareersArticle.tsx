import React from "react";
import TextImageArticle from '../../../../../components/Article/TextImageArticle/TextImageArticle';
import styles from "./earlyCareersArticle.module.css";
import { attributes, react as LocationsContent } from '../../../../../content/locations.md';

export default function EarlyCareersArticle() {
  const { earlyCareersArticleSectionName, earlyCareersArticleTitle, earlyCareersArticleDescription } = attributes;

  return (
    <TextImageArticle
      hasSectionHeading={false}
      hasArticleHeading={true}
      hasBackground={true}
      hasRectangleOnImgae={false}
      className={styles.earlyCareersArticleContainer}
    >
      <TextImageArticle.Container
        reversedContentOnMobile={true}
        className={styles.earlyCareersContentContainer}
      >
        <TextImageArticle.LeftSide className={styles.earlyCareersArticleLeftSide}>
          <TextImageArticle.TextHeader
            sectionName="Early careers"
            title="Looking for early careers information?"
            sectionColor="white"
          />
          <TextImageArticle.Text className={styles.earlyCareersArticleDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum odio dolor malesuada nunc ultrices. Pharetra habitant pellentesque rutrum sem. Amet aliquam suspendisse faucibus quam nulla ut viverra porttitor maecenas. A gravida lectus metus dignissim pellentesque.
          </TextImageArticle.Text>
        </TextImageArticle.LeftSide>
        <TextImageArticle.RightSide className={styles.earlyCareersArticleRightSide}>
          <div className={styles.earlyCareersImageContainer}/>
        </TextImageArticle.RightSide>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
