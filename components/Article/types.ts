import React from "react";
import { TSubtitleColor } from "../../utils/types";

export type TitleAndSubtitleProps = {
  title?: string | React.ReactNode;
  titleType?: "primary" | "secondary";
  subtitle?: string | React.ReactNode;
  subtitleEmphasizedText?: string;
  subtitleColor?: TSubtitleColor;
};
