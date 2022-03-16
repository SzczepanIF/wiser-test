import React, { useCallback } from "react";
import SlideControlButtons from "../../../../../components/SlideControlButtons/slideControlButtons";
import styles from "./locationSliderArticle.module.css";
import TextImageArticle from '../../../../../components/Article/TextImageArticle/TextImageArticle';

import { attributes, react as LocationsContent } from '../../../../../content/locations.md';

type Props = {};

const textItems = [
  {
    title: "Title 1",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui sed vulputate in lacus velit non mattis. Nullam quam facilisis mus auctor sed. Eu risus elit condimentum non volutpat sed. Amet euismod odio nibh amet aliquam, libero congue. Blandit gravida lectus nec nunc urna.`,
  },
  {
    title: "Title 2",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui sed vulputate in lacus velit non mattis. Nullam quam facilisis mus auctor sed. Eu risus elit condimentum non volutpat sed. Amet euismod odio nibh amet aliquam, libero congue. Blandit gravida lectus nec nunc urna.`,
  },
  {
    title: "Title 3",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui sed vulputate in lacus velit non mattis. Nullam quam facilisis mus auctor sed. Eu risus elit condimentum non volutpat sed. Amet euismod odio nibh amet aliquam, libero congue. Blandit gravida lectus nec nunc urna.`,
  },
  {
    title: 'Title 4',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui sed vulputate in lacus velit non mattis. Nullam quam facilisis mus auctor sed. Eu risus elit condimentum non volutpat sed. Amet euismod odio nibh amet aliquam, libero congue. Blandit gravida lectus nec nunc urna.`,
  }
];

export default function LocationSliderArticle({}: Props) {
  const [slideIdx, setSlideIdx] = React.useState(0);
  const { LocationSliderArticleSectionName, locationSliderArticleTitle } = attributes;

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
    <TextImageArticle
      hasSectionHeading={true}
      hasArticleHeading={true}
      hasRectangleOnImgae={false}
      className={styles.locationSliderArticleContainer}
    >
      <TextImageArticle.SectionHeader
        sectionName="Slider title"
        title="People, place, planet"
      />
      <TextImageArticle.Container
        alignItemsCenter={true}
        className={styles.locationSliderContentContainer}
      >
        <TextImageArticle.LeftSide className={styles.locationSliderLeftSide}>
          <TextImageArticle.TextHeader
            title={textItems[slideIdx].title}
          ></TextImageArticle.TextHeader>
          <TextImageArticle.Text className={styles.locationSliderDescription}>
            {textItems[slideIdx].text}
          </TextImageArticle.Text>
          <TextImageArticle.TextActions className={styles.locationSliderActions}>
            <SlideControlButtons
              onNextClick={handleNextSlide}
              onPrevClick={handlePrevSlide}
              currentItemIndex={slideIdx}
              itemsLength={textItems.length}
            />
        </TextImageArticle.TextActions>
        </TextImageArticle.LeftSide>
        <TextImageArticle.RightSide className={styles.locationSliderRightSide}>
          <div className={styles.locationSliderImageContainer}/>
          <div className={styles.globeBackgroundImage}/>
        </TextImageArticle.RightSide>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
