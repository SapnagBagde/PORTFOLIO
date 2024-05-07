import React from 'react'

import img from '../../assets/portfolio.png'
import img2 from '../../assets/pizza.png'
import img3 from '../../assets/weather.png'
import img4 from '../../assets/Spotify.png'

import {FiGithub} from "react-icons/fi"

import  {motion} from "framer-motion"

import {
  fadeInTopVariants
} from "../../utils/Variants"


import "./project.css"

const data = [
  {
    id:1,
    image:img2,
    github:'https://github.com/SapnagBagde/Pizza-Restaurant',
    title: 'Pizza Restaturant',
    desc:'Pizza Restaurant App it typically include features such as a menu with price website that made for everyone who loves pizza .  ',
    tech1:'Html',
    tech2:'Css',
    tech3:'Bootstraph',
    
  },

  {
    id:2,
    image:img3 ,
    github:'https://github.com/SapnagBagde/Weather',
    title: 'Weather',
    desc:'Creating a  weather app involves multiple steps, including fetching data from a weather API, designing the user interface, and handling user interactions. ',
    tech1:'Html',
    tech2:'Css',
    tech3:'React',
    tech4:'Js',
    
  },

  {
    id:3,
    image:img ,
    github:'https://github.com/SapnagBagde/PORTFOLIO',
    title: 'Portfolio',
    desc:'A Personal Portfolio website to showcase all  my details and projects at one place',
    tech1:'Html',
    tech2:'Css',
    tech3:'React',
    tech4:'Bootstraph',
  },

  {
    id:4,
    image:img4 ,
    github:'https://github.com/SapnagBagde/Spotify-clone',
    title: 'Spotify',
    desc:' Creating a Spotify clone ',
    tech1:'Html',
    tech2:'Css',
    tech3:'Js',
    
  },

]

const Project = () => {
  return (
    <section id='project' className='projects  container section'>
      
      <motion.h3 
          variants={fadeInTopVariants}
          initial= "hidden"
          whileInView= "visible"
      className=' text-center  text-white text-capitalize fw-bold'
        
        >My Projects</motion.h3>

      <motion.h5   
       variants={fadeInTopVariants}
          initial= "hidden"
          whileInView= "visible"
        className='text-white text-center mt-3 mb-5 '>What<span className='fs-5'> I  have Built</span> </motion.h5>

      <div className='projectContainer grid' >
        {
          data.map(({id, github, image,title,desc,tech1,tech2,tech3,tech4,tech5}) => {
            return(
              <div key={id} className='singleProject'>
                <div className='externalLinks flex'>
                </div>

                <div className='imgDiv'>
                  <a href='' target='_blank'>
                    <img src={image} alt={title}/>
                  </a>
                </div>

                <div className='projectTitle '> 
                  <h4 className='text-white fw-bold lh-lg'>{title}</h4>
                </div>


                <div className='desc '> 
                    <h3 className='text-white fs-6  lh-lg'>{desc}</h3>
                </div>

                <div className='d-flex justify-content-between ' >

                  <div className='githubIcon'>
                    <a href ={github} target='_blank'><FiGithub /></a>
                  </div>
                  
                  <div className='technologies flex '>
                    <small>{tech1}</small>
                    <small>{tech2}</small>
                    <small>{tech3}</small>
                    <small>{tech4}</small>
                    <small>{tech5}</small>
                  </div>

                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Project
