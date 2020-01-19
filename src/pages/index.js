import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import TrustedBy from '../components/home/TrustedBy'

const StyledIndexPage = styled.div`
    .about {

    }
` 

const IndexPage = () => (
    <IndexLayout canonical="/">
        <Banner 
            title="Hi! I'm Nisar"
            para={<p>A front end web developer and interface designer <span aria-hidden="true">&mdash;</span><br/>who builds UX rich, accessible & perfomant websites.</p>}
            btn={<Link to="/contact" className="btn btn--dark">Need help? Get in touch...</Link>}
        />

        {/* ----- About ----- */}

        <section className="about grey-container">
            <div className="row">
                <div className="wrapper">
                    <h2 className="heading--underlined">About Me</h2>
                    <p>
                        I am a self-taught front end developer and interface designer from Pakistan 🇵🇰. I was always curious about computers when I was a child I got introduced to programming in school. I dropped out from universty at the age of 18 with the grand plans of becoming a great computer scientist. I started my career as a front end web developer in 2019. I currently work for <a href="https://typefox.io" target="_blank">TypeFox</a> as a freelancer where entirety of the work i do is open source.
                    </p>
                </div>
            </div>
        </section>

       {/* ----- Trusted By ----- */}

       <TrustedBy />

    </IndexLayout>
)

export default IndexPage