import { Flex } from 'antd'
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'
import { Link } from 'react-router-dom'
import styles from './PostList.module.scss'

const PostList = ({posts}) => {
    
    
  return (
    <Flex vertical style={{marginTop:'50px'}}>
      {posts.map(post => (
         <Link key={post.id} to={`post/${post.id}`} className={styles.navlink}>
         <PostItem  title={post.title} posts={posts} />
         </Link>
      ))}
    </Flex>
  )
}

export default PostList