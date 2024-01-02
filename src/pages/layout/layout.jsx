import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.js';
import Footer from '../../components/navbar/Footer.js';
import SideBar from '../../components/navbar/sideBar.js';
import NavSide from '../../components/navbar/navSide.js';

const Layout = () => {
  return (
    <div className=''>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <SideBar/>
        <NavSide/>
    </div>
  )
}

export default Layout