import React from 'react'
import CreatePlanSteps from '../components/createplan/CreatePlanSteps';
import PlanForm from '../components/createplan/PlanForm';

const Createplan = () => {
  return (
    <div className='px-2 sm:px-5 md:px-10 lg:px-24'>
      <div className='createPlanHero my-20 py-28 px-3 flex flex-col gap-6 md:gap-8 lg:py-28 text-center rounded-md items-center sm:text-left sm:items-start sm:px-10 md:px-14 lg:px-20'>
        <h1 className='text-5xl text-white md:text-6xl lg:text-7xl'>Create a plan</h1>
        <p className='text-gray-300 sm:max-w-[400px]'>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
      </div>
      <CreatePlanSteps />
      <PlanForm />
    </div>
  )
}

export default Createplan;
