import React, { useCallback } from "react";
import { Article } from "../../../../components/Article";
import ImageSlider from "../../../../components/ImageSlider/imageSlider";
import SlideControlButtons from "../../../../components/SlideControlButtons/slideControlButtons";
import styles from "./businessArticle.module.css";

type Props = {};

const textItems = [
  {
    title: "Title1",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fuga
quia minus necessitatibus repellendus consequuntur, vel veniam eos
atque, at maxime. Ipsam, reiciendis sunt! Illum autem ducimus, soluta
delectus doloremque nemo tempora quod eum provident facere optio
magnam ratione animi unde eius nisi?`,
  },
  {
    title: "Title2",
    text: `Nostrum ut fugiat, soluta
mollitia reiciendis deleniti error non perferendis ullam molestiae
quos modi corporis, aspernatur ab! Modi omnis tempora asperiores
dolores labore cupiditate magnam minima autem?`,
  },
  {
    title: "Title3",
    text: `Adafsd Nostrum ut fugiat, solut asdfasdfasdf asdfasf
mollitia reiciendis deleniti error non perferendis ullam molestiae
quos modi corporis, aspernatur ab! Modi omnis tempora asperiores
dolores labore cupiditate magnam minima autem?`,
  },
];

export default function SocialResponsibilityArticle({}: Props) {
  const [slideIdx, setSlideIdx] = React.useState(0);

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
    <Article
      title={
        <>
          <span>Environmental,</span>
          <br />
          <span> social &amp; governance</span>
        </>
      }
      subtitle="Social responsibility"
      backgroundClassName={styles.locationsContainer}
      textOnWhiteBackground
    >
      <Article.TextContainer>
        <Article.Header
          title={textItems[slideIdx].title}
          subtitle="Locations"
        />
        <Article.Text>{textItems[slideIdx].text}</Article.Text>
        <Article.Actions>
          <SlideControlButtons
            onNextClick={handleNextSlide}
            onPrevClick={handlePrevSlide}
          />
        </Article.Actions>
      </Article.TextContainer>
      <Article.Right className={styles.rightContainer}>
        <ImageSlider
          activeIndex={slideIdx}
          data={[
            {
              src: "/svg/whyKnightFrankMain.svg",
              alt: "random photo",
            },
            {
              src: "/svg/businessMain.svg",
              alt: "business Photo",
            },
            {
              src: "/svg/cultureMain.svg",
              alt: "culture Photo",
            },
          ]}
        />
      </Article.Right>
    </Article>
  );
}
