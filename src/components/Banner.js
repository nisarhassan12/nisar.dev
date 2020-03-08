import React from 'react'

import styled from '@emotion/styled'
import { sizes, colors } from '../styles/variables'
import Nav from './Nav'
import { Link } from 'gatsby'
import Bg from '../resources/bg.jpg'


const StyledBanner = styled.header`
    position: relative;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0, .9), rgba(0,0,0, .9)), url(${Bg});
    background-size: cover;
    color: ${colors.white};
    background-position: top;
    background-attachment: fixed;

    .text-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        opacity: .9;
    }

    h1 {
        font-size: 7.5rem;
        font-weight: 300;

        @media(max-width: ${sizes.breakpoints.lg}) {
            font-size: 6rem;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 5.5rem;
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

    .btn {
        color: ${colors.white};
    }
`

const Banner = () => (
    <StyledBanner role="banner" className="banner">
        <div className="row">
            <Nav />
            <div className="text-box">
                <h1>Hi! I'm Nisar</h1>
                <p>A front end web developer and interface designer <span aria-hidden="true">&mdash;</span><br/>who builds UX rich, accessible & performant websites.</p>
                <Link to="/contact/" className="btn">Need help? Get in touch ...</Link>
            </div>
        </div>
    </StyledBanner>
)

export default Banner