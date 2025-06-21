import React from 'react'
import { img } from '../assets/img'
import SingleTabs from './SingleTabs'
import { hr } from 'framer-motion/client'

const AboutMe = () => {
  return (
    <>
    <hr />

    <div id='about' className='container sm:min-w-full xl:min-w-full min-w-full py-10 dark:bg-slate-900'>
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <img src={img.flower} alt="flower" />
        <p className='text-white md:text-4xl text-md text-center font-bold dark:text-white w-4/5'>
          I'm Vaibhav Upadhyay, a passionate MERN Stack Developer crafting scalable web applications with clean code and creative solutions. Currently based in the vibrant city of Kandivali, Mumbai, I work with clients across the globe and am always ready to take on new challenges in the world of full-stack development.
        </p>
      </div>
      <div className=''>
          <SingleTabs/> 
      </div>
    </div>
    </>
  )
}

export default AboutMe
