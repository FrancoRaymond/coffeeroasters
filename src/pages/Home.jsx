import React from 'react'
import { Link } from 'react-router-dom'
import Collection from '../components/home/Collection'
import Chooseus from '../components/home/Chooseus'
import Howitworks from '../components/home/Howitworks'
import ScrollTop from '../components/ScrollTop'

const Home = () => {
  return (
    <div className='px-2 sm:px-5 md:px-10 lg:px-24'>
      <ScrollTop />
      <div 
        className="bg-[url('/src/assets/images/home/mobile/image-hero-coffeepress.jpg')]
        md:bg-[url('/src/assets/images/home/tablet/image-hero-coffeepress.jpg')]
        lg:bg-[url('/src/assets/images/home/desktop/image-hero-coffeepress.jpg')]
        bg-no-repeat bg-center bg-cover my-20 py-28 px-3 flex flex-col gap-6 md:gap-8 
        lg:py-28 text-center rounded-md items-center sm:text-left sm:items-start sm:px-10 md:px-14 lg:px-20"
      >
        <h1 className='text-5xl text-white md:text-6xl lg:text-7xl'>Great coffee<br/> made simple.</h1>
        <p className='text-[var(--color-secondary)] sm:max-w-[400px]'>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
        <Link to='/createplan'>
          <button>Create your plan</button>
        </Link>
      </div>
      <Collection /> 
      <Chooseus />
      <Howitworks />
    </div>
  )
}

export default Home;
