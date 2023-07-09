import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons';
import Image from 'next/image';

interface ReusableHeroSectionProps {
    title: string;
    text: string;
    image?: {
        url: string;
        height: number;
        width: number;
    }
    backgroundImage?: string;
}

/**
 * Reusable and Responsive Hero Section Component
 *
 * @param {string} title - The title of the hero section
 * @param {string} text - The text of the hero section
 * @param {string} image - The URL or path to the hero image
 * @param {string} backgroundImage - The URL or path to the background image
 * @returns {JSX.Element} - The Hero Section component
 */
const ReusableHeroSection: React.FC<ReusableHeroSectionProps> = ({
    title,
    text,
    image,
    backgroundImage,
}) => {
    const sectionStyle = {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className="hero-section" style={sectionStyle}>
            <Container>
                <Row>
                    <Col md={6}>
                        {image && (
                            <Image src={image.url} width={image.width} height={image.height} alt="Hero" className="hero-image" />
                        )}
                    </Col>
                    <Col md={6}>
                        <div className="hero-content justify-content-center">
                            <h1>{title}</h1>
                            <p>{text}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

ReusableHeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }),
    backgroundImage: PropTypes.string,
};

export default ReusableHeroSection;
