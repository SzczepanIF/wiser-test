import React from "react";
import { TRegionalVacancies } from "../../../utils/types";
import { Title } from "../../Title";
import LocationList from "../LocationList/locationList";
import styles from "./locationContainer.module.css";

type Props = {
  data: TRegionalVacancies;
};

export default function LocationContainer({ data }: Props) {
  const { teritorries, name, officesNumber, employeesNumber } = data;
  const territoriesLength = teritorries.length;

  return (
    <div className={`${styles.container} d-flex flex-column`}>
      <div className={`${styles.textContainer} d-flex flex-column w-100`}>
        <Title>{name}</Title>
        <span className="text-primary text-uppercase">
          {employeesNumber} People
          <Divider />
          {territoriesLength} territories
          <Divider />
          {officesNumber} offices
        </span>
      </div>
      <div className={styles.locationContainer}>
        <LocationList data={teritorries} />
      </div>
    </div>
  );
}

function Divider() {
  return <span className={styles.divider}> - </span>;
}
