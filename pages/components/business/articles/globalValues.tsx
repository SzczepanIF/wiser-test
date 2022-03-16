import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import styles from "./businessArticle.module.css";
import Button from "../../../../components/Button/button";
import { Article } from "../../../../components/Article";

// TODO move to BusinessContent
const cardItems = [
  {
    id: '1',
    title: "Value the individual",
    text: "We recognise strength in difference and we aspire to make Knight Frank a place where every person can feel supported to perform at their best. Your personal experience and progression is a priority at Knight Frank and you will be working in an environment you are encouraged to be yourself. ",
    image: {
      src: "http://via.placeholder.com/640x360",
      alt: "Image"
    },
    isActive: false,
  },
  {
    id: '2',
    title: "Collaborate to succeed",
    text: "",
    image: {
      src: "http://via.placeholder.com/640x360",
      alt: "Image"
    },
    isActive: false,
  },
  {
    title: "Make the difference",
    text: `Adafsd Nostrum ut fugiat, solut asdfasdfasdf asdfasf
    mollitia reiciendis deleniti error non perferendis ullam molestiae
    quos modi corporis, aspernatur ab! Modi omnis tempora asperiores
    dolores labore cupiditate magnam minima autem?`,
    image: {
      src: "http://via.placeholder.com/640x360",
      alt: "Image"
    },
    isActive: false,
  },
  {
    title: "Commit to partnership",
    text: `Adafsd Nostrum ut fugiat, solut asdfasdfasdf asdfasf
    mollitia reiciendis deleniti error non perferendis ullam molestiae
    quos modi corporis, aspernatur ab! Modi omnis tempora asperiores
    dolores labore cupiditate magnam minima autem?`,
    image: {
      src: "http://via.placeholder.com/640x360",
      alt: "Image"
    },
    isActive: false,
  },
];

export default function GlobalValuesArticle() {
  const [state, setState] = useState(cardItems);

  const toggleClass = (index: number) => {
    let newState = [...state];
    const currentItemState = state[index].isActive;
    newState[index].isActive = !currentItemState;
    setState(newState)
  };

  return (
    <div className={styles.globalValuesContainer}>
      <div className={styles.globalValuesBricksImageContainer}>
        <img
          className={`${styles.globalValuesBricksImage} ${styles.globalValuesBricksImageTopRight}`}
          src="/svg/bricks.svg"
          alt="Bricks"
        />
      </div>
      <Article
        title="We are driven by our values"
        subtitle="Global values"
        subtitleColor="white"
      >
        <CardGroup className={styles.globalValuesCardGroup}>
          {state.map((item, index) => (
            <Card className={styles.globalValuesCard} key={index}>
              <Card.Body className={styles.globalValuesCardBody}>
                <div className={styles.globalValuesCardTitleWrapper}>
                  <Card.Title className={styles.globalValuesCardTitle}>
                    {item.title}
                  </Card.Title>
                  <Button
                    rounded
                    className={`
                      ${styles.globalValuesCardButton}
                      ${item.isActive ? styles.globalValuesActiveCardButton : ""}
                    `}
                    onClick={() => toggleClass(index)}
                    icon={
                      <img
                        className={`${styles.globalValuesCardButtonIcon}`}
                        src={item.isActive ? "/svg/closeIconWhite.svg" : "/svg/add.svg"}
                        alt={item.isActive ? "Close" : "Add"}
                      />
                    }
                  />
                </div>
                {item.isActive ? (
                  <Card.Text className={styles.globalValuesCardText}>{item.text}</Card.Text>
                ) : (
                  <Card.Img variant="top" src={item.image.src} />
                )}
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Article>
      <div className={styles.globalValuesBricksImageContainer}>
        <img
          className={`${styles.globalValuesBricksImage} ${styles.globalValuesBricksImageBottomLeft}`}
          src="/svg/bricks.svg"
          alt="Bricks"
        />
      </div>
    </div>
  );
}
