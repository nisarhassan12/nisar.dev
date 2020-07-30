import { borders, shadows } from '../../styles/variables';

import Img from 'gatsby-image';
import React from 'react';
import styled from '@emotion/styled';

const StyledTestimonials = styled.blockquote`
  max-width: var(--smallWrapperWidth-1);
  margin: auto;
  padding: var(--gutter-medium);
  border: ${borders.light1};
  box-shadow: ${shadows.light};
  font-size: var(--font-size-x-small);
  text-align: center;

  .role {
    margin: 0.5rem 0 1rem;
  }

  .img-container {
    display: block;
    margin: auto;
    height: 15rem;
    width: 15rem;
    margin-bottom: 2rem;
  }

  img {
    border-radius: 50%;
  }

  p {
    text-align: left;
  }
`;

const Testimonail = ({ image, name, role, quote }) => (
  <StyledTestimonials>
    <div className="img-container">
      <Img fluid={image} alt={name} />
    </div>
    <div>
      <h3>{name}</h3>
      <div className="role">{role}</div>
      <p>{quote}</p>
    </div>
  </StyledTestimonials>
);

export default Testimonail;
