import React from 'react';

import style from './style.module.css';
import Navbar from '../../components/navbar/navbar.js';
import Support from '../support/Support.jsx';
import Transition from '../transition/transition.jsx';
import Shop from '../shop/Shop.jsx';
import Description from '../description/Discription.jsx';


const Home = () => {
  return (
    <div className='relative  '>

        <div className={` ${style.bg}   w-full h-full `}>
        <div className='  h-screen bg-gradient-to-b from-[rgba(253,253,253,0)] to-[rgba(0,0,0,0.68)]  flex items-center p-20 pt-60 max-md:pl-10'> 
          <div className='w-[50%] max-md:w-[100%]'>
          <div className='w-full  max-w-[30rem] grid gap-2 items-start justify-items-start'>
            <h1 className='font-bold text-white text-[62px] text-left max-md:text-[40px] '>
              Serving You Since 1989.
            </h1>
            <p className=' font-normal text-[18px] text-left text-white '>Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
            <button className=' transition-all duration-300 border mt-5 font-bold border-white rounded-lg p-3 text-white border-[2px] hover:bg-white hover:text-black focus:bg-white focus:text-black' >Shop Merch</button>

            </div>
          </div>
          </div>
    </div>
    <Support/>
    <Transition/>
    <Shop/>
    <Description/>

          </div>

  
  )
}

export default Home