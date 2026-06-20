import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import Login from './Pages/Login'
import Player from './Pages/Player'
import SignUp from './Pages/SignUp'



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/player/:id' element={<Player/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App