import React from "react";
import { TClassNameProp } from "../../utils/types";
import styles from "./ImageWithIndicator.module.css";

// colors
// light grey + red (#F6F6F6; #D0103A)
// white + red (#FFFFFF; #D0103A)
// dark green + white (#025051; #FFFFFF)
// red + light green (#D0103A; #EAF8F4)
// dark green + light green (#025051; #EAF8F4)

export enum IndicatorColorType {
  LIGHT_GREY_AND_RED = "light-grey-red",
  WHITE_AND_RED = "white-red",
  RED_AND_LIGHT_GREEN = "red-light-green",
  DARK_GREEN_AND_WHITE = "dark-green-white",
  DARK_GREEN_AND_LIGHT_GREEN = "dark-green-light-green",
}

export enum IndicatorVerticalPositionType {
  TOP = "indicator-top",
  MIDDLE = "indicator-middle",
  BOTTOM = "indicator-bottom",
}

export enum IndicatorHorizontalPositionType {
  LEFT = "indicator-left",
  RIGHT = "indicator-right"
}

type ImageWithIndicatorProps = {
  imageSrc: string;
  indicatorVerticalPosition: IndicatorVerticalPositionType;
  indicatorHorizontalPosition: IndicatorHorizontalPositionType;
  colorType: IndicatorColorType;
  isIndicatorReversed?: boolean;
} & TClassNameProp;

export default function ImageWithIndicator({
  imageSrc,
  indicatorVerticalPosition,
  indicatorHorizontalPosition,
  colorType,
  isIndicatorReversed,
  className,
}: ImageWithIndicatorProps) {
  const indicatorStyles = `
    ${styles[indicatorVerticalPosition]}
    ${styles[indicatorHorizontalPosition]}
    ${styles[colorType]}
    ${isIndicatorReversed ? styles.reversedIndicator : ""}
    ${styles.imageIndicator}`;

  return (
    <div
      className={`${styles.imageContainer} ${className || ""}}`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={indicatorStyles} />
    </div>
  );
}
