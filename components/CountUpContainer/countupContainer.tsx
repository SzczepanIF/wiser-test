import React from "react";
import { Container } from "react-bootstrap";
import CountUpItem from "./countUpItem";
import CountUpRow from "./countupRow";
import styles from "./countupContainer.module.css";
import { TClassNameProp } from "../../utils/types";

export enum ColorType {
  RED = "red",
  DARK_GREEN = "dark-green",
}

export enum CounterSize {
  LARGE = 'large',
  MEDIUM = 'medium',
}

type Props = {
  data: {
    people?: number;
    territories?: number;
    offices?: number;
    globalTeams?: number;
  };
  color?: ColorType;
  size?: CounterSize;
} & TClassNameProp;

export default function CountUpContainer({
  data,
  color = ColorType.RED, 
  size = CounterSize.LARGE,
  className,
}: Props) {
  const { people, territories, offices, globalTeams } = data;
  const containerStyles = `
    ${styles.container}
    ${styles[color]}
    ${styles[size]}
    ${className || ""}
    d-flex flex-column flex-md-row`;

  return (
    <Container className={containerStyles}>
      <CountUpRow>
        <CountUpItem title="People" value={people} suffix="+" />
        <CountUpItem title="Territories" value={territories} />
      </CountUpRow>
      <CountUpRow>
        <CountUpItem title="Offices" value={offices} />
        <CountUpItem title="Global team" value={globalTeams} prefix={globalTeams && globalTeams.toString().length > 1 ? '' : '0'}/>
      </CountUpRow>
    </Container>
  );
}
