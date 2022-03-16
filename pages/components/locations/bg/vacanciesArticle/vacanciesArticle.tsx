import React from "react";
import TextImageArticle from '../../../../../components/Article/TextImageArticle/TextImageArticle';
import styles from "./vacanciesArticle.module.css";
import { attributes, react as LocationsContent } from '../../../../../content/locations.md';
import JobPositionList from "../../../../../components/JobPosition/jobPositionList";

export default function VacanciesArticle() {
  const { vacanciesArticleSectionName, vacanciesArticleTitle, vacanciesArticleDescription } = attributes;

  return (
    <TextImageArticle
      hasSectionHeading={false}
      hasArticleHeading={true}
      hasBackground={true}
      hasRectangleOnImgae={false}
      className={styles.vacanciesArticleContainer}
    >
      <TextImageArticle.Container
        className={styles.vacanciesContentContainer}
      >
        <div className={styles.vacanciesArticleLeftSide}>
          <TextImageArticle.TextHeader
            sectionName="Vacancies"
            title="Explore possibilities in australia"
            removeSectionTopSpacing={true}
          />
          <TextImageArticle.Text className={styles.vacanciesDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum pretium tempus sed. Eget quis est habitant in.
          </TextImageArticle.Text>
          <div className={styles.vacanciesRedirection}>
            See all vacancies
            <div className={styles.vacanciesRedirectionIcon}></div>
          </div>
        </div>
        <div className={styles.vacanciesArticleRightSide}>
          <JobPositionList
            data={[
              {
                id: "123-123",
                title: "Software developer",
                location: "London",
                country: "United Kingdon",
                URL: "/business",
              },
              {
                id: "123-1234",
                title: "Software developer 2",
                location: "Warsaw",
                country: "Poland",
                URL: "/business",
              },
              {
                id: "1234-1234",
                title: "Software developer 3",
                location: "Vancouver",
                country: "Canada",
                URL: "/location",
              },
            ]}
          />
        </div>
      </TextImageArticle.Container>
    </TextImageArticle>
  );
}
