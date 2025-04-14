import React from 'react'
import { reasons } from '../../assets/data/data'

const Chooseus = () => {
  return (
    <div className=''>
        <div className='chooseus rounded-md text-center my-20 h-[760px] md:h-96 z-0'>
            <div className='bg-[#2c353e] md:bg-transparent pt-10 pb-5 flex flex-col gap-5 rounded-t-md'>
                <h2 className='text-2xl text-white'>Why choose us?</h2>
                <p className='text-gray-400 max-w-[515px] mx-auto px-5'>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            </div>  
        </div>
        <div className='flex flex-col text-center gap-5 p-5 md:grid md:grid-cols-3 -mt-[600px] md:-mt-60'>
            {
                reasons.map(reason => (
                    <div key={reason.id} className='bg-[#0e8684] py-10 flex flex-col gap-8 px-5 rounded-md'>
                        <img src={reason.image} alt="" className='size-20 mx-auto'/>
                        <h2 className='text-xl text-white'>{reason.heading}</h2>
                        <p className='text-gray-300'>{reason.discription}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Chooseus;
