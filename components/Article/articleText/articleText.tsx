import React, { PropsWithChildren } from "react";
import { TClassNameProp, TSubtitleColor } from "../../../utils/types";
import { Subtitle, Title } from "../../Title";
import styles from "./articleText.module.css";
import { TitleAndSubtitleProps } from "../types";

type Props = {
  type?: "primary" | "secondary";
  variant?: "primary" | "secondary";
  hasBackground?: boolean;
  hasContentLeftSpacing?: boolean;
} & TClassNameProp;

const ArticleTextContainer = ({
  type = "secondary",
  children,
  hasBackground,
}: PropsWithChildren<Props>) => {
  const classes = `${styles.section} 
  ${type === "primary" ? styles.sectionPrimary : styles.sectionSecondary} 
  ${hasBackground ? styles.sectionBackground : ""}`;

  return <div className={classes}>{children}</div>;
};

const ArticleSubtitle = ({
  children,
  subtitleColor,
  subtitleEmphasizedText,
  className,
}: PropsWithChildren<
  {
    subtitleColor?: TSubtitleColor;
    subtitleEmphasizedText?: string;
  } & TClassNameProp
>) => {
  return (
    <Subtitle
      className={`${styles.subtitle} ${className || ""}`}
      color={subtitleColor}
      emphasizedText={subtitleEmphasizedText}
    >
      {children}
    </Subtitle>
  );
};

const ArticleTitle = ({
  children,
  className,
  titleType = "secondary",
}: PropsWithChildren<
  TClassNameProp & { titleType?: "primary" | "secondary" }
>) => {
  return (
    <Title className={`${className || ""}`} variant={titleType}>
      {children}
    </Title>
  );
};

type ArticleHeaderProps = TitleAndSubtitleProps & TClassNameProp;

const ArticleHeader = ({
  title,
  titleType,
  subtitle,
  subtitleColor,
  subtitleEmphasizedText,
  className,
}: ArticleHeaderProps) => {
  return (
    <div className={`${className || ""}`}>
      {subtitle &&
        <ArticleSubtitle
          subtitleColor={subtitleColor}
          subtitleEmphasizedText={subtitleEmphasizedText}
        >
          {subtitle}
        </ArticleSubtitle>
      }
      <ArticleTitle titleType={titleType}>{title}</ArticleTitle>
    </div>
  );
};

const ArticleContent = ({
  children,
  className,
  hasContentLeftSpacing = false,
}: PropsWithChildren<Props>) => (
  <div className={`${styles.content} ${className || ""} ${hasContentLeftSpacing ? styles.articleContentLeftSpacing : ""}`}>{children}</div>
);

ArticleTextContainer.Header = ArticleHeader;
ArticleTextContainer.Text = ArticleContent;

export default ArticleTextContainer;
