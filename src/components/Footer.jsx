import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = ({handleScrollHome}) => {
  return (
    <div className='container max-w-[1280px] px-4 py-3 text-white'>
      <div className='grid grid-cols-2 sm:grid-cols-3'>
        <div className='mb-5 border-b border-gray-600 sm:border-none pb-3 sm:pb-0'>
          <h1 className='text-xl font-medium mb-2'>Relevant Links</h1>
          <ul>
            <li className='mb-1'>
              <a href='/' onClick={e => {e.preventDefault(), handleScrollHome()}} className='transition-all duration-200 hover:underline'>Back to top</a>
            </li>
            <li className='mb-1'>
              <a href='https://github.com/Linggit20'target='_blank' className='transition-all duration-200 hover:underline'>Github</a>
            </li>
            <li className='mb-1'>
              <a href='https://www.facebook.com/adeniros2'target='_blank' className='transition-all duration-200 hover:underline'>Facebook</a>
            </li>
          </ul>
        </div>
        <div className='mb-5 border-b border-gray-600 sm:border-none pb-3 sm:pb-0'>
          <h1 className='text-xl font-medium mb-3'>Projects</h1>
          <ul>
            <li className='mb-1'>
              <a href='https://mindfull-tasks-app.onrender.com/' target='_blank' className='transition-all duration-200 hover:underline'>MindfullTasks</a>
            </li>
            <li className='mb-1'>
              <a href='https://mini-project-2-pokemon.onrender.com/' target='_blank' className='transition-all duration-200 hover:underline'>PokeWorld</a>
            </li>
            <li className='mb-1'>
              <a href='https://linggit20.github.io/mini-project-1/index.html' target='_blank' className='transition-all duration-200 hover:underline'>FoodTrip</a>
            </li>
          </ul>
        </div>
        <div className='mb-5 col-span-2 sm:col-span-1'>
          <ul className='text-xl flex flex-col h-full justify-center'>
            <li className='mb-3'>
            <span className='mr-3 text-indigo-500'><FontAwesomeIcon icon={faEnvelope} /></span>
            botonesallan7@gmail.com
            </li>
            <li>
              <span className='mr-3 text-indigo-500'><FontAwesomeIcon icon={faPhone} /></span>
              +639054242688
            </li>
          </ul>
        </div>
      </div>
      <div className='pt-3 border-t border-gray-600  text-center text-sm'>
        <p>Made with 	&#9825; by Alberto Deñiros Jr</p>
      </div>
    </div>
  )
}

export default Footer