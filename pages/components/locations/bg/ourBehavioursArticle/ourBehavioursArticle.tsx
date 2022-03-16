import React from "react";
import styles from "./ourBehavioursArticle.module.css";
import TextImageArticle from '../../../../../components/Article/TextImageArticle/TextImageArticle';

// TODO move to LocationsBigContent
const cardItems = [
  {
    id: '1',
    number: '01',
    text: 'We listen, and then act'
  },
  {
    id: '2',
    number: '02',
    text: 'We openly collaborate'
  },
  {
    id: '3',
    number: '03',
    text: 'We think big, and make it happen'
  },
  {
    id: '4',
    number: '04',
    text: 'We are impeccable in everything we do'
  },
];

export default function OurBehavioursArticle() {
  return (
    <TextImageArticle
      hasSectionHeading={false}
      hasArticleHeading={true}
      hasBackground={true}
      hasRectangleOnImgae={false}
      className={styles.ourBehavioursArticleContainer}
    >

      <TextImageArticle.Container
        reversedContentOnMobile={true}
        className={styles.ourBehavioursContentContainer}
      >
        <TextImageArticle.LeftSide className={styles.ourBehavioursLefttSide}>
          <TextImageArticle.TextHeader
            sectionName="Our Behaviours"
            title="We look for different"
          />
          <TextImageArticle.Text className={styles.ourBehavioursDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum odio dolor malesuada nunc ultrices. Pharetra habitant pellentesque rutrum sem.
          </TextImageArticle.Text>
          <div className={styles.ourBehavioursRedirection}>
            see global values
            <div className={styles.ourBehavioursRedirectionIcon}></div>
          </div>
        </TextImageArticle.LeftSide>
        <TextImageArticle.RightSide className={styles.ourBehavioursRighttSide}>
          {cardItems.map((item, index) => (
            <div key={index} className={styles.ourBehavioursCard}>
              <div className={styles.ourBehavioursCardNumber}>{item.number}</div>
              <div className={styles.ourBehavioursCardText}>{item.text}</div>
            </div>
          ))}
        </TextImageArticle.RightSide>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
