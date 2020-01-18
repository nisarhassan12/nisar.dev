import React from 'react'

import IndexLayout from './index'
import Nav from '../components/Nav'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { sizes, colors, borders, shadows } from '../styles/variables'

const StyledBlogLayout = styled.div`
    margin: 7rem 0;

    .row {
        max-width: ${sizes.grid.postContainerWidth};
    }

    .container {
        background: ${colors.white};
        box-shadow: ${shadows.light};
        border: ${borders.light1};
        padding: 5rem 3rem;
    }

    .date {
        margin-bottom: 3rem;
    }

    h1 {
        margin-bottom: 3rem;
    }

    p + p {
        margin-top: 2.5rem;
    }

    blockquote {
        margin: 3rem 0;
        padding: .5rem 1.5rem; 
        background: ${colors.offWhite};
        font-size: 90%;
        border: 1px solid #eee;
        border-left: ${borders.light};
    }

    img, video {
        max-width: 100%;
    }

    video {
        display: block;
        margin: 3rem 0;
        box-shadow: ${shadows.light2};
    }

    .back {
        padding: 5rem 0;
    }
`


const BlogLayout  = ({ canonical, children, pageTitle }) => (
    <IndexLayout canonical={canonical} pageTitle={pageTitle} pageColor={colors.offWhite}>
        <StyledBlogLayout>
            <div className="container row">
                {children}
            </div>
            <div class="back row">
                <Link to="/blog">Go Back &nbsp;&rarr;</Link>
            </div>
        </StyledBlogLayout>
    </IndexLayout>
)

export default BlogLayout