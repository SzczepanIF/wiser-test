import React from "react";
import Button from "../../../../../components/Button/button";
import styles from "./locationsArticle.module.css";
import { attributes} from '/content/home.md';
import Image from "next/image";
import SectionSeparator from "../../../../../components/SectionSeparator/SectionSeparator";

export default function LocationsArticle() {
  const { locationArticleTitle, locationArticleDescription } = attributes;

  return (
      <div className={styles.locationGlob__container}>
        <div className={styles.locationGlob__contentContainer}>
          <SectionSeparator title={'LOCATIONS'} />
          <h1 className={styles.locationGlob__title}>{locationArticleTitle}</h1>
          <p className={styles.locationGlob__description}>{locationArticleDescription}</p>
          {/*REMOVE buttonContainer after button refactor*/}
          <div className={styles.locationGlob__buttonContainer}>
            <Button variant="secondary">Explore Locations</Button>
          </div>
        </div>
        <span className={styles.locationGlob__globContainer}>
                <Image src={'/svg/globe.svg'} layout="responsive" width="100" height="100" objectPosition="100%" objectFit="cover" quality={100}/>
            </span>
      </div>
  )
}
