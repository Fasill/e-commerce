import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { productsInfo } from '../../store/products.js'; // Update the import path accordingly

const SideBar = () => {
  const dispatch = useDispatch();

 
  const navValue = useSelector((state) => state.nav.value.collapse);
  const [clicked, setClicked] = useState(false);

  const products = useSelector((state) => state.jobs.value);

  // Filter products with quantity greater than 0
  const productsWithQuantity = Object.values(products).filter(
    (product) => product.Quantity > 0
  );

  useEffect(() => {
    console.log('ddddddd', productsWithQuantity);
  }, [products]);

  useEffect(() => {
    setClicked(navValue);
  }, [navValue]);

  const change = (productId,quantity) => {
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
  const handleRemove = (productId,quantity) => {
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
      <div className="drawer drawer-end z-[9999] ">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={clicked}
          onChange={() => setClicked(!clicked)}
        />

        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" text-base-content bg-white w-full max-w-[480px] flex flex-col h-screen ">
            
            <div className="h-[56px] flex items-center pl-8 border-b-2  ">
              <h1 className="text-[18px] font-bold">Your Cart</h1>
            </div>
            {productsWithQuantity.map((product, index) => (
              <li key={index} className=" pl-8 pr-8 border-b p-1 grid">
                {/* Render your content for each product here */}
                <div className='flex  justify-between items-center'>
                <div className={` `}>

                <div className=' flex gap-12'>
                  <div className = {` ${style[`card${index+1}`]} w-[50px] bg-red-400`}></div>
                  <div className='grid justify-items-start '>
                  <p>{product.tittle}</p>
                  <p>$ {product.price} USD</p>
                  </div>
                </div>
                </div>
                <input
                  className='transition-all duration-300 border w-[58px] p-2 outline-none h-[40px] rounded-md border-black hover:border-[rgb(235,87,87)] focus:border-[rgb(235,87,87)]'
                  type="number"
                  min="0"
                  value={product.Quantity} // Use value instead of defaultValue
                  onChange={(e) => change(index+1, parseInt(e.target.value, 10))}
                />
                </div>
                <p 
                 className='justify-self-start underline cursor-pointer hover:text-red-500 text-[13px] text-red-400'
                 onClick={()=>handleRemove(index+1,0)}
                 >Remove</p>
                  
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
