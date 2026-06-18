import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'

const MainLayouts = () => {
  return (
    <div>
     
      <Outlet/>

    </div>
  )
}

export default MainLayouts