import { borders, shadows } from '../../styles/variables';

import { StaticImage } from 'gatsby-plugin-image';
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

  .img {
    display: block;
    max-width: 100%;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    margin: 0 auto var(--gutter-normal);
  }
`;

const About = ({ image }) => (
  <Styled id="about">
    <div className="row">
      <h2 className="heading--underlined">About Me</h2>
      <div className="contents">
        <div className="img-container">
          <StaticImage src='../../images/nisar.jpg' alt="Nisar Hassan Naqvi" class='img' />
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
            <a href="https://materialize.com/" target="_blank">
              Materialize
            </a>.
          </p>
          <p>
            Apart from sitting in front of Computer 🖥️ I like playing Cricket 🏏 and love spending time outdoors in Nature 🌴 where I take some photographs 📷 you can see some of my recent shots on <a href="https://www.instagram.com/nisarhassan12/" target="_blank">instagram</a>.
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
