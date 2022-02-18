import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./article.module.css";
import { TClassNameProp } from "../../utils/types";
import { TitleAndSubtitleProps } from "./types";
import ArticleTextContainer from "./articleText/articleText";
import { ArticleTitleContainer } from "./articleText/articleTitle";

type Props = {
  variant?: "primary" | "secondary";
  textPosition?: "left" | "right";
  backgroundClassName?: string;
  textOnWhiteBackground?: boolean;
} & TClassNameProp &
  TitleAndSubtitleProps;

export function Article({
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
  ${className || ""}
  d-flex flex-column`;

  const containerStyles = `${styles.bgContainer} 
  ${backgroundClassName || ""} 
  ${textPosition === "right" ? styles.rightContainer : ""}
  ${variant === "primary" ? styles.primary : ""}
  d-flex  align-items-center`;

  const innerContainer = (
    <>
      <ArticleTitleContainer
        title={title}
        titleType={variant}
        subtitle={subtitle}
        subtitleColor={subtitleColor}
        subtitleEmphasizedText={subtitleEmphasizedText}
        rightAlign={textPosition === "right"}
      />
      <div className={containerStyles}>{children}</div>
    </>
  );

  return <div className={mainStyles}>{innerContainer}</div>;
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
  <div className={`${styles.articleRight} ${className || ""} w-100`}>
    {children}
  </div>
);

const ArticleLeft = ({
  children,
  className,
}: PropsWithChildren<TClassNameProp>) => (
  <div className={`${styles.articleLeft} ${className || ""} w-100`}>
    {children}
  </div>
);

Article.TextContainer = ArticleTextContainer;
Article.Header = ArticleTextContainer.Header;
Article.Text = ArticleTextContainer.Text;
Article.Actions = ArticleActions;
Article.Right = ArticleRight;
Article.Left = ArticleLeft;
