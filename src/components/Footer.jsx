import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/footer-logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import instagram from '../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='px-2 sm:px-5 md:px-10 lg:px-24 mt-20'>
        <div className='mb-10 bg-[#2c353e] py-10 flex flex-col gap-10 items-center md:w-full md:px-3 lg:px-10 md:flex-row'>
            <img src={logo} alt="" className='w-52'/>
            <ul className='flex gap-3 flex-col items-center px-2 h-fit md:grow text-gray-400 md:flex-row w-fit'>
                <li><Link to="/home">HOME</Link></li> 
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/createplan">CREATE YOUR PLAN</Link></li>
            </ul>
            <div className='flex gap-5 md:flex-row w-fit'>
                <img src={facebook} alt="" className='size-5'/>
                <img src={twitter} alt="" className='size-5'/>
                <img src={instagram} alt="" className='size-5'/>
            </div> 
        </div>
    </div>
  )
}

export default Footer;