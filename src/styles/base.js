import React from 'react'
import { Global, css } from '@emotion/core'

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
            box-sizing: border-box;
        }
    `}
/>

export default GlobalStyles