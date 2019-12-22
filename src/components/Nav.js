import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, sizes } from '../styles/variables'

const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    padding: 5rem 0;

    @media(max-width: ${sizes.breakpoints.md}) {
        justify-content: center;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        &:not(:last-child) {
            margin-right: 5rem;

            @media(max-width: ${sizes.breakpoints.lg}) {
               margin-right: 3rem;
            }
        }
    }

    a {
        color: inherit;
    }
`

const Nav = () => (
    <StyledNav role="navigation" className="row">
        <ul>
            <li><Link to="/">Home.</Link></li>
            <li><Link to="/blog">Blog.</Link></li>
            <li><Link to="/about">About.</Link></li>
            <li><Link to="/work">Work.</Link></li>
        </ul>
    </StyledNav>
)

export default Nav