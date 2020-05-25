import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledFooter = styled.footer`
    padding: 5rem 0 3rem;
    color: var(--textWhite);
    background: var(--darkGrey);
    text-align: center;

    .social-links {
        display: flex;
        justify-content: center;
        margin-bottom: 5rem;
    }

    li {
        &:not(:last-child) {
            margin-right: 5rem;

            @media(max-width: ${sizes.breakpoints.sm}) {
                margin-right: 3rem;
            }
        }
    }

    a {
        color: inherit;
    }  
    
    .info {
        display: flex;
        justify-content: space-between;
        padding-top: 3rem;
        border-top: 1px solid var(--lightGrey);

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column-reverse;
        }
    }
`

const Footer = () => (
    <StyledFooter role="contentinfo">
        <div className="row">
            <ul className="social-links">
                <li><a href="https://twitter.com/nisarhassan12" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://github.com/nisarhassan12" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/nisar-hassan-naqvi-413466199/" target="_blank" rel="noreferrer">Linkedin</a></li>
            </ul>
            <div className="info">
                <p>&copy; 2020. All rights reserved.</p>
                <p>Crafted within Lahore by <a href="https://twitter.com/nisarhassan12" target="_blank">Nisar</a>.</p>
            </div>
        </div>
    </StyledFooter>
)

export default Footer

