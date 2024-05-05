import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {AiFillGithub} from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import Typewriter from 'typewriter-effect'
import "./Home.css"

const Home = () => {

  return (
    <section id='home' className='home section'>
      <div className='container homeContainer'>

        <span className='introText text-white'>
        Hello,
        </span>

        <h2 className='title text-white'>
          I'm  <span className='titleName'>Sapna Bagde</span>
        </h2>

        <h1 className='subTitle fs-2 '>
          <Typewriter 
            options={{
              autoStart:true,
              loop:true,
              delay:50,
              strings:[" I am frontend developer", "I am backend developer", "I am Fullstack  developer"]
            }}  
          />
        </h1>
        
        <p className='homePara text-white'>
        I am dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
        </p>

        <div className='icon   icon-link '>
          <a 
            href='https://github.com/SapnagBagde'
            target='_blank'>
            <AiFillGithub  className="icon  iconHover" />
          </a>

          <a 
            href='https://www.linkedin.com/in/sapanabagde/' 
            target='_blank'>
            <CiLinkedin  className="icon iconHover" />
          </a>

          <a 
            href='mailto:sapnagbagde@gmail.com'
            target='_blank'>
            <MdEmail  className="icon  iconHover" />
          </a>
          
        </div>

      </div>
    </section>
  )
}

export default Home



