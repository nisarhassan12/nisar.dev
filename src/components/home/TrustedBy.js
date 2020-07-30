import GitpodLogo from '../../resources/gitpod.svg';
import OpenVSX from '../../resources/open-vsx.svg';
import React from 'react';
import TheiaLogo from '../../resources/theia.svg';
import TypeFoxLogo from '../../resources/typefox.svg';
import { sizes } from '../../styles/variables';
import styled from '@emotion/styled';

const StyledTrustedBy = styled.section`
  .logos {
    display: flex;
    padding: 5rem 0;

    @media (max-width: 1100px) {
      overflow-x: scroll;
    }

    & > img {
      &:not(:last-of-type) {
        margin-right: var(--gutter-large);

        @media (max-width: 585px) {
          margin-right: var(--gutter-medium);
        }
      }
    }
  }

  img {
    height: 4.5rem;
    max-width: 18rem;
    filter: grayscale(1) opacity(0.6);
    -webkit-filter: grayscale(1) opacity(0.6);

    @media (max-width: ${sizes.breakpoints.lg}) {
      height: 4rem;
      max-width: 17rem;
    }
  }

  .open-vsx {
    max-width: 24rem;
  }
`;

const companies = [
  {
    url: 'https://theia-ide.org',
    img: TheiaLogo,
    alt: 'Theia IDE Logo',
  },
  {
    url: 'https://gitpod.io',
    img: GitpodLogo,
    alt: 'Theia IDE Logo',
  },
  {
    url: 'https://typefox.io',
    img: TypeFoxLogo,
    alt: 'TypeFox Logo',
  },
  {
    url: 'https://open-vsx.org',
    img: OpenVSX,
    alt: 'OpenVSX',
    className: 'open-vsx',
  },
];

const TrustedBy = () => (
  <StyledTrustedBy>
    <div className="row">
      <h2 className="heading--underlined">Trusted By</h2>
      <div className="logos-container">
        <div className="logos">
          {companies.map((c, i) => (
            <img src={c.img} alt={c.alt} className={c.className} />
          ))}
        </div>
      </div>
    </div>
  </StyledTrustedBy>
);

export default TrustedBy;
