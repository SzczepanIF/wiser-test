import React from "react";
import { Container } from "react-bootstrap";
import CountUpItem from "./countUpItem";
import CountUpRow from "./countupRow";
import styles from "./countupContainer.module.css";

type Props = {
  data: {
    people?: number;
    territories?: number;
    offices?: number;
    globalTeams?: number;
  };
};

export default function CountUpContainer({ data }: Props) {
  const { people, territories, offices, globalTeams } = data;
  return (
    <Container className={`${styles.container} d-flex flex-column flex-md-row`}>
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
