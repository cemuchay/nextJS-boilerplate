import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons';

interface ReusableSectionProps {
  backgroundImage?: string;
  centerText?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable and Responsive Section Component
 *
 * @param {string} backgroundImage - The URL or path to the background image
 * @param {boolean} centerText - Specifies whether to vertically center the content
 * @param {React.ReactNode} children - The content of the section
 * @returns {JSX.Element} - The Section component
 */
const ReusableSection: React.FC<ReusableSectionProps> = ({
  backgroundImage,
  centerText,
  children,
}) => {
  const sectionStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="section" style={sectionStyle}>
      <Container className={centerText ? 'd-flex align-items-center' : ''}>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </section>
  );
};

ReusableSection.propTypes = {
  backgroundImage: PropTypes.string,
  centerText: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ReusableSection;
