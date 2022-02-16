import React from "react";
import Article from "../../../../components/Article/article";
import styles from "./businessArticle.module.css";

type Props = {};

export default function SocialResponsibilityArticle({}: Props) {
  return (
    <Article
      title="Environmental, social &amp; governance"
      subtitle="Social responsibility"
      backgroundClassName={styles.locationsContainer}
      textOnWhiteBackground
    >
      <Article.TextContainer>
        <Article.Header title="Where can you find us?" subtitle="Locations" />
        <Article.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fuga
          quia minus necessitatibus repellendus consequuntur, vel veniam eos
          atque, at maxime. Ipsam, reiciendis sunt! Illum autem ducimus, soluta
          delectus doloremque nemo tempora quod eum provident facere optio
          magnam ratione animi unde eius nisi? Nostrum ut fugiat, soluta
          mollitia reiciendis deleniti error non perferendis ullam molestiae
          quos modi corporis, aspernatur ab! Modi omnis tempora asperiores
          dolores labore cupiditate magnam minima autem?
        </Article.Text>
        <Article.Actions>
          {/* <Button variant="secondary" href="/locations">
      Explore locations
    </Button> */}
        </Article.Actions>
      </Article.TextContainer>
    </Article>
  );
}
