import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./article.module.css";
import { Subtitle, Title } from "../Title";
import { TClassNameProp, TSubtitleColor } from "../../utils/types";
import { TitleAndSubtitleProps } from "./types";
import ArticleTextContainer from "./articleText";

type Props = {
  variant?: "primary" | "secondary";
  textPosition?: "left" | "right";
  backgroundClassName?: string;
  textOnWhiteBackground?: boolean;
} & TClassNameProp &
  TitleAndSubtitleProps;

function Article({
  variant = "secondary",
  title,
  subtitle,
  subtitleColor,
  subtitleEmphasizedText,
  children,
  textPosition = "left",
  className,
  backgroundClassName,
}: PropsWithChildren<Props>) {
  const mainStyles = `${styles.container} 
  ${variant === "primary" ? styles.primary : ""}
  ${className || ""}`;

  const containerStyles = `${styles.bgContainer} 
  ${backgroundClassName} 
  ${textPosition === "right" ? styles.rightContainer : ""}
  d-flex w-100 h-100 align-items-center`;

  return (
    <div className={mainStyles}>
      <ArticleTitleContainer
        title={title}
        titleType={variant}
        subtitle={subtitle}
        subtitleColor={subtitleColor}
        subtitleEmphasizedText={subtitleEmphasizedText}
        rightAlign={textPosition === "right"}
      />
      <div className={containerStyles}>{children}</div>
    </div>
  );
}

const ArticleActions = ({
  children,
  className,
}: PropsWithChildren<TClassNameProp>) => (
  <div className={`${styles.articleActions} ${className || ""}`}>
    {children}
  </div>
);

const ArticleRight = ({
  children,
  className,
}: PropsWithChildren<TClassNameProp>) => (
  <div className={`${styles.articleRight} ${className || ""}`}>{children}</div>
);

const ArticleLeft = ({
  children,
  className,
}: PropsWithChildren<TClassNameProp>) => (
  <div className={`${styles.articleLeft} ${className || ""}`}>{children}</div>
);

Article.TextContainer = ArticleTextContainer;
Article.Header = ArticleTextContainer.Header;
Article.Text = ArticleTextContainer.Text;
Article.Actions = ArticleActions;
Article.Right = ArticleRight;
Article.Left = ArticleLeft;

export default Article;

function ArticleTitleContainer({
  title,
  titleType,
  subtitle,
  subtitleColor,
  rightAlign,
}: TitleAndSubtitleProps & { rightAlign?: boolean }) {
  const titleItem = title ? <Title variant={titleType}>{title}</Title> : null;

  const subtitleItem = subtitle ? (
    <Subtitle className={`${styles.subtitle}`} color={subtitleColor}>
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
