import React from 'react'
import style from './style.module.css';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
const Discription = () => {
  return (
    <div className='flex justify-between p-[90px]'>
        <div></div>
        <div className='bg-[rgb(34,34,34)] w-[80%] justify-self-end flex items-center  justify-between relative rounded-lg'>
            <TiltCard />
        <div></div>
                <div className=' w-full max-w-[50%] p-[56px] grid justify-start'>
                  <h1 className='text-white text-[45px] font-bold text-left'>Shop Local.</h1>
                  <p className='text-left text-white text-[16px]'>We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.</p>
                  <p className='text-left text-white text-[16px]'>That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t. </p>
                  <p className='text-left text-white text-[16px]'>But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time. ------- </p>
                  <p className='text-left text-white text-[16px]'>Jane & John Doe</p>
                  <p className='text-left text-white text-[16px] font-bold'>Acme Outdoors</p>
                </div>
                <div></div>

        </div>
    </div>
  )
}

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10deg", "-10deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10deg", "10deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      // className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
className={`${style.card} rounded-xl bg-[rgb(189,114,114)] w-[40%] h-[440px] absolute m-[-17rem] border border-[0.5rem] border-white shadow shadow-white`}

    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="reactive absolute inset-4 grid place-content-center rounded-xl bg-transparent border border-white shadow-lg"
      >
     
       
      </div>
    </motion.div>
  );
};


export default Discription

