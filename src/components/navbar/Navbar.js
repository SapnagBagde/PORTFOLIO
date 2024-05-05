import React from 'react'
import "./Navbar.css";

import 'bootstrap/js/dist/collapse';

const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-md navbar-light   ">
          <a 
            className="navbar-brand text-white  logo" 
            href="#"> S
            <span className='logo fs-1'>b.</span>
          </a>

          <button 
            className="navbar-toggler" 
            type="button"  
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false"
            aria-label="Toggle navigation ">

            <span >
              <i 
                className="fa-solid fa-bars" 
                style={{color:'white',fontSize:23}}>
              </i>

            </span>
          </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto fw-bold">
            
            <li className="nav-item ">
              <a className="nav-link" href="#about">About </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#project">Project</a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#Contact">Contact</a>
            </li>
          
          </ul>
      
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar;



