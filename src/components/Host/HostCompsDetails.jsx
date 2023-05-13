import React from 'react';
import { useParams, NavLink, Link, Outlet } from 'react-router-dom';
import computersapi from '../../apiDatas/computersapi';
import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import '../../componentsCss/hostcompdetaiil.css';

export default function HostCompsDetails() {
  const params = useParams();
  const [contextdata, setCD] = React.useState(computersapi.find(data => data.id == params.id));

  if (!contextdata) {
    return <h1>Loading...</h1>;
  }

  const activeStyles = {
    color: '#008080',
  };

  return (
    <>
      <Container>
        <br />
        <Link to='..' relative='path' style={{ textDecoration: 'none', color: 'crimson' }}>
          &larr; Go back to computers 
        </Link>
        <div className='comp-details'>
          <div className='hostcompmain'>
            <img src={contextdata.image} alt={contextdata.specs.model} />
            <div className='host-comp-detail'>
            <box
  style={{
    padding: "7px",
    borderRadius: "3px",
    position:"relative",
    bottom:"5.5px",
    backgroundColor:
      contextdata.categoty === "Entry Level"
        ? "#F4A261" // Light orange shade for entry level
        : contextdata.categoty === "Mid Range"
        ? "#E9C46A" // Mustard shade for mid range
        : contextdata.categoty === "High End"
        ? "#2A9D8F" // Teal shade for high end
        : "",
    color: "#fff"
  }}
>{contextdata.categoty}</box>
         <h2>{contextdata.specs.model}</h2>
              <h6>{contextdata.price} / <strike>{Math.floor(110 / 100 * contextdata.price.slice(3))}</strike></h6>
            </div>
          </div>

          <div>
            <br />
            <Navbar>
              <Container>
                <Nav>
                  <Nav.Item>
                    <NavLink end style={({ isActive }) => isActive ? activeStyles : null} to='.' className='navbar2-links'>Details</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink style={({ isActive }) => isActive ? activeStyles : null} to={`pricing`} className='navbar2-links'>Pricing</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink style={({ isActive }) => isActive ? activeStyles : null} to={`photos`} className='navbar2-links'>Photos</NavLink>
                  </Nav.Item>
                </Nav>
              </Container>
            </Navbar>
            <div style={{width:"500px",paddingLeft:"10px"}}>
            <Outlet context={{ contextdata }} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
