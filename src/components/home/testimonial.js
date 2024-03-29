import { borders, shadows } from '../../styles/variables';

import React from 'react';
import styled from '@emotion/styled';

const StyledTestimonials = styled.blockquote`
  max-width: var(--smallWrapperWidth-1);
  padding: var(--gutter-normal);
  border: ${borders.light1};
  box-shadow: ${shadows.light};
  font-size: var(--font-size-x-small-1);
  text-align: center;

  @media (max-width: 1280px) {
    margin-bottom: var(--gutter-medium-1);
  }

  .role {
    margin: 0.5rem 0 1rem;
  }

  .img-container {
    display: block;
    margin: auto;
    height: 13rem;
    width: 13rem;
    margin-bottom: 2rem;
    border-radius: 50%;
  }

  p {
    text-align: left;
  }
`;

const Testimonail = ({ name, role, quote, children, ...props }) => (
    <StyledTestimonials>
      <div className="img-container">
        {children}
      </div>
      <div>
        <h3>{name}</h3>
        <div className="role">{role}</div>
        <p>{quote}</p>
      </div>
    </StyledTestimonials>
  )

export default Testimonail;
