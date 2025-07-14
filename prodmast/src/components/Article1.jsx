import React from 'react';
import '../assets/css/Article1.css';
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineAvTimer } from "react-icons/md";
import { VscGithubProject } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTrendingUpSharp } from "react-icons/io5";




const Article1 = () =>
{
  return (
    <div className='pb-25'>
      <h1 className='text-center pl-2 pr-2 capitalize text-[clamp(1.5rem,4vw,7rem)] font-bold bg-gradient-to-br from-black to-green-800 text-transparent bg-clip-text mt-10 transform heading-animation dark:bg-gradient-to-br dark:from-blue-800 dark:to-purple-300'>The Future of Manufacturing <br /> with the latest technology</h1>

      <p className='text-center text-xl mt-5 font-medium heading-animation'>Expert tech to elevate your manufacturing. Let's take your business futher.</p>

      <div className='w-full flex items-center-safe justify-center-safe space-x-4 mt-10 heading-button-animation'>
        <button className='px-5 py-3 bg-cyan-950 rounded-full text-white font-medium'>Get Started</button>
        <button className='px-7 py-3 bg-white rounded-full text-cyan-950 border-1 border-gray-300 font-medium'>Try Demo</button>
      </div>


      <div className='px-1 lg:px-10 relative space-y-5 lg:flex flex-wrap  lg:mt-10 lg:flex-nowrap justify-center-safe items-end-safe lg:space-x-10  z-50'>
        <div className='absolute w-[95dvw] flex flex-col justify-center-safe items-center-safe -top-18 lg:top-0   mx-auto heading-review-animation'>
          <div className='flex space-x-2 justify-center-safe items-center-safe'>
            <div className='mb-1'>
              <RiStarSFill className='text-amber-400 inline size-6' />
              <RiStarSFill className='text-amber-400 inline size-6' />
              <RiStarSFill className='text-amber-400 inline size-6' />
              <RiStarSFill className='text-amber-400 inline size-6' />
              <RiStarSFill className='text-amber-400 inline size-6' />
            </div>
            <span className='font-semibold'>5.0</span>
          </div>
          <p className=' text-gray-500 text-center font-semibold dark:text-white/75 '>from 80+ <span className='font-medium underline text-black dark:text-white'>reviews</span></p>
        </div>

        <div className='mt-25  w-full lg:w-70 h-90 bg-red-400 bg-[url(/src/assets/images/constructionImage.jpg)] bg-center rounded-2xl heading-info-animation-1 transform   lg:mt-0'></div>

        <div className='w-full lg:w-50 h-70 bg-cyan-950 flex flex-col justify-center-safe items-center-safe space-y-3 rounded-3xl heading-info-animation-2'>
          <p className='font-semibold text-white text-4xl'>100+</p>
          <p className='text-white font-light text-center'>Our Esteemed <br /> Clients and <br /> Patners</p>
        </div>

        <div className='w-full lg:w-65 h-auto bg-white shadow-xs shadow-gray-400 px-10 pt-6 rounded-2xl heading-info-animation-3'>
          <div className='flex relative justify-between mb-4'>
            <div className='p-2 bg-lime-200 rounded-lg'>
              <VscGithubProject className='size-6 dark:text-black' />
            </div>
            <BsThreeDotsVertical className='dark:text-black' />
          </div>
          <div className='flex  items-center-safe flex-nowrap'>
            <p className='text-lg font-normal dark:text-black text-nowrap'>Total Projects</p>
            <IoTrendingUpSharp className='ml-1 bg-cyan-950 size-5 text-white p-1 rounded-full mr-1' />
            <p className='text-cyan-950'>8%</p>
          </div>
          <p className='font-semibold text-4xl mb-3 mt-2 dark:text-black'>1951+</p>
          <p className='text-gray-600 text-sm pb-5'>Increae of <span className='text-green-400'>126</span> this month</p>
        </div>


        <div className='w-full lg:w-50 h-70 bg-lime-200/60 flex flex-col justify-center-safe items-center-safe space-y-3 rounded-3xl heading-info-animation-4'>
          <p className='font-semibold text-black text-4xl dark:text-white'>6+</p>
          <p className=' text-gray-700 font-medium text-center dark:text-white'>Years of <br /> Dedicated <br /> Service</p>
        </div>

        <div className='w-full lg:w-70 h-90 flex bg-cyan-950  items-end-safe px-6 rounded-2xl heading-info-animation-4'>
          <div className='mb-10'>
            <MdOutlineAvTimer className='size-10 text-white ' />
            <p className='font-light text-2xl text-white mt-5'>Achieve Optimal Efficiency and Boost Productivity</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Article1;