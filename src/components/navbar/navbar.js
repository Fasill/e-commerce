import React,{useEffect, useState} from 'react'
import cart from '../../assets/cart.svg';
import logo from '../../assets/logo.svg';
import { useDispatch,useSelector } from 'react-redux';
import {info} from '../../store/navbar.js';
import { navSideInfo } from '../../store/navSide.js';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate  = useNavigate();
  const [navSideClick, setNavSideClick] = useState(false);
  const [bttn,setbttn] = useState(1)
  const dispatch = useDispatch();
  const products = useSelector((state) => state.jobs.value);

  const handleClick = () => {
    dispatch(info({ collapse: true }));
  };
  
 
  const handleSidenavClick1 = () => {

    setbttn(2)
    dispatch(navSideInfo({ collapse: true }));
    console.log("s",bttn)

  };
  const handleSidenavClick2 = () => {

    setbttn(1)
    dispatch(navSideInfo({ collapse: false }));
    console.log("r",bttn)

  };

  

  return (
    <div className=' w-full fixed z-[9999]'>
    <div className='max-md:hidden text-white bg-[rgb(34,34,34)] w-full gap-2 p-3 flex items-center justify-center'>
      <p className='bg-[rgb(235,87,87)] p-2 rounded-3xl'>Announcement</p>
      <h1>How we're responding to COVID-19</h1>
    </div>
    <nav className='max-md:pr-10 max-md:pl-10 bg-[rgb(235,87,87)] flex justify-between items-center p-5 pr-20 pl-20 z-10'>
      <div>
        <img src={logo} />
      </div>
      <ul className='b flex w-[50%] justify-between text-white'>
        <div></div>
    <li
     className='max-xl:hidden transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'
     onClick={()=>navigate('/')}
     >
        <a href='#'>Home</a>
    </li>
    <li className='max-xl:hidden transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>About</a>
    </li> 
    <li className='max-xl:hidden transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Shop</a>
    </li> 
    <li className='max-xl:hidden transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Donate</a>
    </li> 
    <li className='max-xl:hidden transition-all duration-300 hover:bg-[rgb(34,34,34)] p-1 pr-4 pl-4 rounded-md'>
        <a href='#'>Contact</a>
    </li> 
    <div className='flex items-center justify-center gap-4'>
      <label  htmlFor="my-drawer-4" className=" cursor-pointer drawer-button   bg-[rgb(34,34,34)] p-2 pr-4 pl-4 rounded-md indicator " onClick={()=>handleClick()}>
          <span className="indicator-item badge bg-white">{products[0].Quantity+products[1].Quantity+products[2].Quantity}</span> 

          <img src={cart} />
      </label>

      <label className={`${bttn !== 1 ?'hidden':''} swap swap-rotate xl:hidden`}  onClick={()=>handleSidenavClick1()}>
    
        <input type="checkbox" />
        
        <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        
        
      </label> 
      <label className={`${bttn !== 2 ?'hidden':''} swap swap-rotate xl:hidden`} onClick={()=>handleSidenavClick2()}>
    
    <input type="checkbox" />
    
    
    <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
    
  </label> 
    </div>

</ul>


        </nav>
    </div>


  )
}

export default Navbar