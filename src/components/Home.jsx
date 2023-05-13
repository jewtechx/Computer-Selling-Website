import React from 'react'
import {Button,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <div className='home'>
                <Container>
                <div className="home-text">
                        <h1>Plan your setup, we supply you your Computers</h1>
                        <p>We have over 1000+ computers of different models,capacities and features</p>
                        <Link to="computers"><Button style={{backgroundColor:"#008080",border:"none"}}>Buy a Computer</Button></Link>
                </div>  
                </Container>
            </div>
        </div>
    )
}