import { ReactElement } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Pinterest,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import Button from "../Button/button";
import { Title } from "../Title";
import styles from "./footer.module.css";

export function SocialMediaContainer() {
  return (
    <div className="d-flex flex-column justify-content-center justify-content-md-end align-items-end w-100 pt-md-0 pt-4">
      {/* TODO: replace with title */}
      <Title className={`${styles.socialMediaText} d-none d-md-block text-uppercase`}>Follow us</Title>
      <div
        className={`${styles.socialMediaContainer} d-flex justify-content-center justify-content-md-end align-items-center w-100`}
      >
        <FooterSMButton href="https://linkedin.com/company/knight-frank">
          <Linkedin />
        </FooterSMButton>
        <FooterSMButton href="https://www.facebook.com/KnightFrankLLP/">
          <Facebook />
        </FooterSMButton>
        <FooterSMButton href="https://www.instagram.com/knightfrank/">
          <Instagram />
        </FooterSMButton>
        <FooterSMButton href="https://www.youtube.com/KnightFrank">
          <Youtube />
        </FooterSMButton>
        <FooterSMButton href="https://twitter.com/knightfrank">
          <Twitter />
        </FooterSMButton>{" "}
        <FooterSMButton href="https://www.pinterest.com/knightfrank/">
          <Pinterest />
        </FooterSMButton>
      </div>
    </div>
  );
}

interface FooterSMButton {
  href: string;
  children: ReactElement;
}

function FooterSMButton({ href, children }: FooterSMButton) {
  return (
    <Button variant="secondary-white" rounded href={href} icon={children} />
  );
}
