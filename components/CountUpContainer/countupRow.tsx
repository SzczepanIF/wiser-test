import React, { PropsWithChildren } from "react";
import styles from "./countupContainer.module.css";


export default function CountUpRow({ children }: PropsWithChildren<{}>) {
  return (
    <div className={`${styles.row} d-flex w-100 justify-content-around align-items-start`}>
      {children}
    </div>
  );
}
