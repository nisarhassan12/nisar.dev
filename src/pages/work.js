import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts/index'
import Work from '../components/Work'

const WorkPage = () => (
    <IndexLayout canonical="/work/" pageTitle="Work">
        <Work />
    </IndexLayout>
)

export default WorkPage