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

  .testimonials {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1280px) {
        flex-direction: column;
        align-items: center;
    }

    & > * {
      flex: 0 0 49%;
    }
    /* grid-gap: var(--gutter-normal);
    grid-template-columns: repeat(2, 1fr); */
  }
`;

const Testimonials = ({ nick, josef }) => {
  const testimonials = [
    {
      image: nick,
      name: 'Nicholas Shook',
      role: 'Attorney, Software Developer',
      quote:
        'Nisar is a fantastic UI developer and engineer. He helped our website become ARIA-compliant by enforcing accessibility standards in a thorough, test-driven way. We appreciated his clear communication and his awesome work product in our time spent together. I highly recommend booking Nisar for UI needs.',
    },
    {
      image: josef,
      name: 'Josef Kruckenberg',
      role: 'Drupal Contributor',
      quote:
        'Working with Nisar was a great experience. His drive for clean aesthetics and his open communication style helped us collaborate closely on the solution. I appreciated him challenging my concept and implementing a solution that performs well using Gatsby.js. Nisar also performed API integration, design and frontend development leading the project to success in a very agile and quality appreciating manner. ',
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
