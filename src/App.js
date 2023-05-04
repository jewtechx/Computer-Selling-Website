import React from 'react'
import './App.css';
import NavbarMain from "./components/Navbar"
import Hero from './components/Hero';
import About from './components/About' 

import AOS from 'aos';
import 'aos/dist/aos.css';
import Part from './components/Particles'


function App() {
  React.useEffect(()=>{
    AOS.init({
      duration:1000,
      offset:100,
      easing:'ease-in-out',
      delay:100
    })
  },[])

  return (
    
    <div className="App">
      
      <div className='main custom-cursor' data-aos="fade-in">
     <NavbarMain />
      <Part/>
     <Hero />
    <About />
    
    
    </div>
    </div>
  );
}

export default App;
