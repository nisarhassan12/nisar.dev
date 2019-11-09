import React from 'react'

import styled from '@emotion/styled'
import Nav from './Nav'
import Background from '../resources/bg.jpg'

const StyledBanner = styled.div`
    .header {
        position: relative;
        height: 100vh;
        
        &::before {
            content: "";
            position: fixed;
            left: 0;
            right: 0;
            z-index: -1;

            display: block;
            background: linear-gradient(rgba(0,0,0, .9), rgba(0,0,0, .9)), url(${Background});
            background-size:cover;
            background-position: center;
            width: 150%;
            height: 120%;

            -webkit-filter: blur(1px);
            -moz-filter: blur(1px);
            -o-filter: blur(1px);
            -ms-filter: blur(1px);
            filter: blur(1px);
            animation: rock 10s ease-in infinite;
            animation-direction: alternate;
        }

        @keyframes rock {
           0% {
               transform: scale(1) translateY(0);
           } 
           100% {
               transform: scale(1.5) translateY(5rem);
           }
        }

        &__text-box {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            opacity: .9;
        }

        h1 {
            font-size: 6.5rem;
            
            .sub {
                font-size: 3rem;
                font-weight: 300;
            }
        }
    }
`

const Bannner = () => (
    <StyledBanner>
        <header className="header" role="banner">
            <Nav />
            <div className="row">
                <div className="header__text-box">
                    <h1>
                        <span className="main">Nisar Hassan</span>
                        <br />
                        <span className="sub">A Pakistani front-end developer & interface designer.</span>
                    </h1>
                </div>
            </div>
        </header>
    </StyledBanner>
)

export default Bannner