import React, { useEffect, useState } from 'react';

import ArrowUp from '../resources/arrow-up.svg';
import { shadows } from '../styles/variables';
import styled from '@emotion/styled';

const StyledBackToTop = styled.a`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.7rem;
  width: 5.7rem;
  background: var(--white);
  border-radius: 50%;
  box-shadow: ${shadows.light2};
  transition: 0.3s;
  opacity: 1;
  transform: scale(1);

  &:hover,
  &:focus {
    box-shadow: ${shadows.light3};
  }

  &.hidden {
    visibility: hidden;
    opacity: 0;
    transform: scale(0.5);
  }

  img {
    height: 4.2rem;
    width: 4.2rem;
  }
`;

const BackToTop = () => {
  const [isRendered, setIsRendered] = useState(false);

  const toggle = () => {
    if (window.scrollY > 600) {
      setIsRendered(true);
    } else {
      setIsRendered(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggle);

    return () => {
      window.removeEventListener('scroll', toggle);
    };
  });

  return (
    <StyledBackToTop
      href="#top"
      title="Back to top"
      className={isRendered ? 'shown' : 'hidden'}
    >
      <img src={ArrowUp} alt="Back to top" />
    </StyledBackToTop>
  );
};

export default BackToTop;
