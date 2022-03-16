import React, { PropsWithChildren } from "react";
import { TClassNameProp, TSubtitleColor } from "../../utils/types";
import { Subtitle, Title } from "../Title";
import styles from "./Header.module.css";

type Props = {
  hasBottomBackgroundBlock?: boolean;
} & TClassNameProp;

const Header = ({
  children,
  hasBottomBackgroundBlock,
  className,
}: PropsWithChildren<Props>) => {
  const classes = `
    ${styles.headerContainer}
    ${hasBottomBackgroundBlock ? styles.headerContainerWithBackgroundColor : ""}
    ${className || ""}`;

  return (
    <>
      <div className={classes}>
        {children}
      </div>
      {hasBottomBackgroundBlock &&
        <div className={styles.headerBottomBackgroundBlock}></div>
      }
    </>
  )
};

const HeaderSubtitle = ({
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
      className={`${styles.headerSubtitle} ${className || ""}`}
      color={subtitleColor}
      emphasizedText={subtitleEmphasizedText}
    >
      {children}
    </Subtitle>
  );
};

const HeaderTitle = ({
  children,
  className,
}: PropsWithChildren<
  TClassNameProp>) => {
  return (
    <Title variant="primary" className={` ${styles.headerTitle} ${className || ""}`}>
      {children}
    </Title>
  );
};

type TitleAndSubtitleProps = {
  title?: string | React.ReactNode;
  isTitleNarrow?: boolean;
  subtitle?: string | React.ReactNode;
  subtitleEmphasizedText?: string;
}
type ArticleHeaderProps = TitleAndSubtitleProps & TClassNameProp;

const HeaderContent = ({
  subtitle,
  subtitleEmphasizedText,
  title,
  isTitleNarrow = true,
  className,
}: ArticleHeaderProps) => {
  return (
    <div className={`${className || ""}`}>
      {subtitle &&
        <HeaderSubtitle
          subtitleEmphasizedText={subtitleEmphasizedText}
        >
          {subtitle}
        </HeaderSubtitle>
      }
      <HeaderTitle className={`${isTitleNarrow ? styles.narrowHeaderTitle : ""}`}>{title}</HeaderTitle>
    </div>
  );
};

const HeaderDescription = ({
  isBoldText = true,
  hasSpacing = false,
  children,
  className,
}: PropsWithChildren<{
  isBoldText?: boolean;
  hasSpacing?: boolean;
} & TClassNameProp>) => {
  const headerDescriptionStyles = `
    ${styles.headerDescription}
    ${isBoldText ? styles.headerDescriptionBold : ""}
    ${hasSpacing ? styles.headerDescriptionSpacing : ""}
    ${className || ""}`;

  return <div className={headerDescriptionStyles}>{children}</div>

};


const HeaderLeftSide = ({
  children,
  className,
}: PropsWithChildren<TClassNameProp>) => (
  <div className={`${styles.headerLeft} ${className || ""}`}>
    {children}
  </div>
);

const HeaderRightSide = ({
  children,
  className,
}: PropsWithChildren<TClassNameProp>) => (
  <div className={`${styles.headerRight} ${className || ""}`}>
    {children}
  </div>
);

const HeaderActions = ({
  children,
  className,
}: PropsWithChildren<TClassNameProp>) => (
  <div className={`${styles.headerActions} ${className || ""}`}>
    {children}
  </div>
);


Header.HeaderContent = HeaderContent;
Header.Description = HeaderDescription;
Header.LeftSide = HeaderLeftSide;
Header.RighttSide = HeaderRightSide;
Header.Actions = HeaderActions;

export default Header;
