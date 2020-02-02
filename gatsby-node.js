const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

exports.createPages = async ({ graphql, reporter, actions }) => {
    const { createPage } = actions
    const BlogTemplate = path.resolve('./src/templates/post.js')

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panic('failed to create docs.', result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post) => {
        createPage({
            component: BlogTemplate,
            path: `/blog/${post.node.fields.slug}`,
            context: {
                slug: post.node.fields.slug
            }
        })
    })
}