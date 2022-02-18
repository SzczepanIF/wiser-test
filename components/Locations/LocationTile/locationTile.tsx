import React from "react";
import { Title } from "../../Title";
import styles from "./locationTile.module.css";
import { TClassNameProp, TVacancyByCountry } from "../../../utils/types";
import { zeroPad } from "../../../utils/helpers";
import Button from "../../Button/button";
import { ArrowUpRight } from "react-bootstrap-icons";

type Props = TClassNameProp & TVacancyByCountry;

const LocationTile = ({ className, country, vacancies, URL }: Props) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={`${styles.textWrapper} d-flex flex-column`}>
        <Title className={styles.country}>{country}</Title>
        <span className="text-primary text-uppercase">
          <span className={styles.vacancyNumber}>{zeroPad(vacancies, 2)}</span>
          <span className={styles.vacancyText}> Vacancies</span>
        </span>
      </div>
      <Button
        className={styles.vacancyBtn}
        variant="primary"
        icon={<ArrowUpRight />}
        href={URL}
      />
      <div className={styles.decorationWrapper}>
        <div className={`${styles.decoration} text-primary text-uppercase`}>
          {country}
        </div>
      </div>
    </div>
  );
};

export default LocationTile;
