import { Global, css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';

import BackToTop from '../components/BackToTopButton';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import MainLayout from '../components/MainLayout';
import Nav from '../components/Nav';
import React from 'react';
import RootLayout from '../components/RootLayout';
import { handleFirstTab } from '../utils/accessibility';

const prevewURL =
  'https://user-images.githubusercontent.com/46004116/74350530-a9c83880-4dd7-11ea-8578-05610cf855aa.png';

class IndexLayout extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', handleFirstTab);
  }

  render() {
    const {
      canonical,
      externalCanonical,
      children,
      pageTitle,
      pageColor,
      pageDescription,
    } = this.props;

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
        render={(data) => (
          <RootLayout>
            <Helmet>
              <html lang="en" />
              <title>
                {(pageTitle && `${pageTitle} | Nisar Hassan Naqvi`) ||
                  data.site.siteMetadata.title}
              </title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
              <meta name="author" content="Nisar Hassan Naqvi" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              {canonical && !externalCanonical ? (
                <link rel="canonical" href={`https://nisar.dev${canonical}`} />
              ) : null}
              {externalCanonical ? (
                <link rel="canonical" href={externalCanonical} />
              ) : null}
              <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/apple-icon-57x57.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/apple-icon-60x60.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/apple-icon-72x72.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/apple-icon-76x76.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/apple-icon-114x114.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/apple-icon-120x120.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/apple-icon-144x144.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/apple-icon-152x152.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-icon-180x180.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/android-icon-192x192.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon-96x96.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/manifest.json" />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta
                name="msapplication-TileImage"
                content="/ms-icon-144x144.png"
              />
              <meta name="theme-color" content="#ffffff" />
              <meta property="og:url" content={`https://nisar.dev/`} />
              <meta
                property="og:title"
                content={
                  (pageTitle && `${pageTitle} | Nisar Hassan Naqvi`) ||
                  data.site.siteMetadata.title
                }
              />
              <meta
                property="og:description"
                content={pageDescription || data.site.siteMetadata.description}
              />
              <meta property="og:image" content={prevewURL} />
              {/* <!-- Google Meta Tags --> */}
              <meta
                itemprop="name"
                content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer"
              />
              <meta
                itemprop="description"
                content={pageDescription || data.site.siteMetadata.description}
              />
              <meta itemprop="image" content={prevewURL} />
              {/* <!-- Facebook Meta Tags --> */}
              <meta property="og:url" content="https://nisar.dev" />
              <meta property="og:type" content="website" />
              <meta
                property="og:title"
                content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer"
              />
              <meta
                property="og:description"
                content={pageDescription || data.site.siteMetadata.description}
              />
              <meta property="og:image" content={prevewURL} />
              {/* <!-- Twitter Meta Tags --> */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Nisar Hassan Naqvi - Frontend Web Developer and Interface Designer"
              />
              <meta
                name="twitter:description"
                content={pageDescription || data.site.siteMetadata.description}
              />
              <meta name="twitter:image" content={prevewURL} />
              <link
                href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Jost:wght@300&display=swap"
                rel="stylesheet"
              />
            </Helmet>
            <Global
              styles={css`
                body {
                  background: ${pageColor};
                }
              `}
            />
            {canonical === '/' ? (
              children
            ) : (
              <>
                <div className="row">
                  <Nav />
                </div>
                <MainLayout>{children}</MainLayout>
              </>
            )}
            <Footer />
            <BackToTop />
          </RootLayout>
        )}
      />
    );
  }
}

export default IndexLayout;
