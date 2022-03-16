import { attributes, react as LocationsContent } from '../../../../../content/locations.md';
import Header from "../../../../../components/Header/Header";
import styles from "./locationsBgHeader.module.css";
import Button from "../../../../../components/Button/button";
import CountUpContainer, { ColorType, CounterSize } from "../../../../../components/CountUpContainer/countupContainer";
import React from 'react';

const LocationsBgHeader = () => {
  const countUpData = React.useMemo(
    () => ({
      people: 20000,
      territories: 57,
      globalTeams: 1,
      offices: 488,
    }),
    []
  );

  const {
    locationsBgSubtitle,
    locationsBgSubtitleEmphasizedText,
    locationsBgTitle,
    locationsBgButtonText,
  } = attributes;

  return (
    <div className={styles.locationsBigHeaderContainer}>

    
      <Header hasBottomBackgroundBlock={false}>
        <Header.LeftSide className={styles.locationsBgLeftSideSpacing}>
          <Header.HeaderContent
            subtitle="Careers at"
            subtitleEmphasizedText="Knight Frank"
            title="Hello Australia"
          ></Header.HeaderContent>
          <Header.Actions>
            <Button variant="primary" href="/vacancies">
              Australia vacancies
            </Button>
          </Header.Actions>
        </Header.LeftSide>
        <Header.RighttSide>
          <div className={styles.locationsBigPageImageContainer}/>
        </Header.RighttSide>
      </Header>
      <CountUpContainer
        className={styles.locationsBigCounter}
        color={ColorType.DARK_GREEN}
        size={CounterSize.MEDIUM}
        data={countUpData} />
    </div>
  );
};

export default LocationsBgHeader;
