import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
