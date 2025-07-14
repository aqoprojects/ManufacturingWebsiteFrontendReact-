import { FaCircleCheck } from "react-icons/fa6";

const AboutMore = () =>
{
  return (
    <>
      <article className="bg-white px-3 flex-col flex md:flex-row justify-center-safe items-start md:px-10 py-30 mx-auto">
        <section className=" p-4  bg-gray-300/30 md:px-20 md:py-13 rounded-2xl flex justify-center items-center ">
           <div className=" shadow-md rounded-2xl shadow-gray-400">
             <img src="/src/assets/images/projectstatusImage.jpg" className="object-cover w-100 rounded-2xl" alt="" />
           </div>
        </section>
        <section className="flex flex-auto">
          <div className="pl-10 ">
            <div className="mb-10">
              <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] text-left font-semibold max-w-200 dark:text-black">Key Benefits of Our System for Your Business Efficiency</h3>
              <p className="mt-5 font-normal text-gray-600 text-xl">Our system boost productivity, cut costs and drive business growth.</p>
            </div>
            <div>
              <div className="flex space-x-5 items-baseline">
                <div>
                  <FaCircleCheck className="size-5 text-cyan-950" />
                </div>
                <div>
                  <h4 className="text-[clamp(1.1rem,4vw,1.5rem)] text-black font-bold mb-5">Boosting Quality with Tech</h4>
                  <p className="text-gray-600 text-[clamp(0.5rem,4vw,1.2rem)]">With advanced technology, we help you achieve top product quality.</p>
                  <p className="text-gray-600 text-[clamp(0.5rem,4vw,1.2rem)] mb-5">Discover how we can enhance your standards.</p>
                </div>
              </div>
              <div className="flex space-x-5 items-baseline">
                <div>
                  <FaCircleCheck className="size-5 text-cyan-950" />
                </div>
                <div>
                  <h4 className="text-[clamp(1.1rem,4vw,1.5rem)] text-black font-bold mb-5">Optimization Production Process</h4>
                  <p className="text-gray-600 text-[clamp(0.5rem,4vw,1.2rem)]">Boost factory efficiency and productivity with our innovative solutions.</p>
                  <p className="text-gray-600 text-[clamp(0.5rem,4vw,1.2rem)] mb-5">See how the latest technology can maximize your output.</p>
                </div>
              </div>
              <div className="flex space-x-5 items-baseline">
                <div>
                  <FaCircleCheck className="size-5 text-cyan-950" />
                </div>
                <div>
                  <h4 className="text-[clamp(1.1rem,4vw,1.5rem)] text-black font-bold mb-5">AI-Driven Production</h4>
                  <p className="text-gray-600 text-[clamp(0.5rem,4vw,1.2rem)] ">Leverage the power of AI to transform your manufacturing processes.</p>
                  <p className="text-gray-600 text-[clamp(0.5rem,4vw,1.2rem)] mb-5">achieving faster and more effective results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default AboutMore;