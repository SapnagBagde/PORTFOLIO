import React from 'react';
import "bootstrap/js/dist/tab";
import "./Skills.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import  {motion} from "framer-motion"

import {
  fadeInTopVariants
} from "../../utils/Variants"

const Skills = () => {
  return (
    <section id='skills' className='skills container section'>
      
      <motion.h3 
          variants={fadeInTopVariants}
          initial= "hidden"
          whileInView= "visible"
      className='skills-title  text-center text-white'> My Skills
        
        <span className='subTitle text-center  text-white '>
          <h5 
            className='mt-3 mb-3 text-capitalize'> What
            <span className='fs-5'> I can do</span>
          </h5>
        </span>

      </motion.h3>

        <div className='skillsContainer grid'>

          <div className='skillGroup'>
            <div className='groupTitle'>
                <h6 className='title fw-normal text-white lh-lg '> Frontend Developer</h6>
                <span className='subTitle'> 
                </span>
            </div>

            <div className='generalSkills'>
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <FaHtml5 className="icon" />
                </div> 

                <span className='skillName lh-lg'>Html</span>
              </div>
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <FaCss3Alt className="icon" />
                </div> 

                <span className='skillName lh-lg'>Css</span>
              </div>
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <IoLogoJavascript className="icon" />
                </div> 

                <span className='skillName  lh-lg'>Javascript</span>
              </div>
              
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <FaHtml5 className="icon" />
                </div> 

                <span className='skillName  lh-lg'>React</span>
              </div>

              
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <FaBootstrap className="icon" />
                </div> 

                <span className='skillName lh-lg'>Bootstrap</span>
              </div>
                
            </div>


          </div>

          <div className='skillGroup'>
            <div className='groupTitle'>
                <h5 className='title text-white fw-normal lh-lg'> Backend Developer</h5>
                <span className='subTitle'> 
                </span>
            </div>

            <div className='generalSkills'>
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <FaNode className="icon" />
                </div> 

                <span className='skillName lh-lg'>Node Js</span>
              </div>
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <SiExpress className="icon" />
                </div> 

                <span className='skillName lh-lg'>Express</span>
              </div>
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <SiMysql className="icon" />
                </div> 

                <span className='skillName lh-lg'>Mysql</span>
              </div>
              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <SiMongodb className="icon" />
                </div> 

                <span className='skillName lh-lg'>Mongodb</span>
              </div>
      
                
            </div>

          </div>

          <div className='skillGroup'>
            <div className='groupTitle'>
                <h5 className='title text-white fw-normal     lh-lg '> Languages </h5>
                <span className='subTitle'> 
                </span>
            </div>

            <div className='generalSkills'>


              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <FaJava className="icon" />
                </div> 

                <span className='skillName lh-lg'>Java</span>
              </div>

              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <IoLogoJavascript className="icon" />
                </div> 

                <span className='skillName lh-lg'>Javascript</span>
              </div>


              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <TbBrandPython className="icon" />
                </div> 

                <span className='skillName lh-lg'>Python</span>
              </div>
                
            </div>

          </div>

          <div className='skillGroup'>
            <div className='groupTitle'>
                <h5 className='title text-white fw-normal lh-lg '> Other </h5>
                <span className='subTitle'> 
                </span>
            </div>

            <div className='generalSkills'>

              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <FaGit className="icon" />
                </div> 

                <span className='skillName lh-lg'>Git</span>
              </div>

              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <FaGithub className="icon" />
                </div> 

                <span className='skillName lh-lg'>Github</span>
              </div>


              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <SiPostman className="icon" />
                </div> 

                <span className='skillName lh-lg'>Postman</span>
              </div>


              <div className='singleSkill'>
                <div className='iconBox flex'>
                  <TbBrandVscode className="icon" />
                </div> 

                <span className='skillName lh-lg'>Vscode</span>
              </div>

            </div>

          </div>

        </div>
    </section>
  )
}

export default Skills