import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.js';
const Layout = () => {
  return (
    <div className='relative  w-screen'>
        <Navbar/>
        <Outlet/>
        

    </div>
  )
}

export default Layout