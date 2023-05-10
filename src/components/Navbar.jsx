import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';

export default function NavbarM() {
  // const [active,setActive] = React.useState("")
  // const handleSelect = (eventKey) => {
  //   setActive(eventKey)
  // }
  const activeStyles = {
      color:"crimson"
   }
  return (
    <div>
      <Navbar  collapseOnSelect className="navbar ">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <p className="logo-name"style={{color:"crimson",fontFamily:"verdana",fontSize:"20px",letterSpacing:"1px"}}>#JEWCOMP</p>
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
