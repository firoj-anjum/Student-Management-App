import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container>
          
          <Nav className="navbar navbar--fixed-top col-3 ">
            <div className='col-12'>
            <div className='d-flex justify-content-between'>
                <NavLink to="/" className="text-decoration-none  anchorFont">React Project</NavLink>
                <NavLink to="/" className="text-decoration-none  anchorFont ">Home</NavLink>
                <NavLink to="/about" className="text-decoration-none   anchorFont">About Us</NavLink>
                <NavLink to="/contact" className="text-decoration-none   anchorFont">Contact Us</NavLink>
            </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers