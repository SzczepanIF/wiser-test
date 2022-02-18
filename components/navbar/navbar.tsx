import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Nav} from 'react-bootstrap';
import Button from '../Button/button';
import { Subtitle } from '../Title/subtitle';

// Top navbar
export default function NavbarComponent() {

  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);


  const toggleMobileNav = () => {
    setCollapsed(!collapsed);
  }

  return (
    <nav>
      <Navbar collapseOnSelect className={collapsed ? 'collapsed' : 'show'} expand="lg" bg="light" variant="light" fixed="top" onToggle={toggleMobileNav}>
        <Navbar.Brand href="/">
            <Link href="/">
              <img src={'/logo.png'} width="130px" style={!collapsed ? {filter: "brightness(0) invert(1)"} : {filter: "none"}}/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Subtitle className="d-lg-none mobile-menu-subtitle" color="white">Meet Knight Frank</Subtitle>
          <Nav className="me-auto clear">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/business">OUR BUSINESS</Nav.Link>
            <Nav.Link href="/whyknightfrank">WHY KNIGHT FRANK</Nav.Link>
            <Nav.Link href="/culture">CULTURE</Nav.Link>
            <Nav.Link href="/locations">LOCATIONS</Nav.Link>
            <Nav.Link href="/earlycareers">EARLY CAREERS</Nav.Link>
          </Nav>
          <Nav className="d-flex find-role">
            <Subtitle className="d-lg-none mobile-menu-subtitle" color="white">Find a role</Subtitle>
            <div className="buttons-wrapper d-flex">
              <Nav.Link eventKey={2} href="/vacancies">
                <Button variant="primary" href="/vacancies">VACANCIES</Button>
              </Nav.Link>
              <Nav.Link href="/talents">
                <Button variant="primary-white" className="d-lg-none" href="/talents">TALENTS</Button>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
