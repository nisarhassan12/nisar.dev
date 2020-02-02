import React from 'react'
import { Global, css } from '@emotion/core'
import { colors, sizes, shadows } from './variables'

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
                font-size: ${sizes.font.md};
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                font-size: ${sizes.font.sm};
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
                padding: 0 2rem;
            }
        }

        .wrapper {
            max-width: ${sizes.grid.wrapperWidth};
        }

        .grey-container {
            background: ${colors.offWhite};
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

            @media(max-width: ${sizes.breakpoints.lg}) {
                font-size: 4.6rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                font-size: 3.7rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                font-size: 3.2rem;
            }
        }

        h2 {
            font-size: 4.5rem;

            @media(max-width: ${sizes.breakpoints.lg}) {
                font-size: 3.8rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                font-size: 3.5rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                font-size: 3rem;
            }
        }

        h3 {
            font-size: 2.9rem;

            @media(max-width: ${sizes.breakpoints.lg}) {
                font-size: 2.7rem;
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                font-size: 2.6rem;
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
                        width: 8rem;
                        margin: 1.7rem 0;
                        height: 1px;
                    }
                }
            }
        }

        /* --------------------------------------------- */
        /* ----- Buttons & Links ----- */
        /* --------------------------------------------- */

        ::-moz-focus-inner {
            border: 0;
        }

        button:focus,
        input:focus,
        select:focus,
        textarea:focus,
        a:focus {
            outline: 2px solid #9f9f9f;
        }

        body:not(.user-is-tabbing) button:focus,
        body:not(.user-is-tabbing) input:focus,
        body:not(.user-is-tabbing) select:focus,
        body:not(.user-is-tabbing) textarea:focus,
        body:not(.user-is-tabbing) a:focus {
            outline: none;
        }

        a {
            text-decoration: none;
        }

        .btn {
            display: inline-block;
            border: 1px solid;
            font-size: 2.2rem;
            padding: .8rem 3rem;
            border-radius: 10rem;
            color: ${colors.darkGrey};
            box-shadow: ${shadows.btn};
            transition: all .3s;

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

            &:hover,
            &:focus {
                box-shadow: ${shadows.btn1};
            }
        }

        /* --------------------------------------------- */
        /* ----- Lists ----- */
        /* --------------------------------------------- */

        ul {
            list-style: none;
        }

        /* --------------------------------------------- */
        /* ----- Media ----- */
        /* --------------------------------------------- */

        img,
        video {
            object-fit: contain;
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