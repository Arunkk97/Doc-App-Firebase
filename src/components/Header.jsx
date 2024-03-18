import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  
  return (
    <>
    <Navbar expand="lg" className="shadow ">
      <Container>
       <Link style={{textDecoration:'none'}} to={'/'}> <Navbar.Brand className='fw-bolder'><img style={{height:'60px'}} src="https://static.vecteezy.com/system/resources/previews/017/395/366/original/google-keep-notes-and-lists-icon-free-png.png" alt="" />Keep Note's</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header