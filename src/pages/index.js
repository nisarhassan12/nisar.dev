import About from '../components/home/About';
import Banner from '../components/Banner';
import IndexLayout from '../layouts/index';
import React from 'react';
import Testimonials from '../components/home/Testimonials';
import TrustedBy from '../components/home/TrustedBy';
import Work from '../components/Work';
import { borders } from '../styles/variables';
import { graphql } from 'gatsby';
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

export const IndexPageQuery = graphql`
  query {
    nisar: file(relativePath: { eq: "nisar.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    nick: file(relativePath: { eq: "nicholas-shook.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    josef: file(relativePath: { eq: "josef.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <IndexLayout canonical="/">
      <StyledIndexPage>
        <Banner />
        <Work />
        <TrustedBy />
        <Testimonials nick={data.nick.childImageSharp.fluid} josef={data.josef.childImageSharp.fluid} />
        <About image={data.nisar.childImageSharp.fluid} />
      </StyledIndexPage>
    </IndexLayout>
  );
};

export default IndexPage;
