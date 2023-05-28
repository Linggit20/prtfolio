import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate =  useNavigate()

  const hero = useRef(null)
  const about = useRef(null)
  const project = useRef(null)
  const contact = useRef(null)

  useEffect(() => {
    let timeoutId = null

    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

          if (scrollPosition < about.current.offsetTop) {
            navigate('/')
          } else if (scrollPosition < project.current.offsetTop) {
            navigate('/about')
          } else if (scrollPosition < contact.current.offsetTop) {
            navigate('/projects')
          } else {
            navigate('/contact')
          }

          timeoutId = null
        }, 500) 
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [navigate])

  const handleScrollHome = () => {
    hero.current?.scrollIntoView({ behavior: 'smooth' })
    navigate('/')
  }

  const handleScrollAbout = () => {
    about.current?.scrollIntoView({ behavior: 'smooth' })
    navigate('/about')
  }

  const handleScrollProject = () => {
    project.current?.scrollIntoView({ behavior: 'smooth' })
    navigate('/project')
  }

    const handleScrollContact = () => {
    contact.current?.scrollIntoView({ behavior: 'smooth' })
    navigate('/contact')
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <header>
        <Navbar handleScrollAbout={handleScrollAbout} handleScrollHome={handleScrollHome} handleScrollProject={handleScrollProject} handleScrollContact={handleScrollContact}/>
      </header>
      <main>
        <Hero ref={hero} handleScrollContact={handleScrollContact}/>
        <About ref={about}/>
        <Project ref={project}/>
        <Contact ref={contact}/>
      </main>
      <footer className='bg-gray-800'>
        <Footer handleScrollHome={handleScrollHome}/>
      </footer>
    </>
  )
}

export default App