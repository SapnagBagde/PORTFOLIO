import React from 'react'
import profile from '../../assets/profile.png'
import "./about.css";

import  {motion} from "framer-motion"


import {
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeInTopVariants
} from "../../utils/Variants"



const About = () => {
  return (
    <section id='about' className='about section container'>

    <motion.h3 
        variants={fadeInTopVariants}
        initial= "hidden"
        whileInView= "visible"
        className=' text-center  text-white text-capitalize fs-2 '>
      About 
      <span className='fs-2'> Me</span>
    </motion.h3>

     <div className='sectionContent grid '>
    <motion.h5
        variants={fadeInLeftVariants}
        initial= "hidden"
        whileInView= "visible" className='textSection '  >
      <h4 className=''>
      <br/>
      &nbsp;
      &nbsp;
          I built beautiful Websites with React.js 
          and Bootstrap 
          I am proficient in Frontend skills like React.js , Redux, 
          Redux Tool Kit , Axios , and many more. In backend I know Node.js , Express.js , MongoDB,
          and Mongoose.    
          
          &nbsp;
          In my free time, I love to learn new technologies and keep up-to-date with full stack developement. Outside of programming, I love to read novels and watch animes. I learnt alot things from anime. My one of the most favourite character is Itachi Uchiha. 

       </h4>
    </motion.h5>

    <motion.div
        variants={fadeInRightVariants}
        initial= "hidden"
        whileInView= "visible"
        className='aboutImgDiv mb-3'  >
        
        <img src={profile} 
          alt='profile' 
          className='aboutImg '
        />
        </motion.div>


    </div> 
  </section> 



  


 
  )
}

export default About




