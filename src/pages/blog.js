import IndexLayout from '../layouts/index';
import Posts from '../components/Posts';
import React from 'react';
import styled from '@emotion/styled';
import usePosts from '../hooks/usePosts';

const StyledBlogPage = styled.div`
  section {
    padding-top: 5rem;
  }

  a {
      &:hover {
        text-decoration: none;
      }
  }
`;

const BlogPage = () => {
  const posts = usePosts();
  return (
    <IndexLayout
      canonical="/blog/"
      pageTitle="Blog"
      pageColor={'var(--offWhite)'}
    >
      <StyledBlogPage>
        <Posts posts={posts} />
      </StyledBlogPage>
    </IndexLayout>
  );
};

export default BlogPage;
