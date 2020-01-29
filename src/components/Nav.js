import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { sizes } from '../styles/variables'

const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;

    @media(max-width: 450px) {
        justify-content: center;
    }

    ul {
        display: flex;
        padding: 5rem 0;

        @media(max-width: ${sizes.breakpoints.lg}) {
            padding: 3.5rem 0;
        }

        @media(max-width: 450px) {
            justify-content: space-between;
            padding: 3rem 0;
            width: 100%;
        }

    }

    li {
        &:not(:last-child) {
            margin-right: 5rem;

            @media(max-width: ${sizes.breakpoints.lg}) {
               margin-right: 3rem;
            }

            @media(max-width: 450px) {
               margin-right: 0;
            }
        }
    }

    a {
        display: block;
        color: inherit;
    }
`

const Nav = () => (
    <StyledNav role="navigation">
        <ul>
            <li><Link to="/">Home.</Link></li>
            <li><Link to="/blog">Blog.</Link></li>
            <li><Link to="/work">Work.</Link></li>
            <li><Link to="/contact">Contact.</Link></li>
        </ul>
    </StyledNav>
)

export default Nav