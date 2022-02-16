import React from "react";
import Article from "../../../../components/Article/article";
import Button from "../../../../components/Button/button";
import Image from "next/image";
import styles from "./homeArticle.module.css";

type Props = {};

export default function WhoAreWeArticle({}: Props) {
  return (
    <Article textPosition="right" textOnWhiteBackground>
      <Article.TextContainer>
        <Article.Header
          title="Simple statement that describes Knigth Frank"
          subtitle="Who are we?"
        />
        <Article.Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            fuga quia minus necessitatibus repellendus consequuntur, vel veniam
            eos atque, at maxime. Ipsam, reiciendis sunt! Illum autem ducimus,
            soluta delectus doloremque nemo tempora quod eum provident facere
            optio magnam ratione animi unde eius nisi?
          </p>
          <p>
            Nostrum ut fugiat, soluta mollitia reiciendis deleniti error non
            perferendis ullam molestiae quos modi corporis, aspernatur ab! Modi
            omnis tempora asperiores dolores labore cupiditate magnam minima
            autem?
          </p>
        </Article.Text>
        <Article.Actions>
          <Button variant="secondary" href="/business">
            Find out more
          </Button>
        </Article.Actions>
      </Article.TextContainer>
      <Article.Right>
        <Image src="/home_people.png" alt="People" width="500" height="500" />
      </Article.Right>
    </Article>
  );
}
