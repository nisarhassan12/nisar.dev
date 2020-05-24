import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import styled from '@emotion/styled'
import { borders } from '../styles/variables'
import TrustedBy from '../components/home/TrustedBy'
import Work from '../components/Work'

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

            {/* ----- Trusted By ----- */}

            <TrustedBy />

            {/* ----- About ----- */}

            <section>
                <div className="row">
                    <div className="wrapper">
                        <h2 className="heading--underlined">About Me</h2>
                        <p>
                            I am a self-taught front end developer and interface designer from Pakistan.<span className="hack">&nbsp;&nbsp;&nbsp;<br /></span>I was always curious about computers. When I was a child I was introduced to programming in school. I dropped out of universty at the age of 18 with the grand plans of becoming a great computer scientist. I started my career as a front end web developer in 2019. I currently work for <a href="https://typefox.io" target="_blank">TypeFox</a> as a freelancer where the entirety of the work i do is open source. These days I'm focusing on making Theia (Cloud & Desktop IDE) accessible and great to use on tablets.
                        </p>
                    </div>
                </div>
            </section>

        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage