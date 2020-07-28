import { borders, shadows } from '../../styles/variables';

import React from 'react';
import styled from '@emotion/styled';

const StyledTestimonials = styled.blockquote`
  max-width: 640px;
  margin: auto;
  padding: var(--gutter-normal);
  border: ${borders.light1};
  box-shadow: ${shadows.light};
  font-size: var(--font-size-x-small);
  text-align: center;

  .role {
    margin: 0.5rem 0 1rem;
  }

  img {
    display: block;
    margin: auto;
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
  }
`;

const Testimonail = ({ image, name, role, quote }) => (
  <StyledTestimonials>
    <img src={image} alt={name} />
    <div>
      <h3>{name}</h3>
      <div className="role">{role}</div>
      <p>{quote}</p>
    </div>
  </StyledTestimonials>
);

export default Testimonail;
