import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import { ConfigProvider } from 'antd'
import PostDetail from './components/PostDetail'

const App = () => {
  const [posts,setPosts] = useState([])

    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
    }

    useEffect(() => {
      fetchPosts()
    }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "blog",
      element: <Blog posts={posts} />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "blog/post/:id",
      element: <PostDetail posts={posts} />,
    },
  ])
  return (
    <ConfigProvider>
      <RouterProvider router={router}/>
    </ConfigProvider>
  )
}

export default App