import React, { useCallback, useState, useMemo } from "react";
import { Carousel } from "react-bootstrap";
import { TQuote } from "../../utils/types";
import styles from "./quoteArticle.module.css";
import QuoteAuthor from "./quoteAuthor";

import SlideControlButtons from "../SlideControlButtons/slideControlButtons";

type Props = {
  items: TQuote[];
};

export default function QuoteArticle({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const maxItemIdx = useMemo(() => items.length - 1, [items]);

  const handleSetNextIndex = useCallback(() => {
    setActiveIndex((prevActiveIndex) => {
      return prevActiveIndex === maxItemIdx ? 0 : prevActiveIndex + 1;
    });
  }, [maxItemIdx]);

  const handleSetPrevIndex = useCallback(() => {
    setActiveIndex((prevActiveIndex) => {
      return prevActiveIndex === 0 ? maxItemIdx : prevActiveIndex - 1;
    });
  }, [maxItemIdx]);

  return (
    <>
      <Carousel
        indicators={false}
        controls={false}
        interval={null}
        fade={true}
        activeIndex={activeIndex}
      >
        {items.map((item, idx) => {
          const { quote, author } = item;
          return (
            <Carousel.Item key={`${idx}`}>
              <div className={`${styles.container} d-flex`}>
                <div className={`${styles.quoteMarks}`} />
                <div className={`${styles.quoteContainer} d-flex flex-column`}>
                  <div className={`${styles.quote}`} title={quote}>
                    {quote}
                  </div>
                  {author && (
                    <QuoteAuthor
                      name={author.name}
                      avatar={author.avatar}
                      businessUnit={author.businessUnit}
                      location={author.location}
                    />
                  )}
                </div>
                <SlideControlButtons
                  className={styles.btns}
                  onNextClick={handleSetNextIndex}
                  onPrevClick={handleSetPrevIndex}
                  currentItemIndex={activeIndex + 1}
                  itemsLength={items.length}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
