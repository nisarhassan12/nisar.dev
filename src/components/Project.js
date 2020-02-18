import React from 'react'

import styled from '@emotion/styled'
import { shadows, sizes } from '../styles/variables'
import GithubMark from '../resources/githubmark.svg'

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

    a {
        display: inline-block;
    }

    .githubmark {
        display: inline-block;
        height: 2.6rem;
        margin: 0 2rem;
        transform: translateY(.7rem);
    }

    p {
        @media(min-width: ${sizes.breakpoints.lgx}) {
            font-size: 90%;
        }
    }

`

const Project = ({ title, description, path, video, url, repo }) => (
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
                <a className="btn btn--small btn--dark" target="_blank" href={url}>Visit site &nbsp;&rarr;</a>
                { repo ? 
                    <a href={`https://github.com/${repo}/`} target="_blank">
                        <img className="githubmark" src={GithubMark} />
                    </a> 
                : null }
            </div>
        </div>
    </StyledProject>
)

export default Project