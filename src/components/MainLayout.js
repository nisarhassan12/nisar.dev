import React from 'react'

import styled from '@emotion/styled'

const StyledMainLayout = styled.main`
    min-height: 80vh;
`

const MainLayout = ({ children }) => (
    <StyledMainLayout role="main">
        { children }
    </StyledMainLayout>
)

export default MainLayout