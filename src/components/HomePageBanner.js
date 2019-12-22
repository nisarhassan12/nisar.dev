import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import { Link } from 'gatsby'
import Nav from './Nav'

const StyledHomePageBanner = styled.header`
    position: relative;
    height: 100vh;

    .text-box {
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);

        @media(max-width: ${sizes.breakpoints.md}) {
            text-align: center;
        }
    }

    p {
        font-size: 2.6rem;
        margin: 2rem 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 2.2rem;
            padding-right: 1rem;
        }
    }

    span {
        @media(max-width: ${sizes.breakpoints.md}) {
            display: none;
        }
    }

`

const HomePageBanner = () => (
    <StyledHomePageBanner role="banner" className="banner row">
        <Nav />
        <div className="text-box">
            <h1>Hi! I'm Nisar</h1>
            <p>A front end web developer and interface designer <span>&mdash;</span><br/>who builds UX rich, accessible & perfomant websites.</p>
            <Link to="/contact" className="btn btn--small btn--dark">Need help? Get in touch...</Link>
        </div>
    </StyledHomePageBanner>
)

export default HomePageBanner