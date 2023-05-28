import React, { forwardRef, useEffect } from 'react'
import AboutImg from '../assets/AboutImg.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javaScript from '../assets/javaScript.svg'
import react from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.svg'
import tailwind  from '../assets/tailwind.svg'
import laravel from '../assets/laravel.svg'
import mysql from '../assets/mysql.svg'
import resume from '../assets/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'react-router-dom'

const About = forwardRef((props, ref) => {
  const { about } = useParams()
  
  const frontEnd = [
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'JavaScript', image: javaScript },
    { name: 'ReactJs', image: react },
    { name: 'Bootstrap', image: bootstrap },
    { name: 'Tailwind', image: tailwind },
  ]
  
  const backEnd = [
    {name: 'Laravel(basics)', image: laravel},
  ]

  const database = [
    {name: 'mySQL(basics)', image: mysql},
  ]

  const currentYear = new Date().getFullYear()
  const prevYear = currentYear - 1
  const getYear = (year) => {
    if (year === currentYear) {
      return 'Current';
    }
    return year;
  };
  
  const experiences = [
    { year: getYear(currentYear), job: 'KodeGo Bootcamp' },
    { year: prevYear, job: 'Self-taught Web Developer' },
  ]
  const education = [
    { year: prevYear, education: 'Senior HS. Graduate at Cat College Ligao' }
  ]

  useEffect(()  => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <section id='about' ref={ref} className='about-section py-20'>
      <div className='container 2xl:max-w-[1280px] px-4 text-gray-700'>
        <h1 className='text-2xl font-bold text-indigo-500 text-center hidden' >About ME</h1>
        <div className='mb-16 lg:flex lg:gap-4'>
          <div className='mb-2 lg:w-2/5' data-aos='fade-right' data-aos-duration="800" data-aos-easing="ease-in-out">
            <img src={AboutImg } alt="" className=''/>
          </div>
          <div className='lg:flex-1'>
            <h1 className='text-3xl font-bold text-indigo-500 mb-3 lg:text-4xl' data-aos='fade' data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="500">About Me</h1>
            <p className='lg:leading-7 mb-5' data-aos='fade' data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="500">
              Hello there! I started coding since December 2022. I am passionate about creating beautiful, responsive websites and I am always looking to stay up to date with the latest web development trends and technologies. When I'm not coding, I'm playing games and reading manhua or manga.
            </p>
            <a href={resume} target='_blank' className='bg-indigo-500 px-4 py-2 text-white rounded-md duration-200 transition-colors hover:bg-indigo-600' data-aos='fade' data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="500">
              Resume
              <span className='ml-2'>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>
        </div>
        <div className='mb-16'>
          <h2 className='text-2xl font-medium text-center mb-4 text-indigo-500' data-aos='fade-down' data-aos-duration="300" data-aos-easing="ease-in-out">Skills</h2>
          <div className='lg:grid lg:grid-cols-3 lg:gap-4 overflow-hidden'>
            <div className='px-4 border py-3 mb-5 rounded-md min-h-[14rem] shadow-md shadow-gray-400' data-aos='fade-right' data-aos-duration="1000">
              <h3 className='mb-5 lg:text-center'>Front-End</h3>
              <ul className='grid grid-cols-3 gap-3'>
                {frontEnd.map((skill) => (
                  <li key={skill.name} className='flex flex-col justify-center items-center gap-2'>
                    <img src={skill.image} alt={skill.name} className='w-10 h-10' />
                    <span className='text-sm'>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='px-4 border py-3 mb-5 rounded-md min-h-[14rem] shadow-md shadow-gray-400' data-aos='fade' data-aos-duration="1000" data-aos-easing="ease-in-out">
              <h3 className='mb-5 lg:text-center'>Back-End</h3>
              <ul className='grid grid-cols-3 gap-3'>
                {backEnd.map((skill) => (
                  <li key={skill.name} className='flex flex-col justify-center items-center gap-2'>
                    <img src={skill.image} alt={skill.name} className='w-10 h-10' />
                    <span className='text-sm'>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='px-4 border py-3 mb-5 rounded-md min-h-[14rem] shadow-md shadow-gray-400' data-aos='fade-left' data-aos-duration="1000" >
              <h3 className='mb-5 lg:text-center'>Database</h3>
              <ul className='grid grid-cols-3 gap-3'>
                {database.map((skill) => (
                  <li key={skill.name} className='flex flex-col justify-center items-center gap-2'>
                    <img src={skill.image} alt={skill.name} className='w-10 h-10' />
                    <span className='text-sm'>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-medium text-center mb-4 text-indigo-500' data-aos='fade-down' data-aos-duration="300" data-aos-easing="ease-in-out">Learning Experience</h2>
          <div className='flex flex-col lg:flex-row lg:w-[800px] gap-4 lg:mx-auto'>
            <div className='px-4 border py-3 rounded-md min-h-[14rem] shadow-md shadow-gray-400 lg:min-w-[360px] lg:max-w-[360px] mb-5 lg:mb-0' data-aos='fade-down' data-aos-duration="300" data-aos-easing="ease-in-out" data-aos-delay="300">
              <h3 className='lg:text-center mb-5'>Self-Taught & Bootcamp Journey</h3>
              <ul>
                {experiences.map((experience) => (
                  <li key={experience.year} className='mb-3'>
                    <span className='text-sm block text-indigo-500'>
                      {experience.year  }
                    </span>
                    {experience.job}
                  </li>
                ))}
              </ul>
            </div>
            <div className='px-4 border py-3 rounded-md min-h-[14rem] shadow-md shadow-gray-400 lg:min-w-[360px] lg:max-w-[360px]' data-aos='fade-down' data-aos-duration="300" data-aos-easing="ease-in-out" data-aos-delay="700">
              <h3 className='lg:text-center mb-5'>Educational Background</h3>
              <ul>
                {education.map((education) => (
                  <li key={education.year} className='mb-3'>
                    <span className='text-sm block text-indigo-500'>
                      {education.year  }
                    </span>
                    {education.education}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About