import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "about",
      element: <About />,
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App