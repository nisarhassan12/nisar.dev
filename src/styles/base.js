import React from 'react'
import { Global, css } from '@emotion/core'
import { sizes, shadows } from './variables'

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

        :root {
            --font-size-huge: 9rem;
            --font-size-large: 6.5rem;
            --font-size-large-0: 6rem;
            --font-size-medium: 5.5rem;
            --font-size-medium-1: 4.5rem;
            --font-size-medium-2: 3.5rem;
            --font-size-normal: 3rem;
            --font-size-default: 2.4rem;
            --font-size-small: 2.2rem;
            --font-size-x-small: 2.1rem;

            --wrapperMaxWidth: 1160px;
            --wrapperWidth: 806px;
            --smallWrapperWidth: 740px;
            --xSmallWrapperWidth: 540px;

            --gutter-huge: 20rem;
            --gutter-x-large: 12rem;
            --gutter-large: 8rem;
            --gutter-medium-1: 6rem;
            --gutter-medium: 4.5rem;
            --gutter-normal: 3rem;
            --gutter-small: 2rem;
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
            --white: #fff;
            --offWhite: #f4f4f4;
            --offWhite1: #e9e8e8;
            --textWhite: #c6d8d7;
            --black: #222;
            --text: #333;
            --darkGrey: #293335;
            --lightGrey: #394344;
        }

        body {
            font: 300 var(--font-size-default)/1.6 'Josefin sans', sans-serif;
            color: var(--text);
            box-sizing: border-box;
            overflow-x: hidden;
    
            @media(max-width: ${sizes.breakpoints.md}) {
                font-size: var(--font-size-small);
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                font-size: var(--font-size-x-small);
            }
        }

        section {
            padding: var(--gutter-x-large) 0;
        }

        /* --------------------------------------------- */
        /* ----- Layout ----- */
        /* --------------------------------------------- */

        .row {
            margin: 0 auto;
            max-width: var(--wrapperMaxWidth);

            @media(max-width: ${sizes.breakpoints.lgx}) {
                padding: 0 var(--gutter-large);
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                padding: 0 var(--gutter-medium);
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 0 var(--gutter-normal);
            }
        }

        .wrapper {
            max-width: ${sizes.grid.wrapperWidth};
        }

        .grey-container {
            background: var(--offWhite);
        }

        /* --------------------------------------------- */
        /* ----- Headlines & Paragraphs ----- */
        /* --------------------------------------------- */

        h1,
        h2,
        h3,
        h4 {
            line-height: 1.1;
            font-family: 'Jost', sans-serif;
            font-weight: 300;
        }

        h1, 
        h2 {
            font-weight: 300;
        }

        h1 {
            font-size: var(--font-size-large);

            @media(max-width: ${sizes.breakpoints.lg}) {
                font-size: var(--font-size-medium);
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                font-size: var(--font-size-medium-1);
            }
        }

        h2 {
            font-size: var(--font-size-large-0);

            @media(max-width: ${sizes.breakpoints.lg}) {
                font-size: var(--font-size-medium-2);
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                font-size: var(--font-size-normal);
            }
        }

        h3 {
            font-size: var(--font-size-medium-2);

            @media(max-width: ${sizes.breakpoints.md}) {
                font-size: var(--font-size-normal);
            }
        }

        .heading {
            &--underlined {
                &::after {
                    content: "";
                    display: block;
                    margin: 2rem 0 2.5rem;
                    height: 2px;
                    width: 12rem;
                    background: var(--darkGrey);

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
            color: #0269A4;
        }

        .btn {
            display: inline-block;
            border: 1px solid;
            font-size: 2.2rem;
            padding: .8rem 3rem;
            border-radius: 10rem;
            color: var(--darkGrey);
            box-shadow: ${shadows.btn};
            transition: all .2s;
            font-family: 'Jost', sans-serif;

            @media(max-width: ${sizes.breakpoints.xsm}) {
                font-size: 2rem;
                padding: .7rem 2.2rem;
            }

            &:hover,
            &:focus {
                background: var(--black);
                box-shadow: ${shadows.btn1};
                outline: none;
            }

            &:focus {
                transform: translateY(-.1rem);
            }

            &--dark {
                & {
                    color: var(--white);
                    background: var(--darkGrey);
                    border: 1px solid var(--darkGrey);
                }
            }

            &--small {
                font-size: 1.9rem;
                padding: .3rem 2rem;
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