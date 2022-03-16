import React, { ReactElement, ReactNode, useMemo } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import { TClassNameProp } from "../../utils/types";

type TButtonVariant =
  | "primary" //  red button
  | "secondary" // grey outlined button
  | "primary-white" // white button
  | "secondary-white" // white outlined button
  | "flat" // flat button
  | "flat-white" // white flat button;
  | "grey"; // grey button

type Props = React.ComponentProps<typeof BootstrapButton> & {
  variant?: TButtonVariant;
  onClick?: () => void;
  rounded?: boolean;
  size?: "sm" | "lg";
} & (TButtonWithIcon | TIconButton) &
  TClassNameProp;

export default function Button({
  variant = "primary",
  iconLeft,
  iconRight,
  icon,
  children,
  rounded,
  size,
  onClick,
  className,
  ...props
}: Props) {
  const classNames = useMemo(() => {
    const classesByVariant = getClassNameByButtonVariant(variant);
    const classes = rounded
      ? `${className || ""} ${classesByVariant} rounded-circle`
      : classesByVariant;

    if (icon) {
      return `${className || ""} text-bold btn-icon btn-single-icon ${classes}`;
    } else {
      return classes;
    }
  }, [variant, rounded, className, icon]);

  const textIconClassName = iconLeft
    ? "btn-text-icon-left"
    : iconRight
    ? "btn-text-icon-right"
    : "";

  const btnSize = variant === "flat" || variant === "flat-white" ? "sm" : size;

  return (
    <BootstrapButton
      type="button"
      onClick={onClick}
      className={`${classNames} d-inline-flex justify-content-center align-items-center`}
      size={btnSize}
      {...props}
    >
      {icon ? (
        icon
      ) : (
        <>
          {iconLeft && (
            <span className="btn-icon btn-icon-left text-bold">{iconLeft}</span>
          )}
          <span
            className={`btn-text text-uppercase text-bold ${textIconClassName}`}
          >
            {children}
          </span>
          {iconRight && (
            <span className="btn-icon btn-icon-right text-bold">
              {iconRight}
            </span>
          )}
        </>
      )}
    </BootstrapButton>
  );
}

type TButtonWithIcon = {
  children: ReactNode;
  icon?: never;
  iconRight?: ReactElement;
  iconLeft?: ReactElement;
};

type TIconButton = {
  icon?: ReactElement;
  children?: never;
  iconRight?: never;
  iconLeft?: never;
};

function getClassNameByButtonVariant(variant: TButtonVariant) {
  const baseBtnName = "btn rounded-0 shadow-none";
  const primaryBtnClassName = `${baseBtnName} btn-${variant} btn-primary border-0`;
  const secondaryBtnClassName = `${baseBtnName} btn-${variant}`;
  const flatBtnClassName = `${baseBtnName} btn-${variant} border-0 bg-transparent`;

  switch (variant) {
    case "primary":
    case "primary-white":
      return primaryBtnClassName;
    case "secondary":
    case "secondary-white":
      return secondaryBtnClassName;
    case "flat":
    case "flat-white":
      return flatBtnClassName;
    default:
      return primaryBtnClassName;
  }
}
