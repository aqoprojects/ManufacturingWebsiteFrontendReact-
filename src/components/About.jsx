import { GoNorthStar } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { PiStackSimpleThin } from "react-icons/pi";
import { RiToolsLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { PiCubeLight } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import '../assets/css/About.css';

const About = () => {
  return (
    <>
      <article className='bg-teal-950 w-full px-4'>
      <div className='pt-22'>
        <h2 className='text-white text-[clamp(1.5rem,4vw,3.3rem)] font-medium text-center'>Efficient and Integrated <br /> Manufcturing Services</h2>
        <p className='text-center text-[clamp(0.8rem,4vw,1.1rem)] text-gray-300 mt-8 font-normal'>Simplify operations with our efficient, quality-focused services.</p>
      </div>

      <section className='grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] pl-2  gap-12  mt-20 pb-15'>
        <div className="container min-w-50 bg-white/10 backdrop-blur-3xl rounded-2xl px-5 py-7 about-loading-animation ">
          <div className="flex justify-between items-center-safe">
            <GoNorthStar className="size-12 text-white "/>
            <GoArrowUpRight className="size-8 text-white"/>
          </div>
          <div className="mt-25">
            <p className="text-white text-2xl font-semibold mb-2">Production and Assembly</p>
            <p className="conatiner max-w-80 text-white/80 font-normal ">Details on producton processes, assembly, capcity, and product types.</p>
          </div>
        </div>

         <div className="container min-w-50 bg-white/10 backdrop-blur-3xl rounded-2xl px-5 py-7 about-loading-animation">
          <div className="flex justify-between items-center-safe">
            <PiStackSimpleThin className="size-12 text-white "/>
            <GoArrowUpRight className="size-8 text-white"/>
          </div>
          <div className="mt-25">
            <p className="text-white text-2xl font-semibold mb-2">Custom Manufacturing</p>
            <p className="conatiner max-w-80 text-white/80 font-normal">Custom product creation with design and customization options.</p>
          </div>
        </div>

         <div className="container min-w-50 bg-white/10 backdrop-blur-3xl rounded-2xl px-5 py-7 about-loading-animation">
          <div className="flex justify-between items-center-safe">
            <RiToolsLine className="size-12 text-white "/>
            <GoArrowUpRight className="size-8 text-white"/>
          </div>
          <div className="mt-25">
            <p className="text-white text-2xl font-semibold mb-2">Quality Control</p>
            <p className="conatiner max-w-80 text-white/80 font-normal">Prodedures and sytem in place to ensure high product quailty</p>
          </div>
        </div>


         <div className="container min-w-50 bg-white/10 backdrop-blur-3xl rounded-2xl px-5 py-7 about-loading-animation">
          <div className="flex justify-between items-center-safe">
            <BsShieldCheck className="size-12 text-white "/>
            <GoArrowUpRight className="size-8 text-white"/>
          </div>
          <div className="mt-25">
            <p className="text-white text-2xl font-semibold mb-2">Technology and Innovation</p>
            <p className="conatiner max-w-80 text-white/80 font-normal">Details on the latest manufacturing technologies and ongoing innovations.</p>
          </div>
        </div>

         <div className="container min-w-50 bg-white/10 backdrop-blur-3xl rounded-2xl px-5 py-7 about-loading-animation">
          <div className="flex justify-between items-center-safe">
            <PiCubeLight className="size-12 text-white "/>
            <GoArrowUpRight className="size-8 text-white"/>
          </div>
          <div className="mt-25">
            <p className="text-white text-2xl font-semibold mb-2">Packaging and Logistics</p>
            <p className="conatiner max-w-80 text-white/80 font-normal">Packaging and logistics for shipping to customers and distributors.</p>
          </div>
        </div>


         <div className="container min-w-50 bg-white/10 backdrop-blur-3xl rounded-2xl px-5 py-7 about-loading-animation">
          <div className="flex justify-between items-center-safe">
            <GoGraph className="size-12 text-white "/>
            <GoArrowUpRight className="size-8 text-white"/>
          </div>
          <div className="mt-25">
            <p className="text-white text-2xl font-semibold mb-2">Consulting Market Research</p>
            <p className="conatiner max-w-80 text-white/80 font-normal">Services to help companies understand market needs and provide strategic advice.</p>
          </div>
        </div>


         
      </section>

      </article>
    </>
  )
}

export default About