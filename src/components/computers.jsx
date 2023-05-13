import React from 'react';
import { Container,Button, Card } from 'react-bootstrap';
import '../componentsCss/computers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {Link,useSearchParams} from "react-router-dom"
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
<box
  style={{
    padding: "3px",
    borderRadius: "3px",
    position:"relative",
    bottom:"5.5px",
    backgroundColor:
      items.categoty === "Entry Level"
        ? "#F4A261" // Light orange shade for entry level
        : items.categoty === "Mid Range"
        ? "#E9C46A" // Mustard shade for mid range
        : items.categoty === "High End"
        ? "#2A9D8F" // Teal shade for high end
        : "",
    color: "#fff"
  }}
>
  {items.categoty}
</box>
          <div className="spec">
            <p>{items.specs.ram}</p>
            <p>{items.specs.harddisk}</p>
          </div>
          <Card.Text className="price">{items.price} / <strike style={{color:'#ccc'}}>{Math.floor(110 / 100 * items.price.slice(3))}</strike></Card.Text>
          {/* <box style={{padding:"6px",borderRadius:"6px",backgroundColor:'',color:"#fff"}}>{items.categoty}</box> */}
         

      

         


          <Link to={`${items.id}`}><Button variant="danger" className="button">Purchase</Button></Link>
        </Card.Body>
      </Card>
    );
  });

  if(!comps){
    return <h1>Loading...</h1>
  }




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
