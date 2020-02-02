import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import Nav from './Nav'
import { Link } from 'gatsby'

const StyledBanner = styled.header`
    position: relative;
    height: 100vh;

    .text-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

    }

    h1 {
        font-size: 6.5rem;

        @media(max-width: ${sizes.breakpoints.lg}) {
            font-size: 4.6rem;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            font-size: 4rem;
        }
    }

    p {
        font-size: 2.6rem;
        margin: 2rem 0 2.5rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 2.4rem;
            padding-right: 1rem;
        }

        @media(max-width: 430px) {
            font-size: 2.2rem;
        }
    }

    span {
        @media(max-width: ${sizes.breakpoints.md}) {
            display: none;
        }
    }

    br {
        @media(max-width: 450px) {
            display: none;
        }
    }
`

const Banner = () => (
    <StyledBanner role="banner" className="banner row">
        <Nav />
        <div className="text-box">
            <h1>Hi! I'm Nisar</h1>
            <p>A front end web developer and interface designer <span aria-hidden="true">&mdash;</span><br/>who builds UX rich, accessible & perfomant websites.</p>
            <a href="mailto:syednisarhassan12@gmail.com" className="btn btn--dark">Need help? get in touch ...</a>
        </div>
    </StyledBanner>
)

export default Banner