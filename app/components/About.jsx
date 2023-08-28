import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function About() {
  return (
    <div id='about' className='w-full p-2 flex items-center py-16'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div className='col-span-2' data-aos="fade-up" data-aos-duration="3000">
        <h1 className='uppercase  text-[#5651e5]'>
          About
        </h1>
        <h2 className='py-4'>Who I Am</h2>
        <p className='py-2 text-gray-600'>
          I specialize in building mobile responsive front-end UI applications
          that connect with API’s and other backend technologies. I’m
          passionate about learning new technologies and understand there is
          more than one way to accomplish a task. Though I am most proficient
          in building front-end applications using HTML, CSS, Javascript, and
          React, I am a quick learner and can pick up new tech stacks as
          needed. I believe that being a great developer is not using one
          specific language, but choosing the best tool for the job.
        </p>
        <p className='py-2 text-gray-600'>
          I started web developement in 2020 managing multiple e-commerce
          websites on CMS platforms such as WordPress, BigCommerce, and
          Shopify. I have experience working directly with clients and taking
          mock wireframes all the way to deployed applications. In my spare
          time I run Code Commerce, a Youtube channel where I teach web
          developement and various front-end technologies.
        </p>
        <Link href='/#projects'>
         <button className='p-4 hover:opacity-70'>VIEW PROJECTS</button>
        </Link>
      </div>
      <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' data-aos="fade-up" data-aos-duration="3000">
      
        <Image width={400} height={300} src="/about.jpg" className='rounded-xl' alt='/' />
      </div>
    </div>
  </div>
  )
}

export default About