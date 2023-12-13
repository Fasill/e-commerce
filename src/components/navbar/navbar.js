import React from 'react'
import cart from '../../assets/cart.svg';
import logo from '../../assets/logo.svg';
import landscape from '../../assets/landscape.jpeg';
const Navbar = () => {
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
                <li className='transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
                    <a href='#'>Home</a>
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
                <li className='bg-[rgb(34,34,34)] p-2 pr-4 pl-4 rounded-md'>
                    <img src={cart} />
                </li>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar