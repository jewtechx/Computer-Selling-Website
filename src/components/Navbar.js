import React from 'react'
import {Nav, NavDropdown,Navbar, Container, NavbarBrand} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

const NavbarMain = () => {
    React.useEffect(()=>{
        AOS.init({
          duration:1000,
          offset:100,
          easing:'ease-in-out',
          delay:100
        })
      },[])
    const [active,setActive] = React.useState("1");
    const handleClick = (eventKey) => {
        setActive(eventKey);
    }
function navToggle(){
    document.getElementById("navtoggler").click();

}

function scrollFunc(event){
    if(document.srollTop > 20){
        this.style.color = "white"
    }
}

    return(
        <>
        
         <Navbar data-aos="fade-down" onLoad={scrollFunc} style={{position:"fixed",top:0,left:0,right:0,zIndex:"1"}} collapseOnSelect className="p-4 navbar-fixed-top" expand="lg" bg="light" variant="light">
            <Container style={{width:"100%",padding:0}}>
            <NavbarBrand href="#home" >{/*<img src="/images/logo.svg" />*/}<b className='logoname'><span style={{color:"rgb(82, 2, 254)"}}>JEW</span>TECH</b></NavbarBrand>
                <Navbar.Toggle id="navtoggler" aria-controls="res-nav" style={{marginRight:"20px",outline:"none",opacity:0}} />
                <span><FontAwesomeIcon id="navtoggler2" icon={faBars} onClick={navToggle} /></span>
                <Navbar.Collapse data-aos="fade-up"id="res-nav" className='pl-1' style={{color:"#111",paddingLeft:"18px"}}>
                    <Nav activeKey={active} onSelect={handleClick} className='ms-auto'
                     >
                        <Nav.Link data-aos="fade-up" eventKey="1" className="navlists" id="#hero" >Home</Nav.Link>
                        <Nav.Link data-aos="fade-up" eventKey="2" className="navlists" id="#about" >About me</Nav.Link>
                        <Nav.Link data-aos="fade-up" eventKey="3" className="navlists" id="#services" >Services</Nav.Link>
                        <Nav.Link data-aos="fade-up" eventKey="4" className="navlists" id="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link data-aos="fade-up" eventKey="5" className="navlists" id="#contant" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>

        </>
    )
}

export default NavbarMain