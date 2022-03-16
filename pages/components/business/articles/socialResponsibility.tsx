import React, { useCallback } from "react";
import ImageSlider from "../../../../components/ImageSlider/imageSlider";
import SlideControlButtons from "../../../../components/SlideControlButtons/slideControlButtons";
import styles from "./businessArticle.module.css";
import TextImageArticle from '../../../../components/Article/TextImageArticle/TextImageArticle';
import { attributes, react as BusinessContent } from '../../../../content/business.md';

type Props = {};

const textItems = [
  {
    title: "Protecting our Planet",
    text: `We strive to take care of our planet through conserving energy and eliminating waste across our offices. We’ve also made a global commitment to eliminating single-use plastics, and are always looking for new ways to be a greener, more sustainable business.`,
  },
  {
    title: "Supporting Wellbeing",
    text: `We aspire to be a place where all of our people can bring their whole selves to work. This means offering tailored and accessible support to people when they need it the most, as well as ensuring that employee wellbeing is at the heart of our decision-making, every day.`,
  },
  {
    title: "Responsible Partnership",
    text: `We believe that successful partnerships are defined by balance. In exchange for the ideas, energy and commitment of our people, we offer the support, encouragement and development opportunities that allow truly exceptional careers to be built, as well as the opportunity to share in the benefits of our growth.`,
  }
  // {
  //   title: "Community Outlook",
  //   text: `Enhancing people’s lives is a key part of our global purpose, and we know that the best way we can do this is through being deeply rooted in the communities in which we operate, doing business responsibly, and giving back wherever we can.`,
  // },
  // {
  //   title: "Valuing Diversity",
  //   text: `We recognise the strength in difference, and value diversity of background, thought, and outlook. It’s important to us that all of our people feel supported at work, that their achievements are recognised, and their progression encouraged.`,
  // },
  // {
  //   title: "Sustainable Choices",
  //   text: `We aim to set the standard for sustainable business practices in the property industry. To ensure that we live up to our global purpose, we strive to consider the impact of every decision we make on our people, our clients and customers, our communities, and our planet. `,
  // },
  // {
  //   title: "Consultative Leadership",
  //   text: `When it comes to taking big decisions about our firm, we know that collective insight is key to getting it right. That’s why we’ve embedded the principle of listening to ideas and feedback from everyone, at every level of our business.`,
  // },
  // {
  //   title: "Transparent Communication",
  //   text: `We know that the best ideas come when everyone is well-informed, and understands the bigger picture. That’s why we’re committed to practicing open and transparent leadership, communicating important news honestly and clearly.`,
  // },
  // {
  //   title: "Thoughtful Growth",
  //   text: `We pride ourselves on delivering excellence, and in order to be able to do this we need to continuously develop our capabilities to meet our clients’ and customers’ evolving needs. As a purpose-driven company, we work to ensure that this progress happens thoughtfully, in a way that aligns with our global purpose and values.`,
  // },
];

export default function SocialResponsibilityArticle({}: Props) {
  const [slideIdx, setSlideIdx] = React.useState(0);
  const { socialResponsibilitySectionName, socialResponsibilityTitle } = attributes;

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
      hasBackground={true}
      hasRectangleOnImgae={true}
      removeLeftRightSpacingOnMobile={true}
      removeBottomSpacingOnMobile={true}
      className={styles.socialResponsibilityArticleContainer}
    >
      <TextImageArticle.SectionHeader
        sectionName={socialResponsibilitySectionName}
        title={socialResponsibilityTitle}
      />
      <TextImageArticle.Container
        reversedContentOnMobile={true}
        alignItemsCenter={true}
        className={styles.socialResponsibilityContentContainer}
      >
        <TextImageArticle.LeftSide className={styles.socialResponsibilityLeftSide}>
          <TextImageArticle.TextHeader
            title={textItems[slideIdx].title}
          ></TextImageArticle.TextHeader>
          <TextImageArticle.Text className={styles.socialResponsibilityDescription}>
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
        <TextImageArticle.RightSide className={styles.socialResponsibilityRightSide}>
          <div className={styles.socialResponsibilitySlider}>
            <ImageSlider
              activeIndex={slideIdx}
              sidePosition="right"
              data={[
                {
                  src: "/business_social.jpg",
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
          </div>
        </TextImageArticle.RightSide>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
