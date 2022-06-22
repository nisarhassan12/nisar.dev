import AgencyElevation from '../../images/agency-elevation.svg';
import EclipseFoundation from '../../images/eclipse-foundation.png';
import GitpodLogo from '../../images/gitpod.svg';
import Ideacraft from '../../images/idc.svg'
import LogRocket from '../../images/logrocket.svg';
import NeonLaw from '../../images/neonlaw.svg'
import OpenVSX from '../../images/open-vsx.svg';
import React from 'react';
import TheiaLogo from '../../images/theia.svg';
import TypeFoxLogo from '../../images/typefox.svg';
import { sizes } from '../../styles/variables';
import styled from '@emotion/styled';

const StyledTrustedBy = styled.section`
  text-align: center;

  .heading--underlined {
    &::after {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: var(--gutter-medium);

    & > img {
      margin: 0 5rem;
      margin-bottom: var(--gutter-medium-1);
    }
  }

  img {
    height: 4.5rem;
    max-width: 18rem;
    -webkit-filter: grayscale(1) opacity(0.6);
    filter: grayscale(1) opacity(0.6);

    @media (max-width: ${sizes.breakpoints.lg}) {
      height: 4rem;
      max-width: 17rem;
    }
  }

  .open-vsx {
    max-width: 24rem;
  }

  .ideacraft {
    transform: scale(.95);
  }

  .agency-elevation {
    transform: scale(.9);
  }

  .logrocket {
    transform: scale(.95);
  }
`;

const companies = [
  {
    url: 'https://gitpod.io',
    img: GitpodLogo,
    alt: 'Theia IDE',
  },
  {
    url: 'https://logrocket.com',
    img: LogRocket,
    alt: 'LogRocket',
    className: 'logrocket'
  },
  {
    url: 'https://theia-ide.org',
    img: TheiaLogo,
    alt: 'Theia IDE',
  },
  {
    url: 'https://www.agencyelevation.com',
    img: AgencyElevation,
    alt: 'Agency Elevation',
    className: "agency-elevation"
  },
  {
    url: 'https://open-vsx.org',
    img: OpenVSX,
    alt: 'OpenVSX',
    className: 'open-vsx',
  },
  {
    url: 'https://neonlaw.com',
    img: NeonLaw,
    alt: 'NeonLaw',
    className: 'neonlaw',
  },
  {
    url: 'https://typefox.io',
    img: TypeFoxLogo,
    alt: 'TypeFox',
  },
  {
    url: 'https://ideacraft.com.au',
    img: Ideacraft,
    alt: 'Ideacraft',
    className: 'ideacraft',
  },
  {
    url: 'https://www.eclipse.org/org/foundation/',
    img: EclipseFoundation,
    alt: 'Eclipse Foundation',
    className: 'eclipse-foundation'
  }
];

const TrustedBy = () => (
  <StyledTrustedBy id="trusted-by">
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
