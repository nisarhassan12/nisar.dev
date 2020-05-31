import React from 'react'
import { Link } from 'gatsby'
import Nisar from '../../resources/nisar.jpg'

import styled from '@emotion/styled'
import { shadows } from '../../styles/variables'

const Styled = styled.section`
    .contents {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 1040px) {
            flex-direction: column;
            max-width: 600px;
        }
    }

    .img-container {
        flex: 0 0 50%;

        @media(max-width: 1250px) {
            flex: 0 0 45%;
        }

        @media(max-width: 1040px) {
            margin-bottom: 6rem;
        }
    }

    img {
        display: block;
        max-width: 100%;
        box-shadow: ${shadows.light2};    
    }

    .text {
        flex: 0 0 40%;

        @media(max-width: 1250px) {
            flex: 0 0 45%;
        }
    }
`

const About = () => (
    <Styled>
        <div className="row">
            <h2 className="heading--underlined">About Me</h2>
            <div className="contents">
                <div className="img-container">
                    <img src={Nisar} alt="Nisar Hassan Naqvi" />
                </div>
                <div className="text">
                    <p>
                        My name is Syed Nisar Hassan Naqvi I am a self-taught front end developer and interface designer based in Lahore, Pakistan. I'm passionate about accessibility, performace and elegant design and things that usually make life easier for the users.
                </p>
                    <p>
                        I currently work for <a href="https://typefox.io" target="_blank">TypeFox</a> as a freelance front-end developer where almost the entirety of the work I do is open source.
                </p>
                    <p>These days I'm willing to create some helpful and valuable Open Source projects that can help the web community.</p>
                    <p>Got something to say or need any kind of help please feel free to <Link to="/contact/">reach out</Link> I'll try my best to respond back.</p>
                </div>
            </div>

        </div>

    </Styled>
)

export default About