import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Contact.css'

const ContactUs = () => {
  return (
  <section id="contact" className='divContact'>
  <h2><strong>CONVERSEMOS</strong></h2>
    <div className='lateralAbout'>
    <img className='lateralAboutImageContact' src='img/Converemos.png'>
        </img>
      </div>
    <div className='lateral'>
        <div className="inputGroup">
          <input type="text" required="" autocomplete="off"/>
          <label for="Nombre">Nombre</label>
        </div>
        <div className="inputGroup">
          <input type="text" required="" autocomplete="off"/>
          <label for="email">Email</label>
        </div>
        <div className="inputGroup">
          <input type="text" required="" autocomplete="off"/>
          <label for="tel">Telefono</label>
        </div>
        <div className="inputGroup">
          <input type="text" required="" autocomplete="off" className='anchoMensaje' />
          <label for="mensaje">Mensaje</label>
        </div>
        <div className="inputGroup">
        <button className='btnEnviar'>Enviar</button>
      </div>
    </div>
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
  </section>
  )
}

export default ContactUs
