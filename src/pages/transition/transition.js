import React ,{useEffect} from 'react'
import style from './style.module.css';
import {Parallax} from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Shop = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
  return (
    <Parallax
     strength={500}
     bgImage='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e83fb3a6948e1f05b20527f_nathan-dumlao-pLoMDKtl-JY-unsplash.jpg' 
        className={`${style.bg} h-[35rem] `}
        
    >   <div className=' bg-gradient-to-b from-[rgba(253,253,253,0)] to-[rgba(0,0,0,0.68)]  h-screen w-full flex justify-end items-center p-20'>
        <div
          
          className='grid w-full max-w-[35rem] text-white gap-5 '> 
            <h1 
            data-aos="fade-up"
              className='font-bold text-[45px] text-right'>How we're keeping you safe during COVID-19</h1>
            <p1 
             data-aos="fade-up"
            className='text-[18px] text-right w-[24rem] justify-self-end' >As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.</p1>
            <button
             data-aos="fade-up"
             className='bg-white rounded text-black font-bold w-[211px] h-[36px] justify-self-end hover:bg-[rgb(235,87,87)] hover:text-white transition-all duration-300'>Read Our Statement</button>

        </div>
        </div>
    
     
    </Parallax>
  )
}

export default Shop;