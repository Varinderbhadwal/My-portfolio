import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';  // Import Link for navigation


function Mynavbar(){
  return (
    <div>
      <Navbar expand="lg" className="" id='mynavbar'>
      <Container>
        <Navbar.Brand href="/">Varinder's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"><Button variant="dark" className='m-2'>Home</Button></Link>    {/* Use Link for navigation */}
            <Link to="/about"><Button variant="dark" className='m-2'>About</Button></Link>
            <Link to="/projects"><Button variant="dark" className='m-2'>Projects</Button></Link>
            <Link to="/hireme"><Button variant="dark" className='m-2'>Contact</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      
    </Navbar>
    <Navbar expand="lg" className="" id='postnav'>
    <Container>
      <marquee>Open to New Position. Please Contact me for any opportunities</marquee>
    </Container>
  </Navbar>
    </div>
  );
}

export default Mynavbar;
