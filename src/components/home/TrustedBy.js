import React from 'react'

import styled from '@emotion/styled'
import GitpodLogo from '../../resources/gitpod.svg'
import TypeFoxLogo from '../../resources/typefox.svg'
import TheiaLogo from '../../resources/theia.svg'
import { sizes, colors } from '../../styles/variables'

const StyledTrustedBy = styled.section`

    .logos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 5rem 0 0;


        @media(max-width: ${sizes.breakpoints.md}) {
            grid-template-columns: 1fr;
            grid-gap: 3rem;   
        }
    }

    img {
        height: 4.5rem;
        max-width: 18rem;
        filter: grayscale(1)  opacity(0.6);
        -webkit-filter: grayscale(1)  opacity(0.6);
        
        @media(max-width: ${sizes.breakpoints.lg}) {
            height: 4rem;
            max-width: 17rem;
        }
    }

`

const companies = [
    {
        url: 'https://theia-ide.org',
        img: TheiaLogo,
        alt: "Theia IDE Logo"
    },
    {
        url: 'https://typefox.io',
        img: TypeFoxLogo,
        alt: "TypeFox Logo"
    },
    {
        url: 'https://gitpod.io',
        img: GitpodLogo,
        alt: "Theia IDE Logo"
    }
]

const TrustedBy  = () => (
    <StyledTrustedBy>
            <div className="row">
                <div className="wrapper">
                    <h2 className="heading--underlined">Trusted By</h2>
                    <div className="logos">
                        {
                            companies.map((c, i) => 
                                <img 
                                    src={c.img}
                                    alt={c.alt}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
    </StyledTrustedBy>
)

export default TrustedBy