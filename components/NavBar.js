/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import ProfileDropdown from './ProfileDropdown';

export default function NavBar() {
  const { user } = useAuth();
  return (
    <Navbar collapseOnSelect className="navver" fixed="top" expand="lg" bg="dark" variant="dark">
      <Container style={{ padding: 3 }}>
        <Link passHref href="/thankyou">
          <Navbar.Brand><img src="/images/metatrons.jpg" alt="logo" style={{ height: '60px', marginLeft: 40 }} /></Navbar.Brand>
        </Link>
        {/* <Link passHref href="/">
          <Navbar.Brand>aether-net</Navbar.Brand>
  </Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ paddingTop: 30, paddingLeft: 50, paddingRight: 50 }}>
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link style={{ paddingLeft: 70, paddingRight: 50 }}>sleep cards</Nav.Link>
            </Link>
            <Link passHref href="/dreamcard/dream-journal">
              <Nav.Link style={{ paddingLeft: 40, paddingRight: 50 }}>dream journals</Nav.Link>
            </Link>
            <Link passHref href="/sleepcard/new">
              <Nav.Link style={{ paddingLeft: 40, paddingRight: 50 }}>add sleep card</Nav.Link>
            </Link>
            <Link passHref href="/meditations">
              <Nav.Link style={{ paddingLeft: 40, paddingRight: 50 }}>meditations</Nav.Link>
            </Link>
            <Link passHref href="/music">
              <Nav.Link style={{ paddingLeft: 40, paddingRight: 150 }}>music</Nav.Link>
            </Link>
            <div className="navbarProfile" id="navbarTogglerDemo01">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                    <img src={user?.photoURL} width="50px" height="50px" alt="user" className="user-icon" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <div className="profileDropdownBottomDiv" style={{ paddingLeft: 50, paddingRight: 30 }}>
                      <ProfileDropdown />
                      <button type="button" className="signOutBtn btn" onClick={signOut}>
                        Sign Out
                      </button>
                    </div>
                  </ul>
                </li>
                <div />
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
