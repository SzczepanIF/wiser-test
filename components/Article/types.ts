import { TSubtitleColor } from "../../utils/types";

export type TitleAndSubtitleProps = {
  title?: string;
  titleType?: "primary" | "secondary";
  subtitle?: string;
  subtitleEmphasizedText?: string;
  subtitleColor?: TSubtitleColor;
};
