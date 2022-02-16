import Link from "next/link";
import Button from "../Button/button";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import Image from "next/image";
import { FooterSection } from "./footerSection";
import { SocialMediaContainer } from "./socialMediaContainer";
import Logo from "../logo";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} w-100 d-flex flex-column`}>
      <FooterSection>
        <div className="justify-content-center justify-content-md-start order-1 order-md-0 w-100 px-md-0 px-2">
          <div className="d-flex flex-column align-items-start justify-content-start">
            <FooterLinkButton href="/">Home</FooterLinkButton>
            <FooterLinkButton href="/business"> Our business </FooterLinkButton>
            <FooterLinkButton href="/whyknightfrank">
              Why Knight Frank
            </FooterLinkButton>
            <FooterLinkButton href="/culture">CULTURE</FooterLinkButton>
            <FooterLinkButton href="/locations">LOCATIONS</FooterLinkButton>
            <FooterLinkButton href="/earlycareers">
              EARLY CAREERS
            </FooterLinkButton>
          </div>
        </div>
        <div
          className={`${styles.footerLogo} d-flex flex-column align-self-end align-self-md-start align-items-center 
          justify-content-center order-0 order-md-1 w-20 h-20 justify-content-center justify-content-md-end`}
        >
          <div className="d-flex flex-column align-items-end">
            <Logo />
            <p className={`${styles.footerCopyright}`}>
              Copyright &copy; Knight Frank
            </p>
          </div>
        </div>
      </FooterSection>
      <FooterSection align="end">
        <div
          className={`${styles.footerVacancies} d-flex flex-row w-100 justify-content-center justify-content-md-start`}
        >
          <Button variant="primary-white" href="/vacancies">
            See vacancies
          </Button>
          <Button variant="secondary-white" href="/earlycareers">
            Talent network
          </Button>
        </div>
        <SocialMediaContainer />
      </FooterSection>
    </footer>
  );
}

interface FooterLinkButtonProps {
  href: string;
}

function FooterLinkButton({
  href,
  children,
}: PropsWithChildren<FooterLinkButtonProps>) {
  return (
    <Button variant="flat-white" href={href}>
      {children}
    </Button>
  );
}
