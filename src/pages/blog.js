import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import Posts from '../components/Posts'
import { Link } from 'gatsby'

const BlogPage = () => (
    <IndexLayout canonical="/blog/">
       <Banner 
        title="Blog"
        para={<p>This is my little corner of the web where <br /> I wirte things, mostly about the web.</p>}
        btn={<a href="#posts" className="btn btn--small btn--dark">Let's get reading &nbsp;&rarr;</a>}
       />

       <Posts />
    </IndexLayout>
)

export default BlogPage