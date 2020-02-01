import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { sizes, colors } from '../styles/variables'

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
        position: relative;
        display: block;
        color: inherit;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 100%;
            display: block;
            height: 1px;
            background: ${colors.text};
            transition: all .4s cubic-bezier(0,.5,0, 1);
        }

        &:hover::after,
        &:focus::after {
            right: 0;
        }
    }

    .active {
        text-shadow: 0 1px 0px rgba(0,0,0, .45);
    }
`

const Nav = () => (
    <StyledNav role="navigation">
        <ul>
            <li><Link activeClassName="active" to="/">Home.</Link></li>
            <li><Link activeClassName="active" to="/blog">Blog.</Link></li>
            <li><Link activeClassName="active" to="/work">Work.</Link></li>
            <li><Link activeClassName="active" to="/contact">Contact.</Link></li>
        </ul>
    </StyledNav>
)

export default Nav