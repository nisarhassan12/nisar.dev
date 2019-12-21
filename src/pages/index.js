import React from 'react'

import IndexLayout from '../layouts/index'
import HomePageBanner from '../components/HomePageBanner'

const IndexPage = () => (
    <IndexLayout canonical="/">
        <HomePageBanner />
    </IndexLayout>
)

export default IndexPage