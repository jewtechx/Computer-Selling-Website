import React from 'react'
import Typed from 'react-typed'
import {Button} from 'react-bootstrap'
import anime from 'animejs'
import AOS from 'aos';
// import 'aos/dist/aos.css';

const Hero = () => {
    React.useEffect(()=>{
        AOS.init({
          duration:1000,
          offset:100,
          easing:'ease-in-out',
          delay:100
        })
      },[])
    return(
        <>
        
        <div className = "hero-wrapper" id="hero">

            <div className='main-info'>
                <h1>Software Engineering and Cybersecurity</h1>
                <Typed 
                data-aos="zoom-in-down"
                className="typedEffects"
                strings={["Web Development","3D Animations","Mobile App Development","Desktop App Development","API Testing","Cybersecurity"]}
                typeSpeed={50}
                backSpeed={60}
                loop
                />
                <br />
                <Button data-aos="zoom-in-up" variant="" style={{color:"#fff",border:"1px solid #5E3BEE",backgroundColor:"#5E3BEE"}}>CONTACT ME</Button>
            </div>
        </div>
</>
    )
}

export default Hero