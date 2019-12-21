import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { Link } from 'gatsby'

const StyledHomePageBanner = styled.header`
    position: relative;
    height: 100vh;

    .text-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    p {
        font-size: 2.6rem;
        margin: 2rem 0;
    }

`

const HomePageBanner = () => (
    <StyledHomePageBanner role="banner" className="banner row">
        <div className="text-box">
            <h1>Hi! I'm Nisar.</h1>
            <p>A front end web developer and interface designer &mdash;<br/>who builds UX rich, accessible & perfomant websites.</p>
            <Link to="/contact" className="btn btn--small btn--dark">Need help? Get in touch...</Link>
        </div>
    </StyledHomePageBanner>
)

export default HomePageBanner