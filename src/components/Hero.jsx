import React, { forwardRef, useEffect } from 'react'
import HeroImg from '../assets/HeroImg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = forwardRef(({handleScrollContact}, ref) => {

  useEffect(()  => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <section id='hero' ref={ref} className='hero-section'>
      <div className='container 2xl:max-w-[1280px] px-4 h-screen flex flex-col justify-center items-center text-gray-700 gap-4 lg:flex-row overflow-hidden'>
        <div className='text-area text-center lg:text-left' data-aos='fade-right' data-aos-duration='1000' data-aos-easing="ease-in-out">
          <h1 className='text-indigo-500 font-bold text-6xl md-text-7xl lg:text-8xl'>
            <span className='block text-gray-700 text-4xl lg:text-5xl'>
              Hello I'm
            </span>
            ALBERTO
          </h1>
          <p className='mb-3 lg:text-lg'>
            As a <b className='text-indigo-500'>Full-Stack</b> web developer, I have the skills and knowledge to build beautiful and functional websites and applications.
          </p>
          <button onClick={handleScrollContact} type='button' className='mb-4 bg-indigo-500 px-4 py-2 text-white rounded-md duration-200 transition-colors hover:bg-indigo-600'>
            Hire Me
            <span className='ml-2'>
              <FontAwesomeIcon icon={faPenToSquare} />
            </span>
          </button>
        </div>
        <div className='block' data-aos='fade-left' data-aos-duration='1000' data-aos-easing="ease-in-out">
          <img 
            className='w-[90%] mx-auto sm:w-[70%] md:w-[60%] lg:w-[90%]'
            src={HeroImg} 
            alt="programming" 
          />
        </div>
      </div>
    </section>
  )
})

export default Hero