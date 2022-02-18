import React from "react";
import { Article } from "../../../../components/Article";
import Button from "../../../../components/Button/button";
import Image from "next/image";
import styles from "./homeArticle.module.css";
import { Play } from "react-bootstrap-icons";
import { Title } from "../../../../components/Title";

type Props = {};

export default function WhyKnightFrankArticle({}: Props) {
  return (
    <Article textPosition="right" textOnWhiteBackground>
      <Article.TextContainer>
        <Article.Header
          title="Join a partnership defined by our people &amp; the spirit of possibility."
          subtitle="Why Knight Frank?"
        />
        <Article.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fuga
          quia minus necessitatibus repellendus consequuntur, vel veniam eos
          atque, at maxime. Ipsam, reiciendis sunt! Illum autem ducimus, soluta
          delectus doloremque nemo tempora quod eum provident facere optio
          magnam ratione animi unde eius nisi?
        </Article.Text>
        <Article.Actions>
          <Button variant="secondary" href="/culture">
            Why Knight Frank?
          </Button>
        </Article.Actions>
      </Article.TextContainer>
      <Article.Left>
        <div className={`${styles.videoBlock} d-flex flex-column`}>
          <div className={styles.videoImg}>
            <img src="/home_video.png" alt="Video" width="500" height="280" />
          </div>
          <div className={`${styles.videoPlay} d-flex align-items-center`}>
            <Button variant="primary" rounded icon={<Play />} />
            <Title className={styles.videoTitle}>Global video title</Title>
          </div>
        </div>
      </Article.Left>
    </Article>
  );
}
