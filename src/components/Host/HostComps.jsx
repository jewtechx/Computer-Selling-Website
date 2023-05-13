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
                    <box
  style={{
    padding: "3px",
    borderRadius: "3px",
    position:"relative",
    bottom:"5.5px",
    backgroundColor:
      comp.categoty === "Entry Level"
        ? "#F4A261" // Light orange shade for entry level
        : comp.categoty === "Mid Range"
        ? "#E9C46A" // Mustard shade for mid range
        : comp.categoty === "High End"
        ? "#2A9D8F" // Teal shade for high end
        : "",
    color: "#fff"
  }}
>{comp.categoty}</box>
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