import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = forwardRef((props, ref) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const form = useRef()
  const nameFocus = useRef()
  const emailFocus = useRef()
  const messageFocus = useRef()

  useEffect(()  => {
    AOS.init()
    AOS.refresh()
  }, [])


  const focusName = () => {
    nameFocus.current.focus()
  }

  const focusEmail = () => {
    emailFocus.current.focus()
  }

  const focusMessage = () => {
    messageFocus.current.focus()
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    const regex = /\S+@\S+\.\S+/

    if (!name) {
      focusName()
      setNameError(true)
      return
    } else if (!regex.test(email) || !email) {
      focusEmail()
      setEmailError(true)
      return
    }  else if (!message) {
      focusMessage()
      setMessageError(true)
      return
    }

    try {
      const toastId = 'email-toast'

      if (!toast.isActive(toastId)) {
        toast.promise(
          new Promise((resolve, reject) => {
            emailjs
              .sendForm('service_gvn50y9', 'template_uf00ms5', form.current, 'OiRHmXztuMTWCNT7D')
              .then(() => {
                resolve()
                setName('')
                setEmail('')
                setMessage('')
                setNameError(false)
                setEmailError(false)
                setMessageError(false)
              })
              .catch((error) => {
                reject()
                console.log(error.text)
                toast.error('Failed to send email.', { toastId })
              })
          }),
          {
            pending: 'Sending...',
            success: 'Sent Successfully!',
            error: 'Failed to Send',
            toastId,
          }
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

    
  return (
    <section id='contac' ref={ref} className='contact-section py-20 mb-20'>
      <div className='container 2xl:max-w-[1280px] px-4 text-gray-700 bg-gray-100 py-5 rounded-md' data-aos='fade-down' data-aos-duration='500' data-aos-easing='ease-in-out'>
        <div className='lg:flex lg:gap-4'>
          <div className='mb-12 lg:w-1/2'>
            <h1 className='text-3xl font-bold text-indigo-500 mb-2'>Get In Touch With Me</h1>
            <p className='mb-6'>Let's talk about your website or project. Send me a message and I will be in touch within one business day.</p>
            <ul className='px-4'>
               <li className='mb-2'>
                  <span className='text-indigo-500 mr-3'><FontAwesomeIcon icon={faLocationDot} /></span>
                  Ligao City, Albay
               </li>
                <li className='mb-2'>
                  <span className='text-indigo-500 mr-3'><FontAwesomeIcon icon={faPhone} /></span>
                  +639054242688
               </li>
                <li className='mb-2'>
                  <span className='text-indigo-500 mr-3'><FontAwesomeIcon icon={faEnvelope} /></span>
                  botonesallan7@gmail.com
               </li>
            </ul>
          </div>
          <form ref={form} onSubmit={sendEmail} className='lg:flex-1'>
            <div className='relative mb-7'>
              <input
                ref={nameFocus}
                className={`px-4 py-4 lg:py-5 rounded-lg bg-white peer placeholder-transparent w-full focus:outline focus:outline-indigo-300 ${nameError && 'focus:outline-red-300'}`}
                id='name'
                name='from_name'
                type="text"
                placeholder='Name'
                value={name}
                onChange={e => setName(e.target.value)}
                autoComplete='off'
              />
              <label
                className='transition-all duration-300 text-indigo-500 absolute top-3 left-4 translate-y-[-50%] text-[14px] lg:text-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-indigo-500 peer-focus:text-indigo-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-50%] peer-focus:text-[14px]' 
                htmlFor="name"
              >
                  Name
              </label>
              {nameError && (
                <span className='text-red-400 text-sm absolute -bottom-6 left-2'>Name is required</span>
              )}
            </div>
            <div className='relative mb-7'>
              <input
                ref={emailFocus}
                className={`px-4 py-4 lg:py-5 rounded-lg bg-white peer placeholder-transparent w-full focus:outline focus:outline-indigo-300 ${emailError && 'focus:outline-red-300'}`}
                id='email'
                name='from_email'
                type="text"
                placeholder='Email Address'
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete='off'
              />
              <label
                className='transition-all duration-300 text-indigo-500 absolute top-3 left-4 translate-y-[-50%] text-[14px] lg:text-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-indigo-500 peer-focus:text-indigo-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-50%] peer-focus:text-[14px]' 
                htmlFor="email"
              >
                  Email Address
              </label>
              {emailError && (
                <span className='text-red-400 text-sm absolute -bottom-6 left-2'>Invalid email address</span>
              )}
            </div>
            <div className='relative mb-7'>
              <textarea
                ref={messageFocus} 
                className={`px-4 py-4 lg:py-5 rounded-lg bg-white peer placeholder-transparent w-full min-h-[320px] max-h-[320px] focus:outline focus:outline-indigo-300 ${messageError && 'focus:outline-red-300'}`}
                id="text-area"
                name='message' 
                cols="30" 
                rows="10"
                placeholder='Message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              >
              </textarea>
              <label
                className='transition-all duration-300 text-indigo-500 absolute top-3 left-4 translate-y-[-50%] text-[14px] lg:text-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:top-8 peer-placeholder-shown:text-indigo-500 peer-focus:text-indigo-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:text-[14px]' 
                htmlFor="text-area"
              >
                  Message
              </label>
              {messageError && (
                <span className='text-red-400 text-sm absolute -bottom-6 left-2'>Message is required</span>
              )}
            </div>
            <button type='submit' className='bg-indigo-500 block mx-auto px-5 py-2 rounded-md text-white transition-colors duration-200 hover:bg-indigo-600'>
              Send
              <span className='ml-1'><FontAwesomeIcon icon={faPaperPlane} /></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
})

export default Contact