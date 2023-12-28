import React from 'react';
import style from './style.module.css';
import products from '../../assets/db.json';
import { useNavigate } from 'react-router-dom';
const Support = () => {
  const product1 = products.products[0];
  const product2 = products.products[1];
  const product3 = products.products[2];
  const navigate = useNavigate();

  return (
    <div className='bg-white pb-10 grid'>
      <div className='flex gap-3 pl-20 pr-20 p-10 items-center justify-between'>
        <div className='w-[50%]grid items-start justify-start'>
          <p className='text-left text-[16px]'>SHOP PRODUCTS</p>
          <h1 className='text-[40px] font-bold '>Open 24/7/365.</h1>
        </div>
      </div>
      <div className='flex justify-between pl-20 pr-20'>
        {/* Product 1 */}
        <div 
          className='w-[351px] grid gap-5 cursor-pointer'
          onClick={()=>navigate('products/whiteTent')}
          >
          <div
            className={`${style.card1} transition-all duration-300 hover:scale-[1.01] bg-[rgb(34,34,34)] rounded-xl h-[350px] grid shadow-xl`}
          >
            <div className='h-[6rem] flex justify-between self-end'>
              <div className='bg-transparent w-[50%] h-full'></div>
              <div className='transition-all duration-300 w-[6rem] h-full rounded-tl-full border border-white border-t-[10px] border-l-[10px] hover:border-t-[8px] hover:border-l-[8px]'></div>
            </div>
          </div>
          <div className='grid items-center justify-center gap-5'>
            <div>
              <h2 className='text-[20px]'>{product1.title}</h2>
              <p className='text-[14px] font-bold'>{product1.price}</p>
            </div>
            <button className='transition-all duration-300 bg-[rgb(235,87,87)] h-[36px] w-[107px] rounded-lg text-white hover:bg-[rgb(34,34,34)] '>
              Details
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div 
        className='w-[351px] grid gap-5 cursor-pointer'
        onClick={()=>navigate('products/CoffeeTumbler')}
        >
          <div
            className={`${style.card2} transition-all duration-300 hover:scale-[1.01] bg-[rgb(34,34,34)] rounded-xl h-[350px] grid shadow-xl`}
          >
            <div className='h-[8rem] flex justify-between self-end p-4'>
              <div className='bg-transparent  w-[50%] h-full'></div>
              <div className='transition-all duration-300 w-[6rem] h-full rounded-full border border-white border-[10px] hover:border-[8px]  '></div>
            </div>
          </div>
          <div className='grid items-center justify-items-center gap-5'>
            <div>
              <h2 className='text-[20px]'>{product2.title}</h2>
              <p className='text-[14px] font-bold'>{product2.price}</p>
            </div>
            <button className='transition-all duration-300 bg-[rgb(235,87,87)] h-[36px] w-[107px] rounded-lg text-white hover:bg-[rgb(34,34,34)] '>
              Details
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div 
          className='w-[351px] grid gap-5 cursor-pointer'
          onClick={()=>navigate('products/CanvasPack')}
          >
          <div
            className={`${style.card3} transition-all duration-300 hover:scale-[1.01] bg-[rgb(34,34,34)] rounded-xl h-[350px]  grid shadow-xl`}
 
          >
            <div className='h-[6rem] flex justify-between self-end'>
              <div className='bg-transparent w-[50%] h-full'></div>
              <div className='transition-all duration-300 w-[6rem] h-full rounded-tl-md border border-white border-t-[10px] border-l-[10px] hover:border-l-[8px] hover:border-t-[8px]'></div>
            </div>
          </div>
          <div className='grid items-center justify-items-center gap-5'>
            <div>
              <h2 className='text-[20px]'>{product3.title}</h2>
              <p className='text-[14px] font-bold'>{product3.price}</p>
            </div>
            <button className='transition-all duration-300 bg-[rgb(235,87,87)] h-[36px] w-[107px] rounded-lg text-white hover:bg-[rgb(34,34,34)] '>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
