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

            @media(max-width: ${sizes.breakpoints.lgx}) {
                font-size: 60%;
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                font-size: 55%;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                font-size: 52%;
            }
        }

        body {
            font: 300 ${sizes.font.default}/1.6 'Josefin sans', sans-serif;
            color: ${colors.text};
            box-sizing: border-box;
            overflow-x: hidden;

            @media(max-width: ${sizes.breakpoints.sm}) {
                font: 300 ${sizes.font.default}/1.6 'Josefin sans', sans-serif;
            }
        }

        /* --------------------------------------------- */
        /* ----- Layout ----- */
        /* --------------------------------------------- */

        .row {
            margin: 0 auto;
            max-width: ${sizes.grid.maxWidth};

            @media(max-width: ${sizes.breakpoints.lgx}) {
                padding: 0 7rem;
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                padding: 0 4rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 0 1rem;
            }
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

            @media(max-width: ${sizes.breakpoints.sm}) {
                font-size: 4.5rem;
            }
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

        /* --------------------------------------------- */
        /* ----- Others ----- */
        /* --------------------------------------------- */

        br {
            @media(max-width: ${sizes.breakpoints.sm}) {
                display: none;
            }
        }

    `}
/>

export default GlobalStyles