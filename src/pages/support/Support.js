import React, { useEffect } from 'react'
import style from './style.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Support = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
  return (
    <div className='bg-white  pb-10 grid'>
        <div className='flex gap-3 pl-20 pr-20 p-10 items-center justify-between'>
            <div className='w-[50%]grid items-start justify-start'>
            <p className='text-left text-[16px]'>WAYS TO SUPPORT</p>
            <h1 className='text-[40px] font-bold '>Support Acme Outdoors.</h1>
            </div>
            <div className='w-[50%]  '>
                <p className='text-left'>
                COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever. Below, we’ve listed the best ways to help us through this season.
                </p>
            </div>
            
        </div>
        <div 
            className='flex justify-between pl-20 pr-20'
           
            >
            <div className='w-[351px] grid gap-10'
                             data-aos="fade-up"
                             data-aos-duration="1000">
                <div


                 className='bg-[rgb(34,34,34)] rounded-xl h-[350px]  grid '>
                    <p className='text-white  font-bold text-left text-[40px] h-full max-h-[1rem] p-8'>01</p>
                    <p className='  text-[40px] font-bold text-white p-8 '>SHOP PRODUCTS</p>
                <div className='  h-[6rem]  flex justify-between self-end'>
                    <div className='bg-transparent w-[50%] h-full'>

                    </div>
                    <div className='transition-all duration-300 w-[6rem] h-full rounded-tl-full border border-white border-t-[10px] border-l-[10px] hover:border-t-[8px] hover:border-l-[8px] '>
                        
                    </div>
                </div>
                </div> 
                
                <p className='text-left'>Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</p>        
            </div>
            <div className='w-[351px] grid gap-11'
             data-aos="fade-up"
             data-aos-duration="1500" >
                <div 
                   
                    className='bg-[rgb(34,34,34)]  rounded-xl h-[350px] w-[351px] grid '>
                    <p className='text-white  font-bold text-left text-[40px] h-full max-h-[1rem] p-8'>02</p>
                    <p className=' text-[40px] font-bold text-white self-end'>DONATE</p>
                    <div className='  h-[8rem]  flex justify-between self-end p-4'>
                        <div className='bg-transparent  w-[50%] h-full'>

                        </div>
                        <div className=' transition-all duration-300 w-[6rem] h-full rounded-full border border-white border-[10px] hover:border-[8px]  '>
                            
                        </div>
                    </div>
                </div>
                <p className='text-left'>Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</p>        
            </div>
            <div className='w-[351px] grid gap-10'
                    data-aos="fade-up"
                    >
                <div 

                    className='bg-[rgb(34,34,34)] rounded-xl h-[350px] w-[351px] grid'>
                    <p className='text-white  font-bold text-left text-[40px] h-full max-h-[1rem] p-8'>03</p>
                    <p className=' text-[40px] font-bold text-white p-8'>BUT GIFT CARDS</p>
                    <div className='  h-[6rem]  flex justify-between self-end'>
                        <div className='bg-transparent w-[50%] h-full'>

                        </div>
                        <div className='transition-all duration-300 w-[6rem] h-full rounded-tl-md border border-white border-t-[10px] border-l-[10px] hover:border-l-[8px] hover:border-t-[8px]'>
                            
                        </div>
                    </div>
                </div>
                <p className='text-left'>Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.</p>                        
            </div>
            
        </div>
    </div>
  )
}

export default Support