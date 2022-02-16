import { PropsWithChildren } from "react";
import { TSubtitleColor } from "../../utils/types";
import style from "./title.module.css";

interface Props {
  emphasizedText?: string;
  className?: string;
  color?: TSubtitleColor;
}

export function Subtitle({
  children,
  color,
  className,
  emphasizedText,
}: PropsWithChildren<Props>) {
  const subtitleStyles = `${style.subtitle} ${color ? style[color] || "" : ""}`;

  return (
    <div className={`text-uppercase ${subtitleStyles} ${className || ""}`}>
      <span>{children}</span>
    </div>
  );
}

const SubtitleEmphasizedText = ({ children }: PropsWithChildren<{}>) => (
  <span className={`${style.subtitleEmphasizedText}`}>&nbsp;{children}</span>
);

Subtitle.Emphasized = SubtitleEmphasizedText;
