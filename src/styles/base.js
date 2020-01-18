import React from 'react'
import { Global, css } from '@emotion/core'
import { colors, sizes, borders } from './variables'

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

            @media(max-width: ${sizes.breakpoints.sm}) {
                font-size: 50%;
            }
        }

        body {
            font: 300 ${sizes.font.default}/1.6 'Josefin sans', sans-serif;
            color: ${colors.text};
            box-sizing: border-box;
            overflow-x: hidden;

            @media(max-width: ${sizes.breakpoints.sm}) {
                font: 300 ${sizes.font.sm}/1.6 'Josefin sans', sans-serif;
            }
        }

        section {
            padding: 10rem 0;
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

        .grey-container {
            background: ${colors.offWhite};
            border: ${borders.light};
        }

        /* --------------------------------------------- */
        /* ----- Headlines & Paragraphs ----- */
        /* --------------------------------------------- */

        h1,
        h2,
        h3,
        h4 {
            line-height: 1.1;
        }

        h1 {
            font-size: 5rem;
        }

        h2 {
            
        }

        .heading {
            &--underlined {
                &::after {
                    content: "";
                    display: block;
                    width: 12rem;
                    height: 2px;
                    margin: 2rem 0 5rem;
                    background: ${colors.darkGrey};
                }
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
            border: 1px solid;
            padding: .6rem 2.5rem;
            border-radius: 10rem;

            &--dark {
                color: ${colors.white};
                background: ${colors.darkGrey};
                border: 1px solid ${colors.darkGrey};            
            }

            &--small {
                font-size: 1.9rem;
                padding: .3rem 2rem;
                background: ${colors.darkGrey};
                color: ${colors.white};
                border-color: ${colors.darkGrey};
            }
        }

        /* --------------------------------------------- */
        /* ----- Lists ----- */
        /* --------------------------------------------- */

        ul {
            list-style: none;
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