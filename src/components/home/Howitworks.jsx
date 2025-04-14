import React from 'react'
import { Link } from 'react-router-dom';
import { steps } from '../../assets/data/data';

const Howitworks = () => {
  return (
    <div className='mt-16'>
      <h3 className='text-gray-500 mb-16'>How it works</h3>
      <div className='hidden md:block md:relative'>
        <div className='h-1 bg-[#fbd6b9] w-[68%] md:ml-6'></div>
        <div className='md:absolute md:grid md:grid-cols-3 gap-6 md:w-full md:-top-3'>
            <div className='size-7 border-2 border-[#0e8684] rounded-full bg-white'></div>
            <div className='size-7 border-2 border-[#0e8684] rounded-full bg-white'></div>
            <div className='size-7 border-2 border-[#0e8684] rounded-full bg-white'></div>
        </div>
      </div>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-3 md:mt-20'>
        {
          steps.map(step => (
            <div key={step.stepNumber} className='flex flex-col gap-4 text-center md:text-left'>
                <h1 className='text-5xl lg:text-7xl text-[#fbd6b9] font-extrabold'>{'0' + step.stepNumber}</h1>
                <h2 className='text-2xl'>{step.name}</h2>
                <p className='text-gray-500'>{step.discription}</p>
            </div>
          ))
        }
      </div>
      <Link to="/createplan">
        <button className='my-20 flex mx-auto'>Create your plan</button>
      </Link>
    </div>
  )
}

export default Howitworks;

