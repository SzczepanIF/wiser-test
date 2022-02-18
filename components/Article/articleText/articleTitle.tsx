import { Subtitle, Title } from "../../Title";
import { TitleAndSubtitleProps } from "../types";
import styles from "./articleText.module.css";

export function ArticleTitleContainer({
  title,
  titleType,
  subtitle,
  subtitleEmphasizedText,
  subtitleColor,
  rightAlign,
}: TitleAndSubtitleProps & { rightAlign?: boolean }) {
  const titleItem = title ? <Title variant={titleType}>{title}</Title> : null;

  const subtitleItem = subtitle ? (
    <Subtitle
      className={`${styles.subtitle}`}
      color={subtitleColor}
      emphasizedText={subtitleEmphasizedText}
    >
      {subtitle}
    </Subtitle>
  ) : null;

  return title || subtitle ? (
    <div
      className={`${styles.titleContainer} ${
        rightAlign ? "align-items-end" : ""
      } d-flex flex-column w-100`}
    >
      {subtitleItem}
      {titleItem}
    </div>
  ) : null;
}
