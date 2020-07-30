import React from 'react';
import { sizes } from '../styles/variables';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  padding: 7rem 0 5rem;
  color: var(--textWhite);
  background: var(--black0);
  text-align: center;

  .social-links {
    display: flex;
    justify-content: center;
  }

  li {
    &:not(:last-child) {
      margin-right: 5rem;

      @media (max-width: ${sizes.breakpoints.sm}) {
        margin-right: 3rem;
      }
    }
  }

  a {
    color: inherit;
  }

  .info {
    padding-top: 3rem;
    max-width: 600px;
    margin: 0 auto;
    font-size: var(--font-size-x-small);
  }
`;

const Footer = () => (
  <StyledFooter role="contentinfo">
    <div className="row">
      <ul className="social-links">
        <li>
          <a
            href="https://twitter.com/nisarhassan12"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nisarhassan12"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nisar-hassan-naqvi-413466199/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
      <div className="info">
        <p>
          &copy; 2020. Crafted within Lahore by{' '}
          <a
            href="https://twitter.com/nisarhassan12"
            style={{ color: 'var(--white' }}
            target="_blank"
          >
            Nisar
          </a>
          .
        </p>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
