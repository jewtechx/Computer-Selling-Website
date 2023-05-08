import React from 'react'
import { Button,Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../componentsCss/about.css'

export default function About(){
    return(
        <div>
            <div className='about-wrapper'>
                <p className='wrapper-text'>#JEWCOMP</p>
            </div><br /><br/><br/>
            <Container>
            <h1>Uplift your productivity by using sophisticated tech goddies</h1>
            <p><b>JEWCOMP</b> is a website under the JewTech-X company in Ghana which was established by Jew
            Kofi Larbi Danquah in 2022. JewTech-X offers wide range of services in Tech which include;<br/><br/>
            <div className='list-logo'>
                <Row>
                 <Col sm={6}>  
                <div className='list'>
                    <ul>
                        <li>Web Development</li>
                        <ul>
                            <li>JewComp</li>
                            <li>JewApiDocs</li>
                            <li>JewNet</li>
                            <li>JewMart</li>
                            <li>JewBlog</li>
                        </ul>
                        <li>Cybersecurity</li>
                        <li>Mobile App Development</li>
                        <li>Data Visualization</li>
                        <li>UI / UX</li>
                        <li>Game Development</li>
                        <li>Robotics</li>
                        <li>Data Manipulation</li>
                        <li>Space Exploration</li>
                    </ul>
                </div>
                </Col>
                <Col sm={6}>
                <div className='logo'>
                    <img src={process.env.PUBLIC_URL + `/images/jew.png`}/>
                </div>
                </Col>
                </Row>
            </div>
            </p>
            <div className='below'>
               <p>We don't and will never disappoint</p>
               <p>Your number one trusted supplier</p>
               <Link to="/computers"><Button style={{
                backgroundColor:"purple",
                border:"none"
               }}>Explore our Computers</Button></Link>
            </div>
            </Container>
        </div>
    )
}