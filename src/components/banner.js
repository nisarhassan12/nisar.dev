import { shadows, sizes } from '../styles/variables'

import Bg from '../images/bg.jpg'
import { Link } from 'gatsby'
import Nav from './nav'
import React from 'react'
import styled from '@emotion/styled'

const StyledBanner = styled.header`
    position: relative;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0, .9), rgba(0,0,0, .9)), url(${Bg});
    background-size: cover;
    color: var(--white);
    background-position: top;
    background-attachment: fixed;

    .text-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        opacity: .9;
    }

    h1 {
        font-size: 8.5rem;

        @media(max-width: ${sizes.breakpoints.lg}) {
            font-size: 6.5rem;
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
        margin-top: 2.5rem;
        color: var(--white);
        border: 1px solid var(--white);

        &:hover,
        &:focus {
            background: var(--white);
            color: var(--text);
            box-shadow: ${shadows.btn1};
        }
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