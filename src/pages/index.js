import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import styled from '@emotion/styled'
import { borders } from '../styles/variables'
import TrustedBy from '../components/home/TrustedBy'
import Work from '../components/Work'
import About from '../components/home/About'

const StyledIndexPage = styled.div`
    .hack {
        @media(max-width: 912px) {
            display: none;
        }
    }

    section {
        border-top: ${borders.light};

        &:nth-of-type(2n + 2) {
            background: var(--offWhite);
        }
    }
`

const IndexPage = () => (
    <IndexLayout canonical="/">
        <StyledIndexPage>
            <Banner />
            <Work />
            <TrustedBy />
            <About />    
        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage