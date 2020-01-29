import React from 'react'

import styled from '@emotion/styled'
import { shadows, sizes } from '../styles/variables'

const StyledProject = styled.div`
    display: flex;
    justify-content: space-between;


    @media(max-width: 1280px) {
        flex-direction: column;
        max-width: ${sizes.grid.smallWrapperWidth};
    }

    &:not(:last-of-type) {
        margin-bottom: 14rem;
    }

    .preview {
        display: flex;

        box-shadow: ${shadows.light2};
        transition: all .25s;

        @media(max-width: 1280px) {
            margin-bottom: 5rem;
        }

        @media(min-width: 1280px) {
            flex-basis: 70%;
            max-width: 70rem;
        }

        img, video {
            width: 100%;
            height: 100%;
        }

        &:hover {
            transform: scale3d(1.025, 1.025, 1.025);
        }
    }

    .content {
        @media(min-width: 1280px) {
            display: flex;
            align-items: center;
            flex: 1;
            padding-left: 5rem;
        }
    }

    .text {
        & > * {
            margin-bottom: 2rem;
        }
    }

    h3 {
        font-size: 3.8rem;
        font-weight: 300;
    }

    p {
        @media(min-width: ${sizes.breakpoints.lgx}) {
            font-size: 95%;
        }
    }

`

const Project = ({ title, description, path, video, url }) => (
    <StyledProject>
        <a className="preview" href={url} target="_blank">
            { !video ? 
                <img alt={title} src={path}/> :
                <video autoPlay loop muted playsInline>
                    <source src={video} type="video/mp4"/>
                </video> }
        </a>
        <div className="content">
            <div className="text">
                <h3>{title}</h3>
                <p>{description}</p>
                <a className="btn btn--small" href={url}>Visit site &nbsp;&rarr;</a>
            </div>
        </div>
    </StyledProject>
)

export default Project