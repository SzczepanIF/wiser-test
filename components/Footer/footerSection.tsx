import { PropsWithChildren } from "react";

interface Props {
  align?: "top" | "end";
  className?: string;
 }
export function FooterSection({ children, align, className = '' }: PropsWithChildren<Props>) {
  return (
    <section
      className={`d-flex flex-column flex-md-row ${
        align ? "align-items-" + align : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
