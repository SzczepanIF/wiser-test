import React from "react";
import { TSubtitleColor } from "../../utils/types";

export type TitleAndSubtitleProps = {
  title?: string | React.ReactNode;
  titleType?: "primary" | "secondary";
  subtitle?: string | React.ReactNode;
  subtitleEmphasizedText?: string;
  subtitleColor?: TSubtitleColor;
};


export type ArticleContainerProps = {
  hasBackground?: boolean;
  alignItemsCenter?: boolean;
  reversedContentOnMobile?: boolean;
}

export type TextImageArticleHeaderProps = {
  sectionName?: string;
  sectionEmphasizedText?: string;
  sectionColor?: TSubtitleColor;
  removeSectionTopSpacing?: boolean;
  title?: string | React.ReactNode;
  titleType?: "primary" | "secondary";
};