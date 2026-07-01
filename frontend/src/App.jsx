import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import Login from './Pages/Login'
import Player from './Pages/Player'
import SignUp from './Pages/SignUp'
import ProtectedRouted from './Components/ProtectedRouted'
import Movies from './Pages/Movies'
import TvShow from './Pages/TvShow'
import NewAndPopular from './Pages/NewAndPopular'




const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />}>
        <Route path='movies' element={<ProtectedRouted><Movies/></ProtectedRouted>}/>
        <Route path='tv-shows' element={<ProtectedRouted><TvShow/></ProtectedRouted>}/>
        <Route path='new-and-popular' element={<ProtectedRouted><NewAndPopular/></ProtectedRouted>}/>
        
        <Route index element={<Login />} />
        <Route path='home' element={
          <ProtectedRouted>
          <Home/>
          </ProtectedRouted>
          }
           />
        <Route path='login' element={<SignUp />} />
        <Route path='player/:id' element={
          <ProtectedRouted>
          <Player />
          </ProtectedRouted>
        } />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App