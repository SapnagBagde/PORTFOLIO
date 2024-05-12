import React from 'react'
import  {motion} from "framer-motion"

import {
  fadeInTopVariants,
  fadeInBottomVariants
} from "../../utils/Variants"

import "./contact.css"


const Contact = () => {
  return (
    <div 
      id='Contact' 
      className=' w-100 vh-100 d-flex flex-column justify-content-center align-items-center ' >

      <div className='form grid'>
        <motion.h3
          variants={fadeInTopVariants}
          initial= "hidden"
          whileInView= "visible"
          className=' text-center  text-white text-capitalize fw-bold'>
          My Contact
        </motion.h3>
        
        <motion.h5
          variants={fadeInTopVariants}
          initial= "hidden"
          whileInView= "visible"
          className='text-white text-center mt-2 mb-3'>Contact
          <span className='fs-5'> Me Here</span>
        </motion.h5>

        <motion.form  action=''
          variants={fadeInBottomVariants}
          initial= "hidden"
          whileInView= "visible"
          >

          <input type='text'placeholder='Enter your name'  name='name'className='text-white' />

          <input type='email'placeholder='Enter your email' name='email' />

          <textarea name='message' placeholder='Enter your message'></textarea>

          <button className='formBtn' type='submit' name='submit'>
          <a  
            className='text-white'
            href='mailto:sapnagbagde@gmail.com'
            target='_blank'>
            Send Message
            </a>
            
          </button>

        </motion.form>

      </div>
    </div>
  )
}

export default Contact
