import React from 'react'
import { steps } from '../../assets/data/data'

const CreatePlanSteps = () => {
  return (
    <div className="mt-16 bg-[url('/src/assets/images/plan/desktop/bg-steps.png')] bg-no-repeat bg-center bg-cover py-16 px-2 sm:px-5 lg:px-10 rounded-md">
      <div className='hidden md:block md:relative'>
        <div className='h-1 bg-[#fbd6b9] w-[68%] md:ml-4'></div>
        <div className='md:absolute md:grid md:grid-cols-3 gap-6 md:w-full md:-top-3'>
            <div className='size-7 border-2 border-[var(--color-accent)] rounded-full'></div>
            <div className='size-7 border-2 border-[var(--color-accent)] rounded-full'></div>
            <div className='size-7 border-2 border-[var(--color-accent)] rounded-full'></div>
        </div>
      </div>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-3 md:mt-20'>
        {
          steps.map(step => (
            <div key={step.stepNumber} className='flex flex-col gap-6 text-center md:text-left'>
                <h1 className='text-5xl lg:text-7xl text-[#fbd6b9] font-extrabold'>{'0' + step.stepNumber}</h1>
                <h2 className='text-2xl text-white'>{step.name}</h2>
                <p className='text-[var(--color-secondary)]'>{step.discription}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CreatePlanSteps;