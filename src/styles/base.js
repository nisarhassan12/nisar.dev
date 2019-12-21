import React from 'react'
import { Global, css } from '@emotion/core'
import { colors, sizes } from './variables'

const GlobalStyles = () => <Global 
    styles={css`
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
            font: 300 2.4rem/1.6 'Josefin sans', sans-serif;
            color: ${colors.text};
            box-sizing: border-box;
        }

        /* --------------------------------------------- */
        /* ----- Layout ----- */
        /* --------------------------------------------- */

        .row {
            margin: 0 auto;
            max-width: ${sizes.grid.maxWidth};
        }

        /* --------------------------------------------- */
        /* ----- Headlines ----- */
        /* --------------------------------------------- */

        h1,
        h2,
        h3 {
            line-height: 1.1;
        }

        h1 {
            font-size: 6.5rem;
        }

        /* --------------------------------------------- */
        /* ----- Buttons & Links ----- */
        /* --------------------------------------------- */

        a {
            text-decoration: none;
        }

        .btn {
            display: inline-block;
            padding: 1.5rem 2.5rem;
            color: ${colors.text};
            border: 1px solid;
            border-radius: 10rem;

            &--small {
                padding: .8rem 2rem;
                font-size: 2rem;
                font-weight: 400;
            }

            &--dark {
                color: ${colors.white};
                background: ${colors.darkGrey};
                border-color: ${colors.darkGrey};
            }
        }

    `}
/>

export default GlobalStyles