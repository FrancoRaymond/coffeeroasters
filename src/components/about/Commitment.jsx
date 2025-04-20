import React from 'react'
import commitMobile from '../../assets/images/about/mobile/image-commitment.jpg'
import commitTablet from '../../assets/images/about/tablet/image-commitment.jpg'
import commitDesktop from '../../assets/images/about/desktop/image-commitment.jpg'

const Commitment = () => {
  return (
    <div className='flex flex-col gap-10 sm:flex-row md:items-center'>
        <picture className='mx-auto'>
            <source media="(min-width: 1024px)" srcSet={commitDesktop} className='rounded-md'/>
            <source media="(min-width: 640px)" srcSet={commitTablet} className='rounded-md'/>
            <img src={commitMobile} alt="Our commitment" className='rounded-md'/>
        </picture>
        <div className='text-center sm:text-left sm:w-1/2'>
            <h1 className='text-xl md:text-2xl lg:text-3xl'>Our commitment</h1>
            <p className='text-gray-500 mt-5'>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places.We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
        </div>
    </div>
  )
}

export default Commitment;
