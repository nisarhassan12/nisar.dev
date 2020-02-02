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
        const { canonical, children, pageTitle, pageColor, pageDescription } = this.props
        const prevewURL = 'https://user-images.githubusercontent.com/46004116/73603649-7ef40e00-45a7-11ea-8f35-6c2955103772.png'
        
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
                        <title>{pageTitle && `${pageTitle} | Nisar Hassan Naqvi` || data.site.siteMetadata.title}</title>}
                        <meta name="description" content={data.site.siteMetadata.description} />
                        <meta name="author" content="Nisar Hassan Naqvi" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        {canonical ? <link rel="canonical" href={`https://www.typefox.io${canonical}`} /> : null}
                        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap" rel="stylesheet" />
                        
                        <meta property="og:url" content={`https://nisar.dev/`} />
                        <meta property="og:title" content={pageTitle && `${pageTitle} | Nisar Hassan Naqvi` || data.site.siteMetadata.title}/>
                        <meta property="og:description" content={pageDescription || data.site.siteMetadata.description} />
                        <meta property="og:image" content={prevewURL} />

                        {/* <!-- Google Meta Tags --> */}
                        <meta itemprop="name" content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer" />
                        <meta itemprop="description" content={pageDescription || data.site.siteMetadata.description} />
                        <meta itemprop="image" content={prevewURL} />

                        {/* <!-- Facebook Meta Tags --> */}
                        <meta property="og:url" content="https://nisar.dev" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer" />
                        <meta property="og:description" content={pageDescription || data.site.siteMetadata.description} />
                        <meta property="og:image" content={prevewURL} />

                        {/* <!-- Twitter Meta Tags --> */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer" />
                        <meta name="twitter:description" content={pageDescription || data.site.siteMetadata.description} />
                        <meta name="twitter:image" content={prevewURL} />
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