import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import Posts from '../components/Posts'
import { Link } from 'gatsby'
import usePosts from '../hooks/usePosts'
import styled from '@emotion/styled'

const StyledBlogPage = styled.div`


`

const BlogPage = () => {
    const posts = usePosts()
    console.log(posts)
    return (
        <IndexLayout canonical="/blog/" pageTitle="Blog">
            <StyledBlogPage>
                <Banner 
                    title="Blog"
                    para={<p>This is my little corner of the web where <br /> I wirte things, mostly about the web.</p>}
                    btn={<a href="#posts" className="btn btn--dark">Let's get reading &nbsp;&rarr;</a>}
                />
                <Posts posts={posts}/>
            </StyledBlogPage>
        </IndexLayout>
    )
}

export default BlogPage