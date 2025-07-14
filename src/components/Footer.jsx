import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-black px-2 md:px-10">
      <article className=' flex flex-wrap  items-center text-gray-300  gap-20 py-20 '>
        <div>
          <img src="/src/assets/images/Manufacturing-logo.png" alt="" className='size-25' />
          <p className='text-gray-300 '>Our solution makes Production faster and cheaper. <br /> Contact us for more infomation</p>
        </div>
        <div>
          <p className='text-lg font-semibold mb-3'>Company</p>
          <NavLink to='/about' className=' block text-md font-extralight mb-2'>About Us</NavLink>
          <p className='text-md font-extralight mb-2'>Customers</p>
          <p className='text-md font-extralight mb-2'>Newsroom</p>
          <p className='text-md font-extralight mb-2'>Events</p>
        </div>
        <div>
          <p className='text-lg font-semibold mb-3'>Industries</p>
          <p className='text-md font-extralight mb-2'>Precision Metalforming</p>
          <p className='text-md font-extralight mb-2'>Industrial Manufacturing</p>
          <p className='text-md font-extralight mb-2'>High Tech & electronics</p>
          <p className='text-md font-extralight mb-2'>Aerospace</p>
        </div>
        <div>
          <p className='text-lg font-semibold mb-3'>Products</p>
          <p className='text-md font-extralight mb-2'>Manufacturing Execution System</p>
          <p className='text-md font-extralight mb-2'>Enterprise Resource Planning</p>
          <p className='text-md font-extralight mb-2'>Quality Management System</p>
          <p className='text-md font-extralight mb-2'>Supply Chain Planning</p>
        </div>
        <div>
          <p className='text-lg font-semibold mb-3'>Get In Touch</p>
          <a className='block text-md font-extralight mb-2 text-[clamp(0.7rem,4vw,1.2rem)]' href="https://github.com/aqoprojects?tab=repositories" target="_blank" >https://github.com/aqoprojects</a>
          <div className="flex gap-2 flex-wrap">
            <FaLinkedin className="size-6 fill-white"/>
            <RiInstagramFill className="size-6 fill-white"/>
            <IoLogoFacebook className="size-6 fill-white"/>
          </div>
        </div>
        
      </article>
      <article className="text-gray-300">
        {/* <hr className="border-1 " /> */}
        <div className="flex flex-wrap justify-center md:justify-between items-center text-[clamp(0.7rem,4vw,1rem)] border-t-1 h-20 border-gray-300/30">
          <p>&copy; 2025 aqoprojects. All rights reserved</p>
          <p>Terms & Conditions <span className="ml-5">Privacy Policy</span> </p>
        </div>
      </article>
    </footer>
  )
}

export default Footer