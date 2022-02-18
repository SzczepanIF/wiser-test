import React, { PropsWithChildren } from "react";
import useWindowDimensions from "../../../utils/hooks/useDimensions";
import { TVacancyByCountry } from "../../../utils/types";
import LocationTile from "../LocationTile/locationTile";
import styles from "./locationList.module.css";

type Props = {
  data: TVacancyByCountry[];
};

const BIG_TILE_WIDTH = 200;

export default function LocationList({ data }: PropsWithChildren<Props>) {
  const { width } = useWindowDimensions();

  const classes = `${styles.container} 
    ${width >= BIG_TILE_WIDTH * data.length ? styles.containerWide : ""}`;
  return (
    <div className={classes}>
      {data.map((item) => {
        const { country, vacancies, URL } = item;
        return (
          <LocationTile
            key={country}
            country={country}
            vacancies={vacancies}
            URL={URL}
          />
        );
      })}
    </div>
  );
}
