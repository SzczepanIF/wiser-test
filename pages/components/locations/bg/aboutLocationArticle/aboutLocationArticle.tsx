import React from "react";
import TextImageArticle from '../../../../../components/Article/TextImageArticle/TextImageArticle';
import styles from "./aboutLocationArticle.module.css";
import { attributes, react as LocationsContent } from '../../../../../content/locations.md';

const locationTeams = [
  {
    id: '1',
    name: "Team name",
  },
  {
    id: '2',
    name: "Team name",
  },
  {
    id: '3',
    name: "Team name",
  },
  {
    id: '4',
    name: "Team name",
  },
  {
    id: '5',
    name: "Team name",
  },
  {
    id: '6',
    name: "Team name",
  },
];

export default function AboutLocationArticle() {
  const { aboutLocationArticleSectionName, aboutLocationArticleTitle, aboutLocationArticleDescription } = attributes;

  return (
    <TextImageArticle
      hasSectionHeading={false}
      hasArticleHeading={true}
      hasBackground={false}
      hasRectangleOnImgae={false}
      className={styles.aboutLocationArticleContainer}
    >
      <TextImageArticle.Container className={styles.aboutLocationContentContainer}>
        <TextImageArticle.LeftSide className={styles.aboutLocationArticleLefttSide}>
          <TextImageArticle.TextHeader
            sectionName="About Knight Frank"
            sectionEmphasizedText="Australia"
            title="Knight Frank Global Conference"
          />
          <TextImageArticle.Text className={styles.aboutLocationArticleDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est vestibulum eget ac cursus in in euismod purus. Pretium, sit volutpat mauris, rutrum eu viverra blandit scelerisque.
          </TextImageArticle.Text>
          <div className={styles.aboutLocationTeams}>
            {locationTeams.map((item, index) => (
              <p key={index} className={styles.aboutLocationTeamName}>{item.name}</p>
            ))}
          </div>
        </TextImageArticle.LeftSide>
        <TextImageArticle.RightSide>
          {/* TODO replace with shared component ImageWithIndicator */}
          <div className={styles.aboutLocationImageContainer}>
            <div className={styles.imageIndicator} />
          </div>
        </TextImageArticle.RightSide>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
