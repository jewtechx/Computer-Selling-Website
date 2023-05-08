import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function HostNav() {
  const activeStyles = {
    color:"crimson"
 }
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Item>
              <NavLink end style={({isActive}) => isActive ? activeStyles : null} to="/host" className="navbar2-links">Dashboard</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink style={({isActive}) => isActive ? activeStyles : null}  to="income" className="navbar2-links">Income</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink style={({isActive}) => isActive ? activeStyles : null}  to="comps" className="navbar2-links">Computers</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink style={({isActive}) => isActive ? activeStyles : null} to="review" className="navbar2-links">Review</NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
