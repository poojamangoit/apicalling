import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/users'
import Posts from './components/posts'
import Products from './components/products'
import AppRouter from './components/router'


function App() {


  return (
    <>
      {/* <Users/> */}
      {/* <Posts/> */}
      {/* <Products/> */}
      <AppRouter/>
    </>
  )
}

export default App
