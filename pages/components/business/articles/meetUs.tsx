import React, { useCallback } from "react";
import { attributes, react as BusinessContent } from '../../../../content/business.md';
import styles from "./businessArticle.module.css";
import TextImageArticle from '../../../../components/Article/TextImageArticle/TextImageArticle';
import ImageWithIndicator, { IndicatorVerticalPositionType, IndicatorHorizontalPositionType, IndicatorColorType } from "../../../../components/ImageWithIndicator/ImageWithIndicator";

export default function MeetUsArticle() {
  const { meetUsArticleSectionName, meetUsArticleTitle, meetUsArticleDescription, meetUsEmployeeName, meetUsEmployeeTitle } = attributes;

  return (
    <div className="MeetUsArticle">
      <TextImageArticle
        hasSectionHeading={false}
        hasArticleHeading={true}
        hasBackground={false}
        hasRectangleOnImgae={true}
        removeLeftRightSpacingOnMobile={true}
      >
        <TextImageArticle.Container className={styles.meetUsContainer}>
          <TextImageArticle.LeftSide className={styles.meetUsArticleLeftSide}>
            {/* TODO styles.meetUsImageContainer not applying when using ImageWithIndicator */}
            {/* <ImageWithIndicator
              className={styles.meetUsImageContainer}
              imageSrc={"/meetUs.png"}
              indicatorVerticalPosition={IndicatorVerticalPositionType.BOTTOM}
              indicatorHorizontalPosition={IndicatorHorizontalPositionType.LEFT}
              colorType={IndicatorColorType.RED_AND_LIGHT_GREEN}
            ></ImageWithIndicator> */}
            <div className={styles.meetUsImageContainer}>
              <div className={styles.imageIndicator} />
            </div>
          </TextImageArticle.LeftSide>
          <TextImageArticle.RightSide className={styles.meetUsArticleRightSide}>
            <TextImageArticle.TextHeader
              sectionName={meetUsArticleSectionName}
            ></TextImageArticle.TextHeader>
            <TextImageArticle.Text className={styles.meetUsArticleQuote}>
              {meetUsArticleTitle}
            </TextImageArticle.Text>
            <TextImageArticle.Text className={styles.meetUsArticleDescription}>
              {meetUsArticleDescription}
            </TextImageArticle.Text>
            <TextImageArticle.Text className={styles.meetUsArticleEmployeeName}>
              {meetUsEmployeeName}
            </TextImageArticle.Text>
            <TextImageArticle.Text className={styles.meetUsArticleEmployeeTitle}>
              {meetUsEmployeeTitle}
            </TextImageArticle.Text>
          </TextImageArticle.RightSide>
        </TextImageArticle.Container>
      </TextImageArticle>
    </div>
  );
}
