import styles from "./Navbar.module.css";

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import Image from "next/image";

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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link href="/">
        <Navbar.Brand>
          {logo && <Image src={logo} alt="Logo" className="navbar-logo" />}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <FiMenu />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {navLinks.map((link, index) => (
            <Link href={link.to} key={index}>
              <Nav.Link>{link.label}</Nav.Link>
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
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
