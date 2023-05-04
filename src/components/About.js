import React from 'react'
import {Container,Row,Col,Button,ButtonGroup} from 'react-bootstrap'
import cv from "./jewtechpro-cv.md"
import resume from "./jewtechpro-resume.md"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    React.useEffect(()=>{
        AOS.init({
          duration:1000,
          offset:100,
          easing:'ease-in-out',
          delay:100
        })
      },[])
    const Downloadcv = () => {
        const link = document.createElement("a");
        const url = URL.createObjectURL(new Blob([cv]))
        link.download="jewtechpro-cv.md";
        link.href=url;
        document.body.appendChild(link);
        link.click();
        
    }
    const Downloadresume = () => {
        const link = document.createElement("a");
        const url2 = URL.createObjectURL(new Blob([resume]))
        link.download="jewtechpro-resume.md";
        link.href=url2
        document.body.appendChild(link);
        link.click();
    }
    return(
        <>
          <div className='about' id="about">
                <Container>
                    <Row className="mt-5" >
                        <Col data-aos="fade-right" xs={12} sm={6} className='' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <div className='around-image'>
                            <img src={process.env.PUBLIC_URL + '/images/ceo.png'} alt="CEO" className="about-img"/>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} className='text-left p-4 pb-4'>
                            <h5 data-aos="fade-down-left">about</h5>
                            <h2 data-aos="fade-down-left" className='about-header'>About Me</h2>
                            <p className='about-p' data-aos="fade-down"> 
                                Hey, I am Jew, a software engineer and a cybersecurity expert. Past managers call me an industrious and an awesome
                                hardworker.<br/><br/> This is because outside work, I keep myself fit by working out and taking
                                in the right nutrients day in and day out thereby making me more concerntrated during working hours.

                                {/* You can reach me on :
                                <div className="icons">
                                    <a href="https://twitter.com/jewtechpro" target="_blank"><FontAwesomeIcon className="brands"icon={faTwitter} size='lg'/></a>
                                    <a href="https://www.instagram.com/mrr.jew/" target="_blank"><FontAwesomeIcon className="brands"icon={faInstagram} size='lg'/></a>
                                    <a href="https://web.facebook.com/profile.php?id=100092393048482" target="_blank"><FontAwesomeIcon className="brands"icon={faFacebook} size='lg'/></a>
                                    <a href="https://github.com/JewTechPro" target="_blank"><FontAwesomeIcon className="brands"icon={faGithub} size='lg'/></a>
                                    <a href="#" target="_blank"><FontAwesomeIcon className="brands"icon={faLinkedin} size='lg'/></a>
                                </div> */}
                            </p>
                            <ButtonGroup data-aos="fade-down">
                            <Button  style={{backgroundColor:"#5E3BEE",border:"none",outline:"none"}} onClick={Downloadcv} className="">Download CV</Button>
                            <Button  style={{letterSpacing:"0.5px"}} variant="light" onClick={Downloadresume}  className="pl-4">Download Resume</Button>
                            <Button  style={{letterSpacing:"0.5px"}} variant="light" className="pl-4"><b>H I R E - M E </b></Button>
                            </ButtonGroup>
                            <br />
                            <br />
                            <br />
                        </Col>
                    </Row>
                </Container>
          </div>
        </>
    )
}
export default About