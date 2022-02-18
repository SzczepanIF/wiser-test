import React from "react";
import { TClassNameProp, TJobPosition } from "../../utils/types";
import JobPosition from "./jobPosition";
import styles from "./jobPosition.module.css";

type Props = {
  data: TJobPosition[];
} & TClassNameProp;

export default function JobPositionList({ data, className }: Props) {
  return (
    <div className={`${className || ""} ${styles.containerList} w-100`}>
      {data.map((item) => (
        <JobPosition
          key={item.id}
          location={item.location}
          title={item.title}
          country={item.country}
          URL={item.URL}
        />
      ))}
    </div>
  );
}
