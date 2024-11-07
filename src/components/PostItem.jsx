import { Flex } from 'antd'
import React from 'react'
import styles from './PostItem.module.scss'

const PostItem = ({title}) => {
  return (
    <Flex vertical  className={styles.PostItem} gap='5px'>
      <p className={styles.date}>27 August 2024</p>
      <p>{title}</p>
    </Flex>
  )
}

export default PostItem