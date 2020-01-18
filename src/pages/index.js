import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledIndexPage = styled.div`
    .about {

    }
` 

const IndexPage = () => (
    <IndexLayout canonical="/">
        <Banner 
            title="Hi! I'm Nisar"
            para={<p>A front end web developer and interface designer <span>&mdash;</span><br/>who builds UX rich, accessible & perfomant websites.</p>}
            btn={<Link to="/contact" className="btn btn--dark">Need help? Get in touch...</Link>}
        />

        {/* ----- About ----- */}

        <section className="about grey-container">
            <div className="row">
                <div className="wrapper">
                    <h2 className="heading--underlined">About Me</h2>
                    <p>I am a self-taught Frontend Web Developer from Lahore, Pakistan. About three years ago is when I started my learning journey on how to make the web stunning and responsive. I have always been a curious individual, which is why I’d love to collaborate and do some real-world projects in order to flourish my skills.I'm not perfect, however. I'm very far from perfection, yet I'm resilient, assertive and stubborn and I find learning a fascinating process. I am currently learning about PWAs and my future plan is to learn about ML for Web Performance.</p>
                </div>
            </div>
        </section>
    </IndexLayout>
)

export default IndexPage