import React from "react";
import Button from "../Button/button";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { zeroPad } from "../../utils/helpers";
import styles from "./slideControlButtons.module.css";

type Props = {
  onNextClick: () => void;
  onPrevClick: () => void;
  currentItemIndex?: number;
  itemsLength?: number;
  className?: string;
  whiteCounter?: boolean;
} & (
  | {
      currentItemIndex: number;
      itemsLength: number;
      whiteCounter?: boolean;
    }
  | {
      currentItemIndex?: never;
      itemsLength?: never;
      whiteCounter?: boolean
    }
);

export default function SlideControlButtons({
  onNextClick,
  onPrevClick,
  className,
  currentItemIndex,
  itemsLength,
  whiteCounter = false,
}: Props) {
  const showSliderCounter = !!(currentItemIndex !== undefined && itemsLength);

  return (
    <div
      className={`${styles.buttons} ${className} d-flex text-primary text-white align-items-center justify-content-center`}
    >
      <Button
        rounded
        size="sm"
        onClick={onPrevClick}
        icon={<ChevronLeft />}
        className={styles.buttonBgColor}
      />
      <Button
        rounded
        size="sm"
        onClick={onNextClick}
        icon={<ChevronRight />}
        className={styles.buttonBgColor}
      />
      {showSliderCounter &&
        <div className={`${styles.sliderCounter} ${whiteCounter ? styles.whiteCounter : ""}`}>
          {zeroPad(currentItemIndex + 1, 2)}
          <span className={`${styles.counterDivider} ${whiteCounter ? styles.whiteCounter : ""}`}>
            /
          </span>
          {zeroPad(itemsLength, 2)}
        </div>
      }
    </div>
  );
}
