import React from 'react'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import RootLayout from '../components/RootLayout'
import MainLayout from '../components/MainLayout'
import Nav from '../components/Nav'
import Footer from '../styles/Footer'
import { Global, css } from '@emotion/core'

class IndexLayout extends React.Component {

     handleFirstTab = (e) => {
        if (e.keyCode === 9) { // the "I am a keyboard user" key
            document.body.classList.add('user-is-tabbing')
            console.log(document.body.classList)
            window.removeEventListener('keydown', this.handleFirstTab)
            window.addEventListener('mousedown', this.handleMouseDownOnce)
        }
    }

    handleMouseDownOnce = () => {
        document.body.classList.remove('user-is-tabbing')
        
        window.removeEventListener('mousedown', this.handleMouseDownOnce)
        window.addEventListener('keydown', this.handleFirstTab)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleFirstTab)
    }

    render() {
        const { canonical, children, pageTitle, pageColor } = this.props
        return (
            <StaticQuery 
                query={graphql`
                    query IndexLayoutQuery {
                        site {
                            siteMetadata {
                                title
                                description
                            }
                        }
                    }
                `}
                render={(data) => <RootLayout>
                    <Helmet>
                        <html lang="en" /> 
                        <title>{pageTitle && `${pageTitle} | Nisar Hassan Naqvi` || data.site.siteMetadata.title}</title> */}
                        <meta name="description" content={data.site.siteMetadata.description} />
                        <meta name="author" content="Nisar Hassan Naqvi" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        {canonical ? <link rel="canonical" href={`https://www.typefox.io${canonical}`} /> : null}
                        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap" rel="stylesheet" />
                        
                        {/* <!-- Google Meta Tags --> */}
                        <meta itemprop="name" content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer" />
                        <meta itemprop="description" content="A personal site for Nisar Hassan Naqvi a front end web developer and interface designer and who builds UX rich accessible & performant websites. Checkout his latest articles, projects, experiments and open source work here." />
                        <meta itemprop="image" content="/site.png" />

                        {/* <!-- Facebook Meta Tags --> */}
                        <meta property="og:url" content="https://nisar.dev" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer" />
                        <meta property="og:description" content="A personal site for Nisar Hassan Naqvi a front end web developer and interface designer and who builds UX rich accessible & performant websites. Checkout his latest articles, projects, experiments and open source work here." />
                        <meta property="og:image" content="/site.png" />

                        {/* <!-- Twitter Meta Tags --> */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer" />
                        <meta name="twitter:description" content="A personal site for Nisar Hassan Naqvi a front end web developer and interface designer and who builds UX rich accessible & performant websites. Checkout his latest articles, projects, experiments and open source work here." />
                        <meta name="twitter:image" content="/site.png" />
                    </Helmet>
                    <Global styles={css`
                        body {
                            background: ${pageColor};
                        }
                    `}/>
                    {
                        canonical === '/' ? 
                            children 
                                : 
                            <>
                                <div className="row">
                                    <Nav />
                                </div>
                                <MainLayout>
                                    {children}
                                </MainLayout>
                            </>
                    }
                    <Footer />
                </RootLayout>}
            />
        )
    }
} 

export default IndexLayout