import React from 'react'

import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'
import RootLayout from '../components/RootLayout'
import MainLayout from '../components/MainLayout'
import Nav from '../components/Nav'
import Footer from '../styles/Footer'

const IndexLayout = ({ canonical, children }) => {
    const { title, description } = useSiteMetadata()

    return (
        <RootLayout>
            <Helmet>
                <meta lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="author" content="Nisar Hassan Naqvi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {canonical ? <link rel="canonical" href={`https://www.typefox.io${canonical}`} /> : null}
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap" rel="stylesheet" />
            </Helmet>
            {
                canonical === '/' ? 
                    children 
                        : 
                    <>
                        <MainLayout>
                            {children}
                        </MainLayout>
                    </>
            }
            <Footer />
        </RootLayout>
    )
}

export default IndexLayout