import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import Nav from './Nav'

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

const Banner = ({
    title,
    para,
    btn
}) => (
    <StyledBanner role="banner" className="banner row">
        <Nav />
        <div className="text-box">
            <h1>{title}</h1>
            { para ? para : null }
            { btn ? btn : btn }
        </div>
    </StyledBanner>
)

export default Banner