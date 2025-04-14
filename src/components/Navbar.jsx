import React,{ useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../App';
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
import { motion } from 'framer-motion';

const Navbar = () => {
  const { size, setIsMenuOpen, isMenuOpen } = useAppContext();

  const menuVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 }, 
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  useEffect(() => {
    isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }, [isMenuOpen])

  return (
    <div className='bg-white w-full z-50 flex justify-between items-center py-4 px-2 sm:px-5 md:px-10 lg:px-24 fixed top-0'>
      <Link onClick={closeMenu} to="/" className="text-2xl font-bold"><img src={logo} alt="" className='h-5'/></Link>
      {size < 640 ? (
      <motion.nav initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }} 
        className={`${size < 640 ? isMenuOpen ? 'activeMenu absolute block top-14 h-screen left-0 right-0 mx-auto w-full' : 'hidden' : ''}`}
      >
        <ul className={`flex gap-8 ${size < 640 ? 'flex-col items-start px-2 h-fit w-full text-white' : 'flex-row text-gray-400'}`}>
          <li><Link onClick={closeMenu} to="/home">Home</Link></li> 
          <li><Link onClick={closeMenu} to="/about">ABOUT</Link></li>
          <li><Link onClick={closeMenu} to="/createplan">CREATE YOUR PLAN</Link></li>
        </ul>
      </motion.nav>
      ) : (
        <nav className={`${size < 640 ? isMenuOpen ? 'absolute block top-14 h-screen left-0 right-0 mx-auto w-full' : 'hidden' : ''}`}>
          <ul className={`flex gap-5 ${size < 640 ? 'flex-col items-center h-fit w-full' : 'flex-row'}`}>
            <li className='hover:text-[#0e8684] transition duration-300'><Link onClick={closeMenu} to="/home">HOME</Link></li>
            <li className='hover:text-[#0e8684] transition duration-300'><Link onClick={closeMenu} to="/about">ABOUT</Link></li>
            <li className='hover:text-[#0e8684] transition duration-300'><Link onClick={closeMenu} to="/createplan">CREATE YOUR PLAN</Link></li>
          </ul>
        </nav>
      )}
      <div className={`flex gap-5 ${size > 640 ? 'hidden' : ''}`}>
        <img src={menu} alt="menu" onClick={() => setIsMenuOpen(true)} className={`${isMenuOpen ? 'hidden' : ''} size-4 cursor-pointer ${size > 640 ? 'hidden' : ''}`}/>
        <img src={close} alt="close" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? '' : 'hidden'} size-4 cursor-pointer ${size > 640 ? 'hidden' : ''}`}/>
      </div>
    </div>
  )
}

export default Navbar;
