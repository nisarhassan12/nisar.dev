import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, borders } from '../styles/variables'
import { Link } from 'gatsby'

const StyledPost = styled.article`
    display: flex;
    background: ${colors.white};
    box-shadow: ${shadows.light};

    &:last-of-type {
        margin-bottom: 6rem;
    }

    .img {
        flex: 0 0 35%;
    }

    .text {
        padding: 4rem 2.5rem;
        font-size: 2rem;
        border: ${borders.light1};
    }

    h3 {
        font-size: 2.7rem;
        font-weight: 300;
        margin-bottom: 2rem;
    }

    p {
        line-height: 1.3;
        margin: 2rem 0;
    }

    .btn {
        color: ${colors.white};
    }

`

const Post = ({title, date, image, excerpt, slug}) => (
    <Link to={`/blog/${slug}`}>
        <StyledPost className="post">
            <div 
                className="img" 
                aria-hidden="true"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >&nbsp;</div>
            <div className="text">
                <h3>{title}</h3>
                <p>{(new Date(date)).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                <p>{excerpt}</p>
                <Link to={`/blog/${slug}`} className="btn btn--small">Read More &nbsp;&rarr;</Link>
            </div>
        </StyledPost>
    </Link>
)

export default Post