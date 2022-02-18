import React from "react";
import Button from "../Button/button";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { zeroPad } from "../../utils/helpers";
import styles from "./slideControlButtons.module.css";

type Props = {
  onNextClick: () => void;
  onPrevClick: () => void;
  className?: string;
} & (
  | {
      currentItemIndex: number;
      itemsLength: number;
    }
  | { currentItemIndex?: never; itemsLength?: never }
);

export default function SlideControlButtons({
  onNextClick,
  onPrevClick,
  className,
  currentItemIndex,
  itemsLength,
}: Props) {
  return (
    <div
      className={`${styles.buttons} ${className} d-flex text-primary text-white align-items-center justify-content-center`}
    >
      <Button
        rounded
        size="sm"
        variant="primary-white"
        onClick={onPrevClick}
        icon={<ChevronLeft />}
      />
      <Button
        rounded
        size="sm"
        variant="primary-white"
        onClick={onNextClick}
        icon={<ChevronRight />}
      />
      <div>
        {currentItemIndex && itemsLength
          ? `${zeroPad(currentItemIndex, 2)} / ${zeroPad(itemsLength, 2)}`
          : null}
      </div>
    </div>
  );
}
