import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../pages/partners.css"
const PartnerCarousel = () => {
  const partnerImages = [
    '/partner1.svg',
    '/partner2.svg',
    '/partner3.svg',
    '/partner4.svg',
    '/parnter5.svg',
    '/partner6.svg',
    // Add more image paths as needed
  ];

  // Calculate the number of slides required based on the number of images and the number of images per slide
  const numSlides = Math.ceil(partnerImages.length / 3);

  // Split the partner images into groups of 3 for each slide
  const slides = Array.from({ length: numSlides }, (_, index) =>
    partnerImages.slice(index * 3, index * 3 + 3)
  );
  

  return (
    <Carousel pause={false} className="carousel2"interval={2000}> 
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            {slide.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`Partner ${imgIndex + 1}`}
                className="carousel-image"
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
     
    </Carousel>
  );
};

export default PartnerCarousel;
