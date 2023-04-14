import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

const Footer = () => {
  return (
    <div>
       <Navbar className='navFooter'>
        <Container>
        <Row>
        <Col xs={4} classname='col'>Contactanos</Col>
        <Col xs={4} classname='col'>Donde estamos</Col>
        <Col xs={4} classname='col'>Encontranos en IG</Col>
      </Row>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer
