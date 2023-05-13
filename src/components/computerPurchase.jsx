import React from 'react'
import '../componentsCss/computerPurchase.css'
import { useParams,Link } from 'react-router-dom'
import {Button,Container,Row,Col} from 'react-bootstrap'
import computerdatas from '../apiDatas/computersapi';
export default function ComPreview(){
    const params = useParams();
  
      console.log(params.id)

      const mainComp = computerdatas.filter(items => items.id == params.id).map(items => {
        return(
            <div className='desc'>
                <Link to=".." relative='path' style={{
                    position:"relative",
                    color:"crimson",
                    fontSize:"15px",
                    marginBlockEnd:"9px",
                    marginBlockStart:"-13px",
                    textDecoration:'none'
                }}>&larr; Go back to explore our computers</Link>
            <img src={items.image} alt="preview" style={{borderRadius:'12px'}} />
            <div className='caption'>
                <h1>{items.specs.model}</h1>
                <h6>{items.price} / <strike style={{color:'#ccc'}}>{Math.floor(110 / 100 * items.price.slice(3))}</strike></h6>
                <p>{items.desc}
                </p>
                <a href={`https://www.${items.specs.model}.com`} target='-blank'>view on website</a>
            </div>
           </div>
        )
      })
    
    return(
        <div className='payment'>
          <Container>
          <Row>
          <Col sm={6}>
          {mainComp}
          </Col>
          <Col sm={6}>
          <div className='payment-form'>
            <form>
            <h1 className='form-title'>Payment</h1>
                <label htmlFor='card-name'>CARHOLDER'S NAME</label>
                <input type='text' placeholder='Name on Card' name='card-name'/>
                <label htmlFor='card-number'>CARD NUMBER</label>
                <input type="number" placeholder='- - - -   - - - -   - - - -   - - - -' name='card-number'/>
                <div className='expiry'>
                    <div>
                            <label htmlFor='expiry-date'>EXPIRY DATE</label>
                            <input type='date' name='expiry-date'/>
                    </div>
                    <div>
                            <label for="cvv">CVV</label>
                            <input type="text" placeholder='Code'/>
                    </div>
                </div>
                <Button variant="danger">PAY NOW</Button>
            </form>
           </div>
          </Col>
          </Row>
          </Container>
         
        </div>
    )
}