import React from 'react'

import styled from '@emotion/styled'
import { shadows } from '../styles/variables'

const StyledProject = styled.div`
    display: flex;
    justify-content: space-between;

    &:not(:last-of-type) {
        margin-bottom: 12rem;
    }

    .preview {
        display: flex;
        flex-basis: 70%;
        max-width: 70rem;
        box-shadow: ${shadows.light2};
        transition: all .25s;

        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            transform: scale3d(1.025, 1.025, 1.025);
        }
    }

    .content {
        flex: 1;
        display: flex;
        align-items: center;
    }

    .text {

        & > * {
            margin-bottom: 2rem;
        }
    }

    h3 {
        font-size: 4rem;
        font-weight: 300;
    }

    p {
        font-size: 2rem;
    }

    &:nth-of-type(2n) {
        flex-direction: row-reverse;
    }

    &:not(:nth-of-type(2n)) {
        .content {
            padding-left: 5rem;
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