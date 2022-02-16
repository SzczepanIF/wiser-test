import React, { PropsWithChildren } from "react";
import Button from "../Button/button";
import { Title } from "../Title";
import styles from "./realisePossibilities.module.css";

interface Props {}

export default function RealisePosibilities({
  children,
}: PropsWithChildren<Props>) {
  return (
    <section
      className={`d-flex flex-column justify-content-center align-items-center w-90 my-2`}
    >
      <div className={`${styles.vacancies}`} />
      <Title className={`${styles.title}`}>Realise your</Title>
      <Title className={`${styles.title}`}>possibilities with us</Title>
      <div className={`${styles.textContent} text-center`}>{children}</div>
      <div>
        <Button href="/vacancies">See vacancies</Button>
      </div>
    </section>
  );
}
