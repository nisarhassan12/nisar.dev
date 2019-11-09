import React from 'react'

import LayoutIndex from '../layouts/LayoutIndex'
import HeroIndex from '../components/HeroIndex'

const IndexPage = () => (
    <LayoutIndex canonical="/">
        <HeroIndex />
    </LayoutIndex>
)

export default IndexPage