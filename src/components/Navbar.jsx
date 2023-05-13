import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';

export default function NavbarM() {
  // const [active,setActive] = React.useState("")
  // const handleSelect = (eventKey) => {
  //   setActive(eventKey)
  // }
  const activeStyles = {
      color:"#008080"
   }
  return (
    <div>
      <Navbar  collapseOnSelect className="navbar ">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} style={{
                width:'90px',
                height:'75px',
                borderRadius:"500%",
                marginBlockEnd:"-12px",
                marginBlockStart:"-12px"
              }}/>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse  style={{marginLeft:"-20px"}} id="nav">
            <Nav className="me-auto">
              <NavLink className="navbar-links" style={({isActive}) => isActive ? activeStyles : null}  to="host">
                Host
              </NavLink>
              <NavLink className="navbar-links" style={({isActive}) => isActive ? activeStyles : null} to="about">
                About
              </NavLink>
              <NavLink className="navbar-links" style={({isActive}) => isActive ? activeStyles : null}  to="computers">
                Computers
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
