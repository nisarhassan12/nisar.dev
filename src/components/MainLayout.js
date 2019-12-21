import React from 'react'

import styled from '@emotion/styled'

const StyledMainLayout = styled.main`

`

const MainLayout = ({ children }) => (
    <StyledMainLayout role="main">
        { children }
    </StyledMainLayout>
)

export default MainLayout