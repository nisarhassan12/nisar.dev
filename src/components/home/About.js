import { borders, shadows } from '../../styles/variables';

import Img from 'gatsby-image';
import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';

const Styled = styled.section`
  .contents {
    max-width: var(--smallWrapperWidth);
    margin: 0 auto;
    padding: var(--gutter-medium);
    border: ${borders.light1};
    box-shadow: ${shadows.light};
    background: var(--white);
    font-size: var(--font-size-x-small);
  }

  h2 {
    text-align: center;
  }

  .heading--underlined {
    &::after {
      margin-right: auto;
      margin-left: auto;
    }
  }

  .img-container {
    max-width: 35rem;
    margin: auto;
    margin-bottom: var(--gutter-normal);
  }

  img {
    display: block;
    max-width: 100%;
    border-radius: 50%;
  }

  .text {
  }
`;

const About = ({ image }) => (
  <Styled>
    <div className="row">
      <h2 className="heading--underlined">About Me</h2>
      <div className="contents">
        <div className="img-container">
          <Img fluid={image} alt="Nisar Hassan Naqvi" />
        </div>
        <div className="text">
          <p>
            My name is Syed Nisar Hassan Naqvi I am a self-taught front end
            developer and interface designer based in Lahore, Pakistan. I'm
            passionate about accessibility, performance and elegant design and
            things that usually make life easier for the users.
          </p>
          <p>
            I currently work for{' '}
            <a href="https://typefox.io" target="_blank">
              TypeFox
            </a>{' '}
            as a freelance front-end developer where almost the entirety of the
            work I do is open source.
          </p>
          <p>
            These days I'm willing to create some helpful and valuable Open
            Source projects that can help the web community.
          </p>
          <p>
            Got something to say or need any kind of help please feel free to{' '}
            <Link to="/contact/">reach out</Link> I'll try my best to respond.
          </p>
        </div>
      </div>
    </div>
  </Styled>
);

export default About;
