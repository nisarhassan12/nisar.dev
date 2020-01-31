import React from 'react'

import styled from '@emotion/styled'
import { borders } from '../../styles/variables'
import { Link } from 'gatsby'

const StyledSkillset = styled.section`

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
                    <li>Accessibility</li>
                </ul>
                <Link to="/work" className="btn">My Work &nbsp;&rarr;</Link>
            </div>
        </div>
    </StyledSkillset>
)

export default Skillset