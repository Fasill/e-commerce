import React from 'react'
import style from './style.module.css'
const Transition = () => {
  return (
    <div
        className={`${style.bg} h-[35rem] `}
        
    >   <div className=' bg-gradient-to-b from-[rgba(253,253,253,0)] to-[rgba(0,0,0,0.68)]  h-full w-full flex justify-end items-center p-20'>
        <div className='grid w-full max-w-[35rem] text-white gap-5 '> 
            <h1 className='font-bold text-[45px] text-right'>How we're keeping you safe during COVID-19</h1>
            <p1 className='text-[18px] text-right w-[24rem] justify-self-end' >As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.</p1>
            <button className='bg-white rounded text-black font-bold w-[211px] h-[36px] justify-self-end hover:bg-[rgb(235,87,87)] hover:text-white transition-all duration-300'>Read Our Statement</button>

        </div>
        </div>
    
     
    </div>
  )
}

export default Transition;