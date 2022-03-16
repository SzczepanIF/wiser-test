import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { TClassNameProp, TJobPosition } from "../../utils/types";
import Button from "../Button/button";
import styles from "./jobPosition.module.css";

type Props = Omit<TJobPosition, "id"> & TClassNameProp;

export default function JobPosition({
  title,
  location,
  country,
  URL,
  className,
}: Props) {
  return (
    <div
      className={`
      ${styles.container}
      ${className || ""} 
      d-flex flex-row justify-content-between align-items-center`}
    >
      <div className="d-flex flex-column align-items-start justify-content-center ml-1">
        <h2 className={styles.jobTitle}>{title}</h2>
        <p className={styles.jobLocation}>
          {location}
          {country && `, ${country}`}
        </p>
      </div>
      <div className="mr-1">
        <div className="d-md-none d-flex">
          <Button className={styles.btn} variant="primary" href={URL} icon={<ArrowUpRight />} />
        </div>
        <div className="d-md-flex d-none">
          <Button variant="primary" href={URL} iconRight={<ArrowUpRight />}>
            Find out more
          </Button>
        </div>
      </div>
    </div>
  );
}
