import React from 'react'

import { graphql } from 'gatsby'
import BlogLayout from '../layouts/blog'

export const query = graphql`
    query($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            fields {
                slug
            }
            html
        }
    }
`

const PostTemplate = ({data: {markdownRemark: post}}) => (
    <BlogLayout canonical={`/blog/${post.fields.slug}`} pageTitle={post.frontmatter.title}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </BlogLayout>
)

export default PostTemplate