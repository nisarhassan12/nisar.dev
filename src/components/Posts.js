import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'
import Post from './Post'

const StyledPosts = styled.section`
    background: ${colors.offWhite};

    .posts {
       max-width: 92rem;
    }

    .post-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > * {
            margin-bottom: 6rem;
        }
    }

    h1 {
        margin-bottom: 4rem;
    }

    a {
        color: ${colors.text};
    }
`

const Posts = ({posts}) => (
    <StyledPosts id="posts">
        <div className="row">
           <div className="posts">
                <h1 className="heading--underlined">Articles</h1>
                <div className="post-container">
                    {
                        posts.map((post, i) => <Post key={i} {...post}/>)
                    }
                </div>
           </div>
        </div>
    </StyledPosts>
)

export default Posts