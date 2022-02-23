import React, { PropsWithChildren } from "react";
import Button from "../Button/button";
import { Title } from "../Title";
import styles from "./realisePossibilities.module.css";
import { attributes, react as HomeContent } from '../../content/home.md';

interface Props {}
  const { whyKnightFrankArticleTitleLine1, whyKnightFrankArticleTitleLine2, whyKnightFrankArticleDescription } = attributes;
export default function RealisePosibilities({
  children,
}: PropsWithChildren<Props>) {
  return (
    <section
      className={`d-flex flex-column justify-content-center align-items-center w-90 my-2`}
    >
      <div className={`${styles.vacancies}`} />
      <Title className={`${styles.title}`}>{whyKnightFrankArticleTitleLine1}</Title>
      <Title className={`${styles.title}`}>whyKnightFrankArticleTitleLine2</Title>
      <div className={`${styles.textContent} text-center`}>{children}</div>
      <div>
        <Button href="/vacancies">See vacancies</Button>
      </div>
    </section>
  );
}
