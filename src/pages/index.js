import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import { Link } from 'gatsby'

const IndexPage = () => (
    <IndexLayout canonical="/">
        <Banner 
            title="Hi! I'm Nisar"
            para={<p>A front end web developer and interface designer <span>&mdash;</span><br/>who builds UX rich, accessible & perfomant websites.</p>}
            btn={<Link to="/contact" className="btn btn--small btn--dark">Need help? Get in touch...</Link>}
        />
    </IndexLayout>
)

export default IndexPage