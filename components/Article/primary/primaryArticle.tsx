import React, { PropsWithChildren } from "react";
import { TClassNameProp } from "../../../utils/types";
import Image from "next/image";
import styles from "./primaryArticle.module.css";
import ArticleTextContainer from "../articleText/articleText";

type Props = {
  imgSrc: string;
  hasBackground?: boolean;
} & TClassNameProp;

export function PrimaryArticle({
  children,
  imgSrc,
  className,
  hasBackground = true,
}: PropsWithChildren<Props>) {
  const classes = `${styles.container} ${className || ""} justify-content-between align-items-stretch`;

  return (
    <div className="d-flex flex-column w-100">
      <div className={classes}>
        <div className={styles.articleContent}>{children}</div>
        <div
          className={styles.primaryArticleImg}
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
      </div>
      {hasBackground ? <div className={styles.bgContainer} /> : null}
    </div>
  );
}

function PrimaryTitle(
  props: React.ComponentProps<typeof ArticleTextContainer.Header>
) {
  return <ArticleTextContainer.Header {...props} titleType="primary" />;
}

type ImgProps = {
  src: string;
  alt?: string;
};

PrimaryArticle.Title = PrimaryTitle;
PrimaryArticle.Content = ArticleTextContainer.Text;
