import React from "react";
import styles from "./quoteAuthor.module.css";
import Image from "next/image";
import { Title } from "../Title";
import { PersonCircle } from "react-bootstrap-icons";

type Props = {
  name: string;
  location?: string;
  businessUnit?: string;
  avatar?: string;
};

export default function QuoteAuthor({
  name = '',
  businessUnit,
  avatar,
  location,
}: Props) {
  const flexClasses =
    "d-flex flex-column align-items-center align-items-md-start";

  return (
    <div className={`${flexClasses} flex-md-row `}>
      <div className={`${styles.avatar} align-self-center`}>
        {avatar ? (
          <Image src={avatar} width="90" height="90" alt={`${name} avatar`} />
        ) : (
          <PersonCircle className="w-100 h-100" />
        )}
      </div>
      <div className={`${styles.details} ${flexClasses} align-self-center`}>
        <Title className={`${styles.authorName}`}>{name}</Title>
        <div className={`${styles.businessUnit} text-center`}>
          {businessUnit}
        </div>
        <div className={`${styles.location} text-uppercase text-center`}>
          {location}
        </div>
      </div>
    </div>
  );
}
