import React from 'react'

import styled from '@emotion/styled'
import { shadows, borders, sizes } from '../../styles/variables'
import { Link } from 'gatsby'
import GitpodIo from '../../resources/gitpod-io.png'
import Theia from '../../resources/theia-ide.png'

const StyledCraft = styled.section`

    .work {
        left: 0;
        display: flex;
        padding: 4rem 0 5rem;
        margin-bottom: 2rem;
        overflow-x: scroll;
    }

    video, img {
        display: block;
        width: 100%;
        box-shadow: ${shadows.light1};
        transition: all .2s;
        max-width: 40rem;
        min-width: 30rem;
        
        @media(min-width: ${sizes.breakpoints.md}) {
            max-width: 60rem;
            min-width: 50rem;
        }

        @media(min-width: ${sizes.breakpoints.lg}) {
            max-width: 70rem;
            min-width: 70rem;
        }

        &:hover {
            transform: scale3d(1.025, 1.025, 1.025);
        }
    }

    a {
        display: inline-block;

        &:not(:first-of-type) {
            margin-left: 8rem;
        }
    }
`

const projects = [
    {
        video: '/portfolio.mp4',
        href: 'https://nisar.suge.sh'
    }, 
    {
        img: Theia,
        href: 'https://theia-ide.org'
    },
    {
        img: GitpodIo,
        href: 'https://gitpod.io'
    },
]


const Craft = () => (
    <StyledCraft>
        <div className="row">
                <div className="wrapper">
                    <h2 className="heading--underlined">My Craft in a Nutshell</h2>
                    <p>I love simplicity so I try making things as simple as possible. I am also very concerned about best practices and always sacrifice developer experience over user experience.</p>
                </div>
        </div>

        <div className="row">
            <div className="work">
            {
                projects.map((project, i) => (
                    <a key={i} href={project.href} target="_blank" title={`Website: ${project.href}`}>
                        {
                            project.video ? 
                            <video autoPlay loop muted playsInline>
                                <source src={project.video} type="video/mp4"/>
                            </video>
                            :
                            <img src={project.img} alt={project.href.split('//')[1]}/>
                        }
                    </a>
                ))
            }
            </div>
        </div>

        <div className="row">
            <Link to="/work/" className="btn">View More &nbsp;&rarr;</Link>
        </div>
    </StyledCraft>
)

export default Craft