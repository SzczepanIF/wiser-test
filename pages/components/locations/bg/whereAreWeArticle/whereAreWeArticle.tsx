import React from "react";
import TextImageArticle from '../../../../../components/Article/TextImageArticle/TextImageArticle';
import styles from "./whereAreWeArticle.module.css";
import { attributes, react as LocationsContent } from '../../../../../content/locations.md';

export default function WhereAreWeArticle() {
  const { whereAreWeArticleSectionName, whereAreWeArticleTitle, whereAreWeArticleDescription } = attributes;

  return (
    <TextImageArticle
      hasSectionHeading={false}
      hasArticleHeading={true}
      hasBackground={false}
      hasRectangleOnImgae={false}
    >

      <TextImageArticle.Container
        reversedContentOnMobile={true}
        className={styles.whereAreWeArticleContainer}
      >
        <TextImageArticle.LeftSide>
          <div className={styles.whereAreWeImageContainer}/>
        </TextImageArticle.LeftSide>
        <TextImageArticle.RightSide className={styles.whereAreWeArticleRightSide}>
          <TextImageArticle.TextHeader
            sectionName="Locations"
            title="Where are we"
          />
          <TextImageArticle.Text className={styles.whereAreWeArticleDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum odio dolor malesuada nunc ultrices. Pharetra habitant pellentesque rutrum sem. Amet aliquam suspendisse faucibus quam nulla ut viverra porttitor maecenas. A gravida lectus metus dignissim pellentesque.
          </TextImageArticle.Text>
          <div className={styles.whereAreWeRedirection}>
            Australia head ooffice
            <div className={styles.whereAreWeRedirectionIcon}></div>
          </div>
        </TextImageArticle.RightSide>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
