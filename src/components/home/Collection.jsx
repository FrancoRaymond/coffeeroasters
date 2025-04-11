import React from 'react'
import { collection } from '../../assets/data/data'

const Collection = () => {
  return (
    <div className='text-center mb-10'>
        <h1 className='collectionHeading text-4xl sm:text-8xl lg:text-[144px] xl:text-[180px] text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200'>our collection</h1>
        <div className='flex flex-col gap-20 sm:gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 pt-20 lg:pt-0 lg:-mt-10'>
            {
                collection.map(item => (
                    <div key={item.id} className=' flex flex-col gap-5 items-center text-center sm:flex sm:gap-0 md:gap-5 sm:flex-row md:flex-col md:text-center md:items-center sm:text-left sm:items-start'>
                        <img src={item.image} alt="" className='w-[40vh]'/>
                        <div>
                            <h2 className='text-xl'>{item.name}</h2>
                            <p className='text-gray-700 mt-5'>{item.discription}</p>
                        </div>    
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Collection
