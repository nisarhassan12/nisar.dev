import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../utils/variables'

const StyledNav = styled.div`
    .nav {
        display: flex;
        justify-content: flex-end;
        padding: 3rem 0;

        &__items {
            display: flex;
            list-style: none;
        }

        &__item {
            &:not(:last-child) {
                margin-right: 8rem;
            }
        }

        &__link {
            position: relative;
            font-weight: 300;
            color: ${colors.white};
            text-decoration: none;
            text-transform: uppercase;
            transition:  all .2s;

            &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 100%;
                display: block;
                height: 1px;
                background: ${colors.white};
                transition: all 0.2s ease-in-out;
            }

            &:hover {
                color: ${colors.pink};
                &::after {
                    background: ${colors.pink};
                    right: 0;
                }
            }
        }
    }
`

const Nav = () => (
    <StyledNav>
        <nav className="nav row">
            <ul className="nav__items">
                <li className="nav__item"><a className="nav__link" href="/">Home</a></li>
                <li className="nav__item"><a className="nav__link" href="/">Blog</a></li>
                <li className="nav__item"><a className="nav__link" href="/">Projects</a></li>
            </ul>
        </nav>
    </StyledNav>
)

export default Nav