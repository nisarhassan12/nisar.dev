import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'
import Post from './Post'

const StyledPosts = styled.section`
    background: ${colors.offWhite};

   .posts {
       max-width: 92rem;
   }

   a {
       color: ${colors.text};
   }
`

const Posts = ({posts}) => (
    <StyledPosts id="posts">
        <div className="row">
           <div className="posts">
                <h2 className="heading-underlined">Articles</h2>
                <div>
                    {
                        posts.map(post => <Post {...post}/>)
                    }
                </div>
           </div>
        </div>
    </StyledPosts>
)

export default Posts