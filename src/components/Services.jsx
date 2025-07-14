import { FaCircleCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <article className="bg-neutral-950 w-full">
        <div className="text-white mx-auto pt-25">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] text-center font-medium leading-11 ">Tailored Palns for Your <br /> Manufacturing Scale</h2>
          <p className="text-center text-gray-300 mt-6 text-md">Flexible pricing for any business size.</p>
        </div>

        <section className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 mt-15">
          <div className="bg-neutral-900 flex-1 lg:max-w-fit rounded-2xl p-8">
            <div>
              <p className="text-2xl font-medium text-white mb-4">Starter</p>
              <p className="text-gray-300 font-light text-sm">This Package offers the basic features you need to get started.</p>
            </div>

            <div>
              <p className="text-5xl font-bold text-white mt-12">$39 <span className="text-[1rem] font-light text-gray-500">/ month</span></p>
              <button className="border-1 border-white/80 w-[100%] py-2 rounded-3xl text-white/80 font-medium mt-5">Get Started</button>
            </div>

            <div className="pb-3">
              <p className="text-center text-white/70 mt-10 mb-6">Features</p>
              <div className="text-white font-light ">
                <div className="flex items-baseline space-x-2 space-y-4">
                   <FaCircleCheck className="size-4 text-white" />
                    <p>Production up to 10,000 units per month</p>
                </div>
                <div className="flex items-baseline space-x-2 space-y-4">
                   <FaCircleCheck className="size-4 text-white" />
                    <p>24/7 technical support</p>
                </div>
                <div className="flex items-baseline space-x-2 space-y-4">
                   <FaCircleCheck className="size-4 text-white" />
                    <p>Access the production dashboard</p>
                </div>
                <div className="flex items-baseline space-x-2 space-y-4">
                   <FaCircleCheck className="size-4 text-white" />
                    <p>Initial setup guide</p>
                </div>
              </div>
            </div>
          </div>



          <div className="bg-neutral-900 flex-1 lg:max-w-fit rounded-2xl p-8">
            <div>
              <p className="text-2xl font-medium text-white mb-4">Enterprise</p>
              <p className="text-gray-300 font-light text-sm">This Package provides full access to all prenium features.</p>
            </div>

            <div>
              <p className="text-5xl font-bold text-white mt-12">$99 <span className="text-[1rem] font-light text-gray-500">/ month</span></p>
              <button className="border-1 border-white/80 w-[100%] py-2 rounded-3xl text-white/80 font-medium mt-5">Get Started</button>
            </div>

            <div className="pb-3">
              <p className="text-center text-white/70 mt-10 mb-6">Features</p>
              <div className="text-white font-light ">
                <div className="flex items-baseline space-x-2 space-y-4">
                   <FaCircleCheck className="size-4 text-white" />
                    <p>Unlimited production units</p>
                </div>
                <div className="flex items-baseline space-x-2 space-y-4">
                   <FaCircleCheck className="size-4 text-white" />
                    <p>Dedicated account manager</p>
                </div>
                <div className="flex items-baseline space-x-2 space-y-4">
                   <FaCircleCheck className="size-4 text-white" />
                    <p>Tailored manufacturing solutions</p>
                </div>
                <div className="flex items-baseline space-x-2 space-y-4">
                   <FaCircleCheck className="size-4 text-white" />
                    <p>Predictive production optimization</p>
                </div>
              </div>
            </div>


          </div>
          
        </section>

        <section className="flex justify-center items-center w-full mt-8 px-3 pb-10">
          <div className="bg-[url(src/assets/images/wireframeImage.jpg)] flex justify-center items-center flex-col flex-1 md:max-w-230 rounded-2xl ">
            <p className="text-center text-white text-2xl mt-6">Professional</p>
            <p className="text-white mt-3 mb-8 max-w-100 text-center">Designed for greater flexibility, this solution offers advance tools for custom tailoring to your needs.</p>
            <button className="bg-white text-black px-10 py-3 rounded-3xl font-semibold mb-8">Get Started</button>
          </div>
        </section>
      </article>
    </>
  )
}

export default Services