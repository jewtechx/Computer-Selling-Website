import React from 'react';
import { Container,Button, Card } from 'react-bootstrap';
import '../componentsCss/computers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import computerdatas from '../apiDatas/computersapi';

export default function Computers() {


  const img = React.useRef();
  const wrapper = React.useRef()
  const imgmain = React.useRef()
  const [imgpre,setimgpre] = React.useState(``)
  function showImg(event, id) {
    wrapper.current.style.display = "block";
    setimgpre(computerdatas[id - 1].image);
  }

  function Close(){
    wrapper.current.style.display = "none"
  }



  const comps = computerdatas.map((items) => {
    return (
      <Card className="card-main">
<Card.Img src={items.image} onClick={(event) => showImg(event, items.id)} alt={items.specs.model} ref={img} className="card-img" />
        <Card.Body>
          <Card.Title className="card-title">{items.specs.model}</Card.Title>
          <div className="spec">
            <p>{items.specs.ram}</p>
            <p>{items.specs.harddisk}</p>
          </div>
          <Card.Text className="price">{items.price}</Card.Text>
          <Link to={`${items.id}`}><Button variant="danger" className="button">Purchase</Button></Link>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <Container>
        <h1>Explore our Computers</h1>
        <div className='wrapper'>
        {comps}
        </div>
      </Container>
      <div className='prewiew-img' ref={wrapper}>
        <FontAwesomeIcon 
        onClick={Close}
         icon={faClose} style={{
            color:"white",
            fontSize:"50px",
            fontWeight:"bold",
            position:"absolute",
            top:"10px",
            right:"20px"
        }}/>
        <div className="preview-img-wrapper" ref={wrapper}>
          <img src={imgpre} ref={imgmain} alt="preview of the one you clicked on"/>
        </div>
        </div>
      </div>
  );
}
