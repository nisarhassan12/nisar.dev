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