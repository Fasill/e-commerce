import React ,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {info} from '../../store/navbar.js';

const SideBar = () => {
  const dispatch = useDispatch();
  const navValue = useSelector((state) => state.nav.value.collapse);
    const [clicked,setClicked] = useState(false)

      

      useEffect(()=>{
        setClicked(navValue)
        console.log("ye",navValue)
        },[navValue])
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
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className=" min-h-full text-base-content bg-white w-full max-w-[480px]">
            <div className='h-[56px] flex items-center pl-8 border-b-2  '>
              <h1 className='text-[18px] font-bold ' >Your sCart</h1>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
