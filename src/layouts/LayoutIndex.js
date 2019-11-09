import React from 'react'

import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { sizes, colors } from '../utils/variables'

const LayoutIndex = ({ canonical, children }) => {
    const { title, description } = useSiteMetadata()

    return (
        <>
            <Global styles={css`
                /* --------------------------------------------- */
                /* ----- Basic Setup ----- */
                /* --------------------------------------------- */
    
                *,
                *::before,
                *::after {
                    margin: 0;
                    padding: 0;
                    box-sizing: inherit;
                }
    
                html {
                    font-size: 62.5%;
                }
    
                body {
                    font: 300 ${sizes.normal}/1.6 'Josefin sans', sans-serif; 
                    color: ${colors.white};
                    background: ${colors.darkGrey};
                    box-sizing: border-box;
                    overflow-x: hidden;
                }

                /* --------------------------------------------- */
                /* ----- Typography ----- */
                /* --------------------------------------------- */

                h1,
                h2,
                h2, 
                h4 {
                    line-height: 1.1;
                    font-weight: 400;
                }

                /* --------------------------------------------- */
                /* ----- Layout ----- */
                /* --------------------------------------------- */

                .row {
                    margin: 0 auto;
                    max-width: ${sizes.girdMaxWidth};
                }

            `} />
            <Helmet>
                <meta lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={`https://nisar.dev/${canonical ? canonical : ''}`}/>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap" rel="stylesheet" />
            </Helmet>
            <>
                {children}
            </>
        </>
    )
}

export default LayoutIndex