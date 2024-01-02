import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { navSideInfo } from '../../store/navSide.js';
import { useNavigate } from 'react-router-dom';
const NavSide = () => {
  const navigate = useNavigate()
  const navValue = useSelector((state) => state.navSide.value.collapse);
  const [clicked, setClicked] = useState(false);

  useEffect(()=>{
    console.log("sssss",navValue)
    setClicked(navValue)
  },[navValue])

   
  return (
    <div>
    <div className="drawer drawer-end  xl:hidden ">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={clicked}
        onChange={()=>setClicked(!clicked)}
      />

      <div className="drawer-side ">
        <label 
        
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="  bg-[rgb(235,87,87)] w-full  flex  flex-col h-screen pt-[10rem]  ">
        <li
     className=' text-white font-bold pt-5 pb-5 text-[20px] transition-all duration-500 cursor-pointer hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'
     onClick={()=>navigate('/')}
     >
        <a href='#'>Home</a>
    </li>
    <li className=' text-white font-bold pt-5 pb-5 text-[20px] transition-all duration-500 cursor-pointer hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>About</a>
    </li> 
    <li className=' text-white font-bold pt-5 pb-5 text-[20px] transition-all duration-500 cursor-pointer hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Shop</a>
    </li> 
    <li className=' text-white font-bold pt-5 pb-5 text-[20px] transition-all duration-500 cursor-pointer hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Donate</a>
    </li> 
    <li className=' text-white font-bold pt-5 pb-5 text-[20px] transition-all duration-500 cursor-pointer hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Contact</a>
    </li> 
          
          
        </ul>
      </div>
    </div>
  </div>
);
};

export default NavSide;
