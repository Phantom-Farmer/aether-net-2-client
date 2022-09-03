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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>aether-net</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>home</Nav.Link>
            </Link>
            <Link passHref href="/sleepcard/new">
              <Nav.Link>add sleepcard</Nav.Link>
            </Link>
            <Link passHref href="/meditations">
              <Nav.Link>meditations</Nav.Link>
            </Link>
            <Link passHref href="/player">
              <Nav.Link>music player</Nav.Link>
            </Link>
            <Link passHref href="/dreamcard/dream-journal">
              <Nav.Link>dream journals</Nav.Link>
            </Link>
            <div className="navbarProfile" id="navbarTogglerDemo01">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                    <img src={user.photoURL} width="30px" height="30px" alt="user" className="user-icon" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <div className="profileDropdownBottomDiv">
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
