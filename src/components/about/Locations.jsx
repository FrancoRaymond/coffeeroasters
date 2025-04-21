import React from 'react'
import australia from '../../assets/images/about/desktop/illustration-australia.svg'
import canada from '../../assets/images/about/desktop/illustration-canada.svg'
import uk from '../../assets/images/about/desktop/illustration-uk.svg'

const Locations = () => {
    return(
        <div className='mt-20'>
            <h1 className='text-2xl text-[var(--color-secondary)]'>Our Headquarters</h1>
            <div className='mt-20 grid grid-cols-1 gap-16 sm:grid-cols-3'>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={uk} alt="" className='size-20'/>
                    <h3>United Kingdom</h3>
                    <p className='text-[var(--color-third)] text-center'>68 Asfordby Rd<br/>Alcaston<br/>SY6 1YA<br/>+44 1241 918425</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={canada} alt="" className='size-20'/>
                    <h3>Canada</h3>
                    <p className='text-[var(--color-third)] text-center'>1528 Eglinton Avenue<br/>Toronto<br/>Ontario M4P 1A6<br/>+1 416 485 2997</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={australia} alt="" className='size-20'/>
                    <h3>Canada</h3>
                    <p className='text-[var(--color-third)] text-center'>36 Swanston Street<br/>Kewell<br/>Victoria<br/>+61 4 9928 3629</p>
                </div>
            </div>
        </div>
    )
}

export default Locations;