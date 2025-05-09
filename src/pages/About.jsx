import React from 'react'
import Commitment from '../components/about/Commitment'
import Quality from '../components/about/Quality'
import ScrollTop from '../components/ScrollTop'
import Locations from '../components/about/Locations'
const About = () => {
  return (
    <div className='px-2 sm:px-5 md:px-10 lg:px-24'>
      <ScrollTop />
      <div className="bg-[url('/src/assets/images/about/mobile/image-hero-whitecup.jpg')]
        md:bg-[url('/src/assets/images/about/tablet/image-hero-whitecup.jpg')]
        lg:bg-[url('/src/assets/images/about/desktop/image-hero-whitecup.jpg')]
        bg-no-repeat bg-center bg-cover my-20 py-28 px-3 flex flex-col gap-6 md:gap-8 
        lg:py-28 text-center rounded-md items-center sm:text-left sm:items-start sm:px-10 md:px-14 lg:px-20"
      >
        <h1 className='text-5xl text-white md:text-6xl lg:text-7xl'>About us</h1>
        <p className='text-[var(--color-primary)] sm:max-w-[400px]'>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
    </div>
    <Commitment />
    <Quality />
    <Locations />
    </div>
  )
}

export default About;
