import NicholasShook from '../../resources/nicholas-shook.jpg';
import React from 'react';
import Testimonial from './Testimonial';
import styled from '@emotion/styled';

const StyledTestimonials = styled.section`
  text-align: center;

  .heading--underlined {
    &::after {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const Testimonials = ({ image }) => {
  const testimonials = [
    {
      image: image,
      name: 'Nicholas Shook',
      role: 'Attorney, Software Developer',
      quote:
        'Nisar is a fantastic UI developer and engineer. He helped our website become ARIA-compliant by enforcing accessibility standards in a thorough, test-driven way. We appreciated his clear communication and his awesome work product in our time spent together. I highly recommend booking Nisar for UI needs.',
    },
  ];

  return (
    <StyledTestimonials id="testimonials">
      <div className="row">
        <h2 className="heading--underlined">Testimonials</h2>
        <div className="testimonials">
          {testimonials.map((t, i) => (
            <Testimonial key={i + t.name} {...t} />
          ))}
        </div>
      </div>
    </StyledTestimonials>
  );
};

export default Testimonials;
