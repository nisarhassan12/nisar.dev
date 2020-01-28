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
    
            @media(max-width: ${sizes.breakpoints.md}) {
                line-height: 1.6;
            }

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
                padding: 0 1.5rem;
            }
        }

        .wrapper {
            max-width: ${sizes.grid.wrapperWidth};
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

            @media(max-width: ${sizes.breakpoints.sm}) {
                font-size: 4.5rem;
            }
        }

        h2 {
            font-size: 4.5rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                font-size: 4rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                font-size: 3.5rem;
            }
        }

        .heading {
            &--underlined {
                &::after {
                    content: "";
                    display: block;
                    margin: 2.5rem 0;
                    height: 2px;
                    width: 12rem;
                    background: ${colors.darkGrey};

                    @media(max-width: ${sizes.breakpoints.md}) {
                        margin: 2rem 0;
                    }
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

        input, 
        textarea,
        button {
            font-family: inherit;
            font-weight: 300;
            font-size: inherit;
        }

        br {
            @media(max-width: ${sizes.breakpoints.sm}) {
                display: none;
            }
        }

        /* --------------------------------------------- */
        /* ----- Utils ----- */
        /* --------------------------------------------- */
        
        .visually-hidden {
            position: absolute;
            left: -100000rem;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
        }
    `}
/>

export default GlobalStyles