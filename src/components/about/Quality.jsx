import React from 'react'
import qualityMobile from '../../assets/images/about/mobile/image-quality.jpg'
import qualityTablet from '../../assets/images/about/tablet/image-quality.jpg'
import qualityDesktop from '../../assets/images/about/desktop/image-quality.jpg'

const Quality = () => {
  return (
    <div className='quality rounded-md mt-40 px-5 md:px-10 lg:px-20 py-10 flex flex-col gap-10 lg:py-20 md:flex-row-reverse'>
        <picture className='rounded-md mx-auto'>
            <source media="(min-width: 768px)" srcSet={qualityDesktop} className='rounded-md'/>
            <source media="(min-width: 640px)" srcSet={qualityTablet} className='rounded-md' />
            <img src={qualityMobile} alt="Our commitment" className='rounded-md -mt-28 lg:-mt-36'/>
        </picture>
        <div className='text-center md:text-left md:w-[90%] lg:w-[60%] lg:pr-10'>
            <h1 className='text-xl text-white md:text-2xl lg:text-3xl'>Uncompromising quality</h1>
            <p className='text-gray-300 mt-5'>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
    </div>
  )
}

export default Quality;