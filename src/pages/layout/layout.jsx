import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.js';
import Footer from '../../components/navbar/Footer.js';
import SideBar from '../../components/navbar/sideBar.js';

const Layout = () => {
  return (
    <div className=''>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <SideBar/>
    </div>
  )
}

export default Layout