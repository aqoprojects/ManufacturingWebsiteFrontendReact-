

const Contact = () => {
  return (
    <>
      <article className='bg-white flex flex-wrap md:flex-nowrap justify-center items-center px-5 md:px-15 py-30 gap-10'>
        <section className=''>
          <h3 className='text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-black'>Empowering Top Companies With Seamless Integrations</h3>
          <p className='text-gray-500 font-medium mt-8 text-[clamp(1.0rem,3vw,1.0rem)]'>Experience seamless connections with our innovative solutions, designed to effotlessly integrate with your existing system, enhance productivity, and drive your business towards greater success.</p>

          <button className='px-7 py-4 text-gray-700 bg-lime-300/50 rounded-4xl text-md font-semibold mt-12'>Work With Us</button>
        </section>
        <section className='container'>
          <div className=' rounded-2xl md:min-w-80 '>
            <img src="../../src/assets/images/integrationImage.jpeg" className='rounded-2xl' alt="" />
          </div>
        </section>


      </article>

      <article className='bg-teal-950 flex justify-center-safe items-center-safe flex-col'>
        <p className='text-white text-center text-[clamp(1.5rem,3vw,2.5rem)] font-semibold mt-25 mb-6'>From Idea to Production in Days</p>
        <p className='text-white/70 text-[clamp(0.9rem,3vw,1.0rem)] text-center'>Accelerate your production with our technology. Reduce downtime and optimize costs. Get a special offer now!</p>
        <button className='px-7 py-3 text-gray-700 bg-lime-100 rounded-4xl text-md font-semibold mt-12 mb-20'>Work With Us</button>
      </article>
    </>
  )
}

export default Contact