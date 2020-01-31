import React from 'react'

import styled from '@emotion/styled'
import { borders } from '../../styles/variables'

const StyledSkillset = styled.section`
    border: ${borders.light};

    ul {
        display: grid;
        list-style: initial;
        list-style-position: inside;
        margin-top: 2rem;
    }

    li {
    
    }
`

const Skillset = () => (
    <StyledSkillset>
        <div className="row">
            <div className="wrapper">
                <h2 className="heading--underlined">My Skillset</h2>
                <p>I love simplicity so i try making things as simple as possible. I am also very concerned about best practices and always sacrifice developer experience over user experience.</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    </StyledSkillset>
)

export default Skillset