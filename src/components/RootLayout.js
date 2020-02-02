import React from 'react'
import GlobalStyles from '../styles/base'

const RootLayout = ({ children }) => (
    <>
        <GlobalStyles />
        { children }
    </>
)

export default RootLayout