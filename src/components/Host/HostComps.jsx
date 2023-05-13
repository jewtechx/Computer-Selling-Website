import React from "react"
import '../../componentsCss/hostcomp.css'
import computerdatas from "../../apiDatas/computersapi"
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function HostComps(){
    const comps = computerdatas.map(comp => {
        return(
            <Container>
                <Link style={{textDecoration:"none",color:"inherit"}}to={`${comp.id}`}>
                <div className="hostcomp">
                
                 <img src={comp.image} alt={comp.specs.model} />
                
    
                <div className="hostcomp-detail">
                    <h2 className="comp-name">{comp.specs.model}</h2>
                    <h3 className="comp-price">{comp.price} / <strike>{Math.floor(110 / 100 * comp.price.slice(3))}</strike></h3>
                    <p>{comp.desc}</p>
                </div>
            </div>
                </Link>
            </Container>
        )
    })
    return(
        <>
        {comps}
        </>
    )
}