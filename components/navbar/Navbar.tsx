import styles from "./Navbar.module.scss";

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import Image from "next/image";
import { Container } from "react-bootstrap";

interface NavLink {
  to: string;
  label: string;
}

interface ReusableNavbarProps {
  navLinks: NavLink[];
  logo?: string;
}

/**
 * Reusable and Responsive Navbar Component
 *
 * @param {Array} navLinks - An array of objects containing 'to' and 'label' for each navigation link
 * @param {string} logo - The URL or path to the logo image
 * @returns {JSX.Element} - The Navbar component
 */
const ReusableNavbar: React.FC<ReusableNavbarProps> = ({ navLinks, logo }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Container>
        <Link href="/" className="link">
          <Navbar.Brand >
            {logo && <Image src={logo} alt="Logo" className="navbar-logo" />}
            Logo
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FiMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav
            className={`ms-auto mt-2 text-center text-uppercase mb-2 ${styles.navLink}`}
            id="navlinkParent"
          >
            {navLinks.map((item, index) => {
              return (
                <Nav.Link
                  key={index}
                  className={styles.navLinkActive}
                  href={item.to}
                >
                  {item.label}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

ReusableNavbar.propTypes = {
  //@ts-ignore
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  logo: PropTypes.string,
};

export default ReusableNavbar;
