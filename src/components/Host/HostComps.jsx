import React from "react"
import '../../componentsCss/hostcomp.css'
import computerdatas from "../../apiDatas/computersapi"
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function HostComps(){
    const comps = computerdatas.map(comp => {
        return(
            <Container>
                <Link style={{textDecoration:"none",color:"inherit"}}to={`/comps/${comp.id}`}>
                <div className="hostcomp">
                <Row>
                <Col sm={5}>
                 <center><img src={comp.image} alt={comp.specs.model} /></center>
                </Col>
                <Col sm={7}>
                <div className="hostcomp-detail">
                    <h2 className="comp-name">{comp.specs.model}</h2>
                    <h3 className="comp-price">{comp.price}</h3>
                    <p>{comp.desc}</p>
                </div>
                </Col>
                </Row>
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