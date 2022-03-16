import { PropsWithChildren } from "react";
import { TSubtitleColor } from "../../utils/types";
import style from "./title.module.css";

interface Props {
  emphasizedText?: string;
  className?: string;
  color?: TSubtitleColor;
  removeSubtitleTopSpacing?: boolean;
}

export function Subtitle({
  children,
  color,
  className,
  emphasizedText,
  removeSubtitleTopSpacing = false,
}: PropsWithChildren<Props>) {
  const subtitleStyles = `
    ${style.subtitle}
    ${color ? style[color] || "" : ""}
    ${removeSubtitleTopSpacing ? style.removeSubtitleTopSpacing : ""}`;
  const emphasizedTextStyles = `${style.subtitleEmphasizedText}`;

  return (
    <div className={`text-uppercase text-primary ${subtitleStyles} ${className || ""}`}>
      <span>{children}</span>
      {emphasizedText &&  
        <span className={emphasizedTextStyles}>&nbsp;{emphasizedText}</span>
      }
    </div>
  );
}

const SubtitleEmphasizedText = ({ children }: PropsWithChildren<{}>) => (
  <span className={`${style.subtitleEmphasizedText}`}>&nbsp;{children}</span>
);

Subtitle.Emphasized = SubtitleEmphasizedText;
