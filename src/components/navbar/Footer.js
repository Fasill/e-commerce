import React from 'react'
import { AiFillFacebook,AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo.svg';


const Footer = () => {
  return (
    <div className='bg-[rgb(34,34,34)] flex justify-between h-[188px] pb-3 pr-20 pl-20 '>
        <div className='self-center w-[30%]'><img src={logo}/></div>
        <div className='text-white flex items-end w-[30%] justify-center text-[12px]'><p>Made by <a href='https://www.linkedin.com/in/fasil-hawultie/'  target="_blank" className='underline  cursor-pointer text-[rgb(235,87,87)]'>Fasil Hawultie.</a> © 2023.</p></div>
        <div className='flex items-center justify-end gap-6  w-[30%]'> <AiFillFacebook className='fill-white scale-[2.3]'/> <AiFillTwitterSquare className='fill-white scale-[2.3]'/> <FaInstagram className='fill-white scale-[2.3]'/></div>

    </div>
  )
}

export default Footer