import { PropsWithChildren } from "react";

interface Props {
  align?: "top" | "end";
}
export function FooterSection({ children, align }: PropsWithChildren<Props>) {
  return (
    <section
      className={`d-flex flex-column flex-md-row ${
        align ? "align-items-" + align : ""
      }`}
    >
      {children}
    </section>
  );
}
