import styles from '../styles/Footer.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import Image from 'next/image';

interface NavLink {
    to: string;
    label: string;
}

interface ReusableFooterProps {
    navLinks: NavLink[];
    logo?: string;
}

/**
 * Reusable and Responsive Footer Component
 *
 * @param {Array} navLinks - An array of objects containing 'to' and 'label' for each navigation link
 * @param {string} logo - The URL or path to the logo image
 * @returns {JSX.Element} - The Footer component
 */
const ReusableFooter: React.FC<ReusableFooterProps> = ({ navLinks, logo }) => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4} className="footer-logo">
                        {logo && <Image src={logo} alt="Logo" />}
                    </Col>
                    <Col md={8} className="footer-links">
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.to}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="social-icons">
                        <IconContext.Provider value={{ className: 'icon' }}>
                            <FiTwitter />
                            <FiFacebook />
                            <FiInstagram />
                        </IconContext.Provider>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

ReusableFooter.propTypes = {
    //@ts-ignore
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    logo: PropTypes.string,
};

export default ReusableFooter;
