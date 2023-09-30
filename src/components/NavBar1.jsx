import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import {Nav, Container, Navbar, NavDropdown} from "react-bootstrap"

const NavBar1 = () => {
  const location = useLocation()

  useEffect(()=>{
    console.log(location.pathname);
  }, [location.pathname])


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Link to="/">Task Duty</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='flex-lg-grow-0'>
        <Nav className="me-auto">
          {location.pathname === "/task" ? null : <Link to="/task">All Task</Link>}
          {/* {location.pathname === "/new" ? null :<Link to="/new">New Task</Link>} */}
          {location.pathname === "/new"  || location.pathname.includes("/edit/") ? null :<Link to="/new">New Task</Link>}
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar1