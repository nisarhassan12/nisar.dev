import React, { useEffect, useRef } from 'react';
import { shadows, sizes } from '../styles/variables';

import GithubMark from '../resources/githubmark.svg';
import styled from '@emotion/styled';

const StyledProject = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column-reverse;
    max-width: var(--smallWrapperWidth);
  }

  &:not(:last-of-type) {
    margin-bottom: var(--gutter-huge);

    @media (max-width: ${sizes.breakpoints.md}) {
      margin-bottom: 15rem;
    }
  }

  .preview {
    display: flex;
    box-shadow: ${shadows.light2};
    transition: all 0.5s;
    transform: translateY(5rem);
    opacity: 0;

    @media (max-width: 1280px) {
      margin-bottom: var(--gutter-medium);
    }

    @media (min-width: 1280px) {
      flex: 0 0 65%;
    }

    img,
    video {
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale3d(1.025, 1.025, 1.025);
    }
  }

  .in-view {
    transform: translateY(0);
    opacity: 1;
  }

  .content {
    @media (min-width: 1280px) {
      display: flex;
      align-items: center;
      flex: 1;
      padding-right: 5rem;
    }
  }

  ul {
    font-size: 80%;
    list-style: initial;
    list-style-position: inside;
    font-family: 'Jost';
    margin-bottom: var(--gutter-small);
  }

  .links {
    display: flex;
    align-items: center;
  }

  .repo {
    transition: 0.2s;
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }

  .githubmark {
    display: block;
    height: 2.6rem;
    margin: 0 2rem;
  }

  p {
    margin: var(--gutter-small) 0;
    font-size: var(--font-size-small);
    max-width: var(--xSmallWrapperWidth);

    @media (min-width: ${sizes.breakpoints.lgx}) {
      font-size: var(--font-size-x-small);
      line-height: 1.5;
    }
  }
`;

const Project = ({ title, description, tools, path, video, url, repo }) => {
  const mediaContainerRef = useRef(null);

  const isInView = () => {
    if (mediaContainerRef.current) {
      const rect = mediaContainerRef.current.getBoundingClientRect();
      return rect.top >= -100 && rect.bottom <= window.innerHeight + 100;
    }
    return false;
  };

  const toggleInViewClass = () => {
    if (isInView()) {
      mediaContainerRef.current.classList.add('in-view');
    }
  };

  const scrollHandler = () => {
    toggleInViewClass();
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    toggleInViewClass();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <StyledProject>
      <div className="content">
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
          {tools && tools.length ? (
            <ul>
              {tools.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
          ) : null}
          <div className="links">
            <a
              className="btn btn--small btn--dark"
              target="_blank"
              title={`Visit ${title} website`}
              href={url}
            >
              Visit site &nbsp;&rarr;
            </a>
            {repo ? (
              <a
                href={`https://github.com/${repo}/`}
                className="repo"
                target="_blank"
                title={`${title} Github Repo.`}
              >
                <img className="githubmark" alt="GitHub" src={GithubMark} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <a className="preview" ref={mediaContainerRef} href={url} target="_blank">
        {!video ? (
          <img alt={title} src={path} />
        ) : (
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
        )}
      </a>
    </StyledProject>
  );
};

export default Project;
