import About from '../components/home/about';
import Banner from '../components/banner';
import IndexLayout from '../layouts/index';
import React from 'react';
import Testimonials from '../components/home/testimonials';
import TrustedBy from '../components/home/trusted-by';
import Work from '../components/work';
import { borders } from '../styles/variables';
import styled from '@emotion/styled';

const StyledIndexPage = styled.div`
  .hack {
    @media (max-width: 912px) {
      display: none;
    }
  }

  section {
    border-top: ${borders.light};

    &:nth-of-type(2n + 2) {
      background: var(--offWhite);
    }
  }
`;

const IndexPage = () => {
  return (
    <IndexLayout canonical="/">
      <StyledIndexPage>
        <Banner />
        <Work />
        <TrustedBy />
        <Testimonials />
        <About />
      </StyledIndexPage>
    </IndexLayout>
  );
};

export default IndexPage;
