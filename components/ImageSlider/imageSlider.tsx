import React from "react";
import { TClassNameProp } from "../../utils/types";
import Image from "next/image";
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
  showIndicator?: boolean;
} & TClassNameProp;

export default function ImageSlider({
  data,
  variant = "red",
  sidePosition = "left",
  verticalPosition = "top",
  activeIndex,
  showIndicator = true,
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
            <Image
              width={100}
              height={100}
              src={item.src}
              alt={item.alt || "Slider image"}
              layout="responsive"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {showIndicator &&
        <div
          className={`
              ${styles.sliderIndicator} 
              ${styles[variant]} 
              ${styles[sidePosition]} 
              ${styles[verticalPosition]}
          `}
        />
      }
    </div>
  );
}
