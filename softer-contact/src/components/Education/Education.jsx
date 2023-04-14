import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Education.css'

const Education = () => {
  return (
    <section id="education">
        <div className='divEducatiom'>
          <Container>
          <h2><strong>ESTUDIA CON SOFTER</strong></h2>
          <p>Nos preocupamos por la necesidad de cada persona que desea aprender a programar. Pensamos en vos y en tu bolsillo cuando hicmos estos cursos.</p>
          <p>¡Aprovenchalos y ojala sean utiles!</p>
            <CardGroup>
        <Card>
          <Card.Img variant="top" src="/img/react.png" />
          <Card.Body>
            <Card.Text>
              Aprende a programar el framework mas utilizado en la industria de desarrollo frontend
            </Card.Text>
            <Card.Text>
             Precio final: $5000
            </Card.Text>
            <button className='btnComprar'>Comprar</button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Gratis los primeros 1000 alumnos</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/img/node.png" />
          <Card.Body>
            <Card.Text>
            Aprende a programar en el framework mas utilizado en la industria de desarrollo backend
            </Card.Text>
            <Card.Text>
             Precio final: $5000
            </Card.Text>
            <button className='btnComprar'>Comprar</button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Proximamente</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="img/mongo.png" />
          <Card.Body>
            <Card.Text>
              Aprende a usar las BD no relacionales, como Mongo DB!
            </Card.Text>
            <Card.Text>
             Precio final: $5000
            </Card.Text>
            <button className='btnComprar'>Comprar</button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Proximamente</small>
          </Card.Footer>
        </Card>
            </CardGroup>
          </Container>
        </div>
    </section>
  )
}

export default Education
