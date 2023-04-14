import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  return (
       <Navbar className="nav">
        <Container>    
          <Link to="/home"><img className='logo' src="img/logo.jpeg"></img></Link>
          <Link style={{ color: '#986C4A',textDecoration: 'none' }} to="/home"><p><strong>PRINCIPAL</strong></p></Link>
          <Link style={{ color: '#986C4A',textDecoration: 'none' }} to="/products"><p><strong>PRODUCTOS</strong></p></Link>
          <Link style={{ color: '#986C4A',textDecoration: 'none' }} to="/education"><p><strong>EDUCACION</strong></p></Link>
          <Link style={{ color: '#986C4A',textDecoration: 'none' }} to="/about"><p><strong>NOSOTROS</strong></p></Link>
          <Link style={{ color: '#986C4A',textDecoration: 'none' }} to="/contact"><p><strong>CONTACTO</strong></p></Link>
        </Container>
      </Navbar>
  )
}

export default NavBar;
