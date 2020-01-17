import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import Posts from '../components/Posts'
import { Link } from 'gatsby'
import usePosts from '../hooks/usePosts'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledBlogPage = styled.div`
    section {
        padding-top: 5rem;
    }
`

const BlogPage = () => {
    const posts = usePosts()
    console.log(posts)
    return (
        <IndexLayout canonical="/blog/" pageTitle="Blog" pageColor={colors.offWhite}>
            <StyledBlogPage>
                <Posts posts={posts}/>
            </StyledBlogPage>
        </IndexLayout>
    )
}

export default BlogPage