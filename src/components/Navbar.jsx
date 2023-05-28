import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faAddressCard, faFolderOpen, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = ({handleScrollAbout, handleScrollHome, handleScrollProject, handleScrollContact}) => {
  const [sideNav, setSideNav] = useState('-left-96')

  return (
    <nav className='shadow-gray-300 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
      <div className='container flex justify-between items-center py-2 px-4 text-gray-700 2xl:max-w-[1280px] lg:py-3'>
        <span className='logo text-3xl font-bold text text-gray-700 lg:text-4xl'> 
          <span className='text-indigo-500'>AD</span>
        </span>
        <button 
          onClick={() => setSideNav(prev => prev === '-left-96' ? 'left-0' : '-left-96')} 
          className='text-2xl lg:hidden'
        >
          <FontAwesomeIcon icon={sideNav === '-left-96' ? faBars : faTimes} />
        </button>
        <div className={`fixed top-0  h-screen w-80 px-4 lg:hidden ${sideNav} transition-all duration-500 bg-slate-50 shadow-gray-400 shadow-md`}>
          <div className='flex justify-between py-2'>
            <span className='logo text-3xl font-bold text text-gray-700'> 
              <span className='text-indigo-500'>AD</span>
            </span>
            <button onClick={() => setSideNav('-left-96')} className='close-side-nav text-2xl'>
              <FontAwesomeIcon icon={faTimes}/>
            </button>
          </div>
          <ul>
            <li>
              <a href="/" onClick={e => {e.preventDefault(), setSideNav('-left-96'), handleScrollHome()}}  className='block text-center py-3 mb-1 font-medium duration-200 transition-colors hover:bg-indigo-500 hover:text-white'>
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={e => {e.preventDefault(), setSideNav('-left-96'), handleScrollAbout()}}  className='block text-center py-3 mb-1 font-medium duration-200 transition-colors hover:bg-indigo-500 hover:text-white'>
                About
              </a>
            </li>
            <li>
              <a href="/project" onClick={e => {e.preventDefault(), setSideNav('-left-96'), handleScrollProject()}}  className='block text-center py-3 mb-1 font-medium duration-200 transition-colors hover:bg-indigo-500 hover:text-white'>
                Project
              </a>
            </li>
            <li>
              <a href="/contact" onClick={e => {e.preventDefault(), setSideNav('-left-96'), handleScrollContact()}}  className='block text-center py-3 mb-1 font-medium duration-200 transition-colors hover:bg-indigo-500 hover:text-white'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <ul className='hidden lg:flex'>
          <li className='mx-1'>
            <a href="" onClick={e => {e.preventDefault(), handleScrollHome()}} className='px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-indigo-500 hover:text-white group'>
              <span className='mr-1 text-indigo-500 group-hover:text-white transition-colors duration-200'>
                <FontAwesomeIcon icon={faHome}/>
              </span>
              Home
            </a>
          </li>
          <li className='mx-1'>
            <Link to='/about' onClick={e => {e.preventDefault(), handleScrollAbout()}} className='px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-indigo-500 hover:text-white group'>
              <span className='mr-1 text-indigo-500 group-hover:text-white transition-colors duration-200'>
                <FontAwesomeIcon icon={faAddressCard}/>
              </span>
              About
            </Link>
          </li>
          <li className='mx-1'>
            <a href="" onClick={e => {e.preventDefault(), handleScrollProject()}} className='px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-indigo-500 hover:text-white group'>
              <span className='mr-1 text-indigo-500 group-hover:text-white transition-colors duration-200'>
                <FontAwesomeIcon icon={faFolderOpen}/>
              </span>
              Project
            </a>
          </li>
          <li className='mx-1'>
            <a href="" onClick={e => {e.preventDefault(), handleScrollContact()}} className='px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-indigo-500 hover:text-white group'>
              <span className='mr-1 text-indigo-500 group-hover:text-white transition-colors duration-200'>
                <FontAwesomeIcon icon={faEnvelope}/>
              </span>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar