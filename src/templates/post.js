import React from 'react'

import { graphql } from 'gatsby'
import BlogLayout from '../layouts/blog'
import Helmet from 'react-helmet'

export const query = graphql`
    query($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
                subtitle
                image
                keywords
            }
            excerpt
            fields {
                slug
            }
            html
        }
    }
`

const PostTemplate = ({data: {markdownRemark: post}}) => (
    <BlogLayout canonical={`/blog/${post.fields.slug}`} pageTitle={post.frontmatter.title}>
        <Helmet>
            <meta name="description" content={post.frontmatter.subtitle} />
            <meta name="keywords" content={post.frontmatter.keywords}/>

            <meta property="og:url" content={`https://nisar.dev/blog/${post.fields.slug}`} />
            <meta property="og:title" content={post.frontmatter.title} />
            <meta property="og:description" content={post.frontmatter.subtitle} />
            <meta property="og:image" content={post.frontmatter.image} />

            {/* <!-- Google Meta Tags --> */}
            <meta itemprop="name" content={post.frontmatter.title} />
            <meta itemprop="description" content={post.frontmatter.subtitle} />
            <meta itemprop="image" content={post.frontmatter.image} />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://nisar.dev" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={post.frontmatter.title} />
            <meta property="og:description" content={post.frontmatter.subtitle} />
            <meta property="og:image" content={post.frontmatter.image} />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={post.frontmatter.title} />
            <meta name="twitter:description" content={post.frontmatter.subtitle} />
            <meta name="twitter:image" content={post.frontmatter.image} />
            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:site" content="@nisarhassan12"></meta>
            <meta name="twitter:creator" content={'@nisarhassan12'}></meta>
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <p className="date">{(new Date(post.frontmatter.date)).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </BlogLayout>
)

export default PostTemplate