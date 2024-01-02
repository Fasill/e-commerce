import style from './style.module.css';
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsInfo } from '../../store/products.js'; // Update the import path accordingly

const WhiteTent = () => {
  const productId = 0 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.jobs.value); // Assuming 'jobs' is your products slice name
  const [quantity, setQuantity] = useState(products[productId].Quantity);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Update the quantity for the specific product
    const updatedProducts = {
      ...products,
      [productId]: {
        ...products[productId],
        Quantity: quantity,
      },
    };

    // Dispatch the action to update the products in the Redux store
    dispatch(productsInfo(updatedProducts));
  };

  return (
    <div>
      <div className='bg-[rgb(34,34,34)] h-[15rem] p-4 pl-[80px] flex justify-start items-end'>
        <h1 className='text-white text-[38px] font-bold font-bold'>
        White Tent
        </h1>
      </div>

      <div className='flex w-full'>
        <div className='w-[75%] p-[80px]'>
          <div className={`${style.card1 }  h-[26rem] rounded-md`}>
            
          </div>
        </div>

        <div className='w-full pt-[80px] pr-[80px] pb-[80px]  grid gap-5 justify-start text-left'>
          <div className='grid gap-2'>
            <h2 className='text-[32px] font-bold'>White Tent</h2>
            <p>$ 200.00 USD</p>
            <p>Quantity</p>
          </div>
        <div className='flex gap-2'>
          <input
          className='transition-all duration-300 border w-[58px] p-2 outline-none  h-[40px] rounded-md border-black hover:border-[rgb(235,87,87)] focus:border-[rgb(235,87,87)]'
          type="number"
          min="0"
          
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
       
          
          />
          
          <button 
            className='transition-all text-[rgb(235,87,87)] font-bold border border-[rgb(235,87,87)] duration-300 h-[40px] w-[150px] rounded-md  hover:text-white hover:bg-[rgb(235,87,87)] '
            onClick={handleAddToCart}
            >
              Add to cart
            </button>
        </div>

        <div className='grid gap-3'>
          <h2 className='text-[32px] font-bold'>What’s a Rich Text element?</h2>
          <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
          <h3 className='text-[18px] font-bold'>Static and dynamic content editing</h3>
          <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
          <h3 className='text-[18px] font-bold'> How to customize formatting for each rich text</h3>
          <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
      
        </div>
        <h2 className='text-[32px] font-bold'>

Tweet about #AcmeOutdoors products
        </h2>
          </div>
      </div>
    
    </div>
  );
};

export default WhiteTent;
