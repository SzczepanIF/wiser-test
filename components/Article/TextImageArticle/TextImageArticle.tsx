import React, { PropsWithChildren } from "react";
import { TClassNameProp, TSubtitleColor } from "../../../utils/types";
import { Subtitle, Title } from "../../Title";
import styles from "./TextImageArticle.module.css";
import { ArticleContainerProps, TextImageArticleHeaderProps } from "../types";

type Props = {
  hasSectionHeading?: boolean;
  sectionColor?: boolean;
  hasArticleHeading?: boolean;
  hasBackground?: boolean;
  hasRectangleOnImgae?: boolean;
  removeLeftRightSpacingOnMobile?: boolean;
  removeBottomSpacingOnMobile?: boolean;
  decreaseMarginTextImageContainer?: boolean;
} & TClassNameProp;

const TextImageArticle = ({
  children,
  hasBackground,
  removeLeftRightSpacingOnMobile,
  removeBottomSpacingOnMobile = false,
  decreaseMarginTextImageContainer = false,
  className,
}: PropsWithChildren<Props>) => {
  const classes = `${styles.textImageContainer} 
  ${hasBackground ? styles.textImageContainerWithoutSideMargin : ""}
  ${removeLeftRightSpacingOnMobile ? styles.removeLeftRightSpacingOnMobile : ""}
  ${removeBottomSpacingOnMobile ? styles.removeBottomSpacingOnMobile : ""}
  ${decreaseMarginTextImageContainer ? styles.decreaseMarginTextImageContainer : ""}
  ${className || ""}`;

  return <div className={classes}>{children}</div>;
};

const ArticleSectionName = ({
  children,
  sectionEmphasizedText,
  sectionColor,
  removeSectionTopSpacing,
  className,
}: PropsWithChildren<TClassNameProp & {
  sectionEmphasizedText?: string;
  sectionColor?: TSubtitleColor;
  removeSectionTopSpacing?: boolean;
}>) => {
  return (
    <Subtitle
      className={`${styles.subtitle} ${className || ""}`}
      color={sectionColor}
      emphasizedText={sectionEmphasizedText}
      removeSubtitleTopSpacing={removeSectionTopSpacing}
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

type ArticleHeaderProps = TextImageArticleHeaderProps & TClassNameProp;

const ArticleSectionHeader = ({
  sectionName,
  sectionEmphasizedText,
  sectionColor,
  title,
  titleType,
}: TextImageArticleHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      {sectionName &&
        <ArticleSectionName sectionEmphasizedText={sectionEmphasizedText} sectionColor={sectionColor}>
          {sectionName}
        </ArticleSectionName>
      }
      <ArticleTitle titleType={titleType}>{title}</ArticleTitle>
    </div>
  );
};

const ArticleContainer = ({
  hasBackground,
  alignItemsCenter,
  reversedContentOnMobile,
  children,
  className,
}: PropsWithChildren<ArticleContainerProps & TClassNameProp>) => (
  <div className={`
    ${styles.articleImageContainer}
    ${className || ""}
    ${hasBackground ? styles.articleContainerBackground : ""}
    ${alignItemsCenter ? styles.articleImageContainerAlignCenter : ""}
    ${reversedContentOnMobile ? styles.articleContainerReversedContentOnMobile : ""} 
  `}>{children}</div>
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


const ArticleTextHeader = ({
  sectionName,
  sectionEmphasizedText,
  sectionColor,
  removeSectionTopSpacing,
  title,
  titleType,
  className,
}: ArticleHeaderProps) => {
  return (
    <div className={`${className || ""}`}>
      {sectionName &&
        <ArticleSectionName
          removeSectionTopSpacing={removeSectionTopSpacing}
          sectionEmphasizedText={sectionEmphasizedText}
          sectionColor={sectionColor}
        >
          {sectionName}
        </ArticleSectionName>
      }
      <ArticleTitle titleType={titleType} className={styles.articleTextHeader}>{title}</ArticleTitle>
    </div>
  );
};

const ArticleTextContent = ({
  children,
  className,
}: PropsWithChildren<Props>) => (
  <div className={`${styles.articleContent} ${className || ""}`}>{children}</div>
);

const ArticleTextActions = ({
  children,
  className,
}: PropsWithChildren<TClassNameProp>) => (
  <div className={`${styles.articleContentActions} ${className || ""}`}>
    {children}
  </div>
);

TextImageArticle.SectionHeader = ArticleSectionHeader;
TextImageArticle.Container = ArticleContainer;
TextImageArticle.LeftSide = ArticleLeft;
TextImageArticle.RightSide = ArticleRight;
TextImageArticle.TextHeader = ArticleTextHeader;
TextImageArticle.Text = ArticleTextContent;
TextImageArticle.TextActions = ArticleTextActions;

export default TextImageArticle;
