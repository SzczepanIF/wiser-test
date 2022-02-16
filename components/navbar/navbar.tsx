import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Nav, Button} from 'react-bootstrap';
import "./navbar.module.css";

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
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/business">OUR BUSINESS</Nav.Link>
            <Nav.Link href="/whyknightfrank">WHY KNIGHT FRANK</Nav.Link>
            <Nav.Link href="/culture">CULTURE</Nav.Link>
            <Nav.Link href="/locations">LOCATIONS</Nav.Link>
            <Nav.Link href="/earlycareers">EARLY CAREERS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/vacancies">
              <Button variant="danger" href="/vacancies">VACANCIES</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
