import GitHub from '../resources/github.svg';
import Instagram from '../resources/instagram.svg';
import Linkedin from '../resources/linkedin.svg';
import React from 'react';
import Twitter from '../resources/twitter.svg';
import Youtube from '../resources/youtube.svg';
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

  .social-icon {
    height: 3.5rem;
    width: 3.5rem;
  }

  .info {
    padding-top: 3rem;
    max-width: 600px;
    margin: 0 auto;
    font-size: var(--font-size-x-small);
  }
`;

const socialLinks = [
  {
    icon: Twitter,
    alt: `Twitter`,
    href: `https://twitter.com/nisarhassan12`
  },
  {
    icon: GitHub,
    alt: `GitHub`,
    href: `https://github.com/nisarhassan12`
  },
  {
    icon: Linkedin,
    alt: `Linkedin`,
    href: `https://www.linkedin.com/in/nisar-hassan-naqvi-413466199/`
  },
  {
    icon: Youtube,
    alt: 'Youtube',
    href: `https://www.youtube.com/channel/UCScoa-fTDvLMj08DOTjGbtw`
  },
  {
    icon: Instagram,
    alt: `Instagram`,
    href: `https://www.instagram.com/nisarhassan12/`
  },
]

const Footer = () => (
  <StyledFooter role="contentinfo">
    <div className="row">
      <ul className="social-links">
        {
          socialLinks.map(({href, icon, alt}) => <li>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            title={`Link to ${alt} profile of Nisar.`}
          >
            <img className="social-icon" src={icon} alt={alt}/>
          </a>
        </li>)
        }
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
