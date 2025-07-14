import React, { useRef } from 'react';
import '../assets/css/Header.css'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
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
  return (
    <>
      <header>
        <nav className='w-full mx-auto flex justify-between items-center-safe p-4'>
          <a href="">
            <img src='../assets/images/manufacturing-logo.png' className='size-15' alt="logo" />
          </a>


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
        <div ref={mobileMenu} id="mobile-menu" className="hidden z-100 absolute left-0 right-0 mt-1 bg-white dark:bg-gray-200 md:hidden">
          <div className='flex flex-col justify-center-safe'>
            <a href="#" className="text-lg hover:bg-black hover:text-white active:bg-black active:text-white p-2 py-6 dark:bg-gray-200 dark:text-black">Home</a>
            <a href="#" className="text-lg hover:bg-black hover:text-white active:bg-black active:text-white p-2 py-6 dark:bg-gray-200 dark:text-black">About</a>
            <a href="#" className="text-lg hover:bg-black hover:text-white active:bg-black active:text-white p-2 py-6 dark:bg-gray-200 dark:text-black">Services</a>
            <a href="#" className="text-lg hover:bg-black hover:text-white active:bg-black active:text-white p-2 py-6 dark:bg-gray-200 dark:text-black">Contact</a>

             <button className='mt-6 mb-3 mx-2 bg-cyan-950 text-white dark:text-white dark:bg-black  py-3 rounded-3xl cursor-pointer outline-none'>Sign Up</button>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;