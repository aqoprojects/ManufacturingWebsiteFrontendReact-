import React, { useRef, useState } from 'react';
import '../assets/css/Header.css'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/ManufacturingLogo.png'
const Header = () =>
{
  const menuToggleOpen = useRef(null)
  const menuToggleClose = useRef(null)
  const mobileMenu = useRef(null)
  const handleMenu = ()=>{
    mobileMenu.current.classList.toggle('hidden')
    menuToggleOpen.current.classList.toggle('hidden')
    menuToggleClose.current.classList.toggle('hidden')
  }
  const [isLogoReady, setIsLogoReady] = useState(false)
  return (
    <>
      <header>
        <nav className='w-full mx-auto flex justify-between items-center-safe p-4'>
          <NavLink to="/">
            <img src={Logo} className={`size-15  ${isLogoReady ? '' : 'animate-pulse hidden'} `} onLoad={()=> setIsLogoReady(true)} alt="logo" />
          </NavLink>


          <div className="hidden md:flex items-center space-x-6 relative">
            <NavLink to="/" className={({ isActive }) => `relative after:content-[''] after:h-0.5 after:absolute after:left-0 after:-bottom-2 after:w-0 after:bg-black hover:after:w-full hover:after:border-amber-600 after:transition-all duration-200 hover:font-semibold ${isActive && 'active'}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `relative after:content-[''] after:h-0.5 after:absolute after:left-0 after:-bottom-2 after:w-0 after:bg-black hover:after:w-full hover:after:border-amber-600 after:transition-all duration-200 hover:font-semibold ${isActive && 'active'}`}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `relative after:content-[''] after:h-0.5 after:absolute after:left-0 after:-bottom-2 after:w-0 after:bg-black hover:after:w-full hover:after:border-amber-600 after:transition-all duration-200 hover:font-semibold ${isActive && 'active'}`}>Services</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `relative after:content-[''] after:h-0.5 after:absolute after:left-0 after:-bottom-2 after:w-0 after:bg-black hover:after:w-full hover:after:border-amber-600 after:transition-all duration-200 hover:font-semibold ${isActive && 'active'}`}>Contact</NavLink>
          </div>


          <div>
            <button className='hidden md:block bg-cyan-950 text-white dark:text-black dark:bg-white px-6 py-3 rounded-3xl cursor-pointer outline-none'>Sign Up</button>

            <button id='menu-toggle' onClick={handleMenu} className='block md:hidden cursor-pointer opacity-100 transition-opacity duration-300'>
              <IoIosMenu ref={menuToggleOpen} className='size-9' />
              <IoMdClose ref={menuToggleClose} className='hidden size-9' />
            </button>
          </div>
        </nav>
        <div ref={mobileMenu} id="mobile-menu" className="hidden z-200 absolute left-0 right-0 mt-1 bg-white dark:bg-gray-200 md:hidden">
          <div className='flex flex-col justify-center-safe'>
            <NavLink to="/" className={({ isActive }) => `text-lg hover:bg-black hover:text-white active:bg-black active:text-white p-2 py-6 dark:bg-gray-200 dark:text-black ${isActive && 'active-mobile'}` }>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-lg hover:bg-black hover:text-white active:bg-black active:text-white p-2 py-6 dark:bg-gray-200 dark:text-black ${isActive && 'active-mobile'}` }>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `text-lg hover:bg-black hover:text-white active:bg-black active:text-white p-2 py-6 dark:bg-gray-200 dark:text-black ${isActive && 'active-mobile'}` }>Services</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-lg hover:bg-black hover:text-white active:bg-black active:text-white p-2 py-6 dark:bg-gray-200 dark:text-black ${isActive && 'active-mobile'}` }>Contact</NavLink>

             <button className='mt-6 mb-3 mx-2 bg-cyan-950 text-white dark:text-white dark:bg-black  py-3 rounded-3xl cursor-pointer outline-none'>Sign Up</button>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;