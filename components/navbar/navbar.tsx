import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import Button from "../Button/button";
import { Subtitle } from "../Title/subtitle";

// Top navbar
export default function NavbarComponent() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);

  const toggleMobileNav = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav>
      <Navbar
        collapseOnSelect
        className={collapsed ? "collapsed" : "show"}
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        onToggle={toggleMobileNav}
      >
        <Navbar.Brand href="/">
          <Link href="/">
            <img
              src={"/logo.png"}
              style={
                !collapsed
                  ? { filter: "brightness(0) invert(1)", width: "100px", height: "auto", marginTop: "10px" }
                  : { filter: "none", width: "150px" }
              }
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Subtitle className="d-lg-none mobile-menu-subtitle reverted" color="white">
            Meet Knight Frank
          </Subtitle>
          <Nav className="navbar-alignment clear">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/business">Our Business</Nav.Link>
            <Nav.Link href="/whyknightfrank">Why Knight Frank</Nav.Link>
            <Nav.Link href="/culture">Culture</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
            <Nav.Link href="/earlycareers">Early Careers</Nav.Link>
          </Nav>
          <Nav className="d-flex find-role">
            <Subtitle className="d-lg-none mobile-menu-subtitle role-subtitle" color="white">
              Find a role
            </Subtitle>
            <div className="buttons-wrapper d-flex">
              <Nav.Link eventKey={2} href="/vacancies">
                <Button variant="primary" href="/vacancies" className="mobilePrimary">
                  VACANCIES
                </Button>
              </Nav.Link>
              <Nav.Link href="/talents" className="d-lg-none mobileSecondary">
                <Button variant="primary-white" href="/talents">
                  TALENTS
                </Button>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
