module.exports = {
    siteMetadata: {
        title: "Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer",
        description: "A personal site for Nisar Hassan Naqvi a front end web developer and interface designer and who builds UX rich accessible & performant websites. Checkout his latest articles, projects, experiments and open source work here."
    },
    plugins: [
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/blog`
            }
        }
    ]
}