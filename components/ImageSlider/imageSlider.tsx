import React from "react";
import { TClassNameProp } from "../../utils/types";
import styles from "./imageSlider.module.css";
import { Carousel } from "react-bootstrap";

type ImageData = {
  src: string;
  alt?: string;
};

type Props = {
  data: ImageData[];
  variant?: "red" | "green";
  sidePosition?: "left" | "right";
  verticalPosition?: "top" | "bottom" | "center";
  activeIndex?: number;
} & TClassNameProp;

export default function ImageSlider({
  data,
  variant = "red",
  sidePosition = "left",
  verticalPosition = "top",
  activeIndex,
}: Props) {
  return (
    <div className={styles.container}>
      <Carousel
        className={styles.slider}
        controls={false}
        interval={activeIndex ? null : 5000}
        indicators={false}
        activeIndex={activeIndex}
      >
        {data.map((item) => (
          <Carousel.Item key={item.src}>
            <img
              width={100}
              height={100}
              src={item.src}
              alt={item.alt || "Slider image"}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        className={`
            ${styles.sliderIndicator}
            ${styles[variant]}
            ${styles[sidePosition]}
            ${styles[verticalPosition]}
        `}
      />
    </div>
  );
}