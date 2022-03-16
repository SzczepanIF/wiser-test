import React, { useCallback } from "react";
import SlideControlButtons from "../../../../components/SlideControlButtons/slideControlButtons";
import styles from "./businessArticle.module.css";
import TextImageArticle from '../../../../components/Article/TextImageArticle/TextImageArticle';

import { attributes, react as BusinessContent } from '../../../../content/business.md';

type Props = {};

const textItems = [
  {
    title: "Residential",
    text: `Valuation & Advisory: Our Valuation & Advisory experts provide single and portfolio valuations, market appraisals and consultancy services across both commercial and residential sectors, with a focus on adding value to our reporting through our global insights and experience.`,
  },
  {
    title: "Residential",
    text: `Global Occupier Services: Within Global Occupier Services we offer consulting and transactional services to support occupiers of industrial, office, and research spaces to create value, address trends, and set themselves apart from their competitors.`,
  },
  {
    title: "Residential",
    text: `Capital Markets: As the largest privately-owned capital markets platform in the world, we provide best-in-class advice through a combination of unparalleled access to capital financing expertise, real estate market intelligence, thought leadership, and a personalised approach.`,
  },
  {
    title: 'Residential',
    text: `Our team of experienced residential sales professionals have been involved with some of the most prestigious property transactions in the world. We provide a seamless global advisory service to ensure that our clients have the most up-to-date advice and guidance in a fast-moving marketplace.`
  }
];

export default function BusinessAreasArticle({}: Props) {
  const [slideIdx, setSlideIdx] = React.useState(0);
  const { businessAreaArticleSectionName, businessAreaArticleTitle } = attributes;

  const handleNextSlide = useCallback(() => {
    setSlideIdx((prevIdx) =>
      prevIdx === textItems.length - 1 ? 0 : prevIdx + 1
    );
  }, []);

  const handlePrevSlide = useCallback(() => {
    setSlideIdx((prevIdx) =>
      prevIdx === 0 ? textItems.length - 1 : prevIdx - 1
    );
  }, []);

  return (
    <div className={styles.businessAreasArticleWrapper}>
      <TextImageArticle
        hasSectionHeading={false}
        hasArticleHeading={true}
        hasBackground={true}
        hasRectangleOnImgae={false}
        decreaseMarginTextImageContainer={true}
        className={styles.businessAreasDecreaseRightSpacing}
      >
        <TextImageArticle.Container
          reversedContentOnMobile={false}
          alignItemsCenter={true}
          className={styles.businessAreasArticleContainer}
        >
          <TextImageArticle.LeftSide className={styles.businessAreasLeftSide}>
            <TextImageArticle.TextHeader
              sectionName={businessAreaArticleSectionName}
              title={businessAreaArticleTitle}
            ></TextImageArticle.TextHeader>
            <TextImageArticle.Text className={styles.businessAreasDescription}>
              {textItems[slideIdx].text}
            </TextImageArticle.Text>
            <TextImageArticle.TextActions className={styles.businessAreasActions}>
              <SlideControlButtons
                onNextClick={handleNextSlide}
                onPrevClick={handlePrevSlide}
                currentItemIndex={slideIdx}
                itemsLength={textItems.length}
              />
          </TextImageArticle.TextActions>
          </TextImageArticle.LeftSide>
          <TextImageArticle.RightSide className={styles.businessAreasRightSide}>
            <div className={styles.residentialImageContainer}/>
          </TextImageArticle.RightSide>
        </TextImageArticle.Container>
      </TextImageArticle>
    </div>
  );
}
