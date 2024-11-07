import React from 'react';
import MainLayout from '../../layout/MainLayout';
import styles from './Blog.module.scss'
import PostList from '../../components/PostList';



const Blog = ({posts}) => {

  
  return (
    <MainLayout>
      <h1 className={styles.blogH1}>BLOG</h1>
      <PostList posts={posts} />
    </MainLayout>
  );
};

export default Blog;
