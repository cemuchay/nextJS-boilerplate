import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ReusableCarouselProps {
  images: CarouselImage[];
}

/**
 * Reusable and Responsive Full-Width Image Carousel Component
 *
 * @param {Array} images - An array of objects containing 'src', 'alt', and optional 'caption' for each carousel image
 * @returns {JSX.Element} - The Carousel component
 */
const ReusableCarousel: React.FC<ReusableCarouselProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Image className="d-block w-100" src={image.src} alt={image.alt} />
          {image.caption && (
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

ReusableCarousel.propTypes = {
    //@ts-ignore
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
};

export default ReusableCarousel;
