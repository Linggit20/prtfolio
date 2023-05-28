import React, { forwardRef, useEffect } from 'react'
import ProjecThree from '../assets/ProjectThree.png'
import ProjecTwo from '../assets/ProjectTwo.png'
import ProjecOne from '../assets/ProjectOne.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = forwardRef((props, ref) => {

  const projects = [
    { id: 1,
      duration: 500,
      easing: 'ease-in-out',
      right:'fade-right',
      left: 'fade-left',
      image: ProjecThree,
      title: 'MindfullTasks', 
      description: 'A full-stack web application to provide user with a platform to create, organize, and track their tasks.',
      technologies: [
        {
          id: 1,
          name: 'Tailwind'
        },
        {
          id: 2,
          name: 'React'
        },
        {
          id: 3,
          name: 'Laravel'
        },
        {
          id: 4,
          name: 'mySQL'
        },
      ],
      github: 
        { 
          name: 'Github',
          link: 'https://github.com/jantoy052003/Capstone-laravel-api',
        },
      live: 
        {
          name: 'Live Link',
          link: 'https://mindfull-tasks-app.onrender.com/'
        }
    },
    {
      id: 2,
      image: ProjecTwo,
      duration: 500,
      delay: 300,
      easing: 'ease-in-out',
      right:'fade-right',
      left: 'fade-left',
      title: 'PokeWorld', 
      description: 'The website enables users to search for and explore Pokémon, providing details on their characteristics and abilities.',
      technologies: [
        {
          id: 1,
          name: 'React'
        },
        {
          id: 2,
          name: 'Bootstrap'
        },
        {
          id: 3,
          name: 'External Api'
        }
      ],
      github: 
        { 
          name: 'Github',
          link: 'https://github.com/myke023/miniproject2paul-albertoWD45',
        },
      live: 
        {
          name: 'Live Link',
          link: 'https://mini-project-2-pokemon.onrender.com/'
        }
    },
    {
      id: 3,
      image: ProjecOne,
      duration: 500,
      delay: 500,
      easing: 'ease-in-out',
      right:'fade-right',
      left: 'fade-left',
      title: 'FoodTrip',
      description: 'Static e-commerce food website',
      technologies: [
        {
          id: 1,
          name: 'Bootstrap'
        },
        {
          id: 2,
          name: 'Github Pages'
        }
      ],
      github: 
        { 
          name: 'Github',
          link: 'https://github.com/Linggit20/mini-project-1',
        },
      live: 
        {
          name: 'Live Link',
          link: 'https://linggit20.github.io/mini-project-1/index.html'
        },
    }
  ]

  useEffect(()  => {
    AOS.init();
    AOS.refresh();
  }, [])


  return (
    <section id='project' ref={ref} className='project-section py-20'>
      <div className='container 2xl:max-w-[1280px] px-4 text-gray-700'>
        <div className='w-[40%] sm:w-[30%] md:w-1/5 lg:w-[15%] mb-8' data-aos='fade-down' data-aos-duration='300' data-aos-easing='ease-in-out'>
          <h1 className='text-3xl text-indigo-500 mb-2 font-bold relative after:absolute after:w-full after:h-[2px] after:bg-indigo-500 after:left-0 after:-bottom-2'>Projects</h1>
          <span className='text-lg font-medium relative left-1/2'>My Work</span>
        </div>
        <div className='overflow-hidden'>
          {projects.map((project) => (
            <div key={project.id} className='lg:flex lg:gap-6 border-b py-4 px-3 mb-4'>
              <div className='overflow-hidden rounded-md mb-4 lg:w-[40%] shadow-md shadow-gray-400' data-aos={project.right} data-aos-duration={project.duration} data-aos-easing={project.easing} data-aos-delay={project.delay}>
                <a href={project.live.link} target='_blank'>
                  <img src={project.image} alt={project.title} className=' rounded-md transition-all duration-300 hover:scale-110'/>
                </a>
              </div>
              <div className='flex-1' data-aos={project.left} data-aos-duration={project.duration} data-aos-easing={project.easing} data-aos-delay={project.delay}>
                <div className='flex justify-between items-center mb-3'>
                  <h2 className='text-xl font-semibold'>{project.title}</h2>
                   <div>
                    <a href={project.github.link} target='_blank' className='text-sm mr-3 bg-indigo-500 px-3 py-1 text-white rounded-md duration-200 transition-colors hover:bg-indigo-600'>{project.github.name}</a>
                    <a href={project.live.link} target='_blank' className='text-sm bg-indigo-500 px-3 py-1 text-white rounded-md duration-200 transition-colors hover:bg-indigo-600'>{project.live.name}</a>
                  </div>
                </div>
                <h3 className='mb-1 max-w-xl'>{project.description}</h3>
                <div>
                  <h4>Technologies</h4>
                  <ul className='marker:text-indigo-500 px-4'>
                    {project.technologies.map((list) => (
                      <li key={list.id} className='list-disc'>
                        {list.name}
                      </li> 
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Project