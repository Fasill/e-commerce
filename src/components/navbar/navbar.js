import React,{useEffect, useState} from 'react'
import cart from '../../assets/cart.svg';
import logo from '../../assets/logo.svg';
import { useDispatch } from 'react-redux';
import {info} from '../../store/navbar.js';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    // Dispatch the 'info' action with payload { collapse: true }
    dispatch(info({ collapse: true }));
  };
  

  return (
    <div className=' w-full fixed z-[9999]'>
    <div className='text-white bg-[rgb(34,34,34)] w-full gap-2 p-3 flex items-center justify-center'>
      <p className='bg-[rgb(235,87,87)] p-2 rounded-3xl'>Announcement</p>
      <h1>How we're responding to COVID-19</h1>
    </div>
    <nav className='bg-[rgb(235,87,87)] flex justify-between items-center p-5 pr-20 pl-20 z-10'>
      <div>
        <img src={logo} />
      </div>
      <ul className='flex w-[50%] justify-between text-white'>
    <li className='group relative p-1 pr-4 pl-4 rounded-md transition-all duration-300 hover:bg-[rgb(34,34,34)]'>
        <a href='#'>Home</a>
        <div className='absolute inset-0 bg-[rgb(34,34,34)] opacity-0 group-hover:opacity-100 transition-opacity rounded-md'></div>
    </li>
    <li className='transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>About</a>
    </li> 
    <li className='transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Shop</a>
    </li> 
    <li className='transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Donate</a>
    </li> 
    <li className='transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Contact</a>
    </li> 
    <label  htmlFor="my-drawer-4" className=" cursor-pointer drawer-button   bg-[rgb(34,34,34)] p-2 pr-4 pl-4 rounded-md indicator " onClick={()=>handleClick()}>
        <span className="indicator-item badge bg-white">99+</span> 

        <img src={cart} />
    </label>

</ul>


        </nav>
    </div>


  )
}

export default Navbar