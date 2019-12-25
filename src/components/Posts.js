import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledPosts = styled.section`
    border: 1px solid ${colors.offWhite1};
    background: ${colors.offWhite};
`

const Posts = () => (
    <StyledPosts id="posts">
        <div className="row">
            Posts will go here.
        </div>
    </StyledPosts>
)

export default Posts