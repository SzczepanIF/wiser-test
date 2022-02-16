import { PropsWithChildren } from "react";
import style from "./title.module.css";
interface Props {
  variant?: "primary" | "secondary";
  className?: string;
}

export function Title({
  variant = "secondary",
  className,
  children,
}: PropsWithChildren<Props>) {
  if (variant === "primary") {
    return (
      <h1 className={`${style.titlePrimary} ${className || ''}`}>{children}</h1>
    );
  }

  return (
    <h2 className={`${style.titleSecondary} text-uppercase ${className || 'r'}`}>
      {children}
    </h2>
  );
}
