import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section id="about">
    <div className='divAbout'>
    <h2><strong>QUIENES SOMOS</strong></h2>
      <div className='lateralAbout'>
        <p>
          SofTer es una empresa de software. Nace en el año 2015 cuando dos compañeros de la universidad pensaban que algun dia podrian crear una startup.
          Asi fue, que al pasar los años, ambos decidieron poner en marcha ese sueño que tanto anhelaban.
        </p>
        <p>
          Ambos se recibieron de la carrera de Ingenieria en Informatica y a corto plazo, comenzaron su carrera laboral.
        </p>
        <p>
          Parecia un sueño dificil de lograr, hasta que ambos decidieron dejar los trabajos en relacion de dependencia y dedicarse al 101% al 
          emprendimiento tecnologico.
        </p>
        <p>
          Poco a poco, y despues de casi 10 aplicaciones web desarrolladas, los clientes al fin llegaron.
        </p>
        <p>
          Hoy somos un equipo de grandes e increibles personas. Se unieron a este bello espacio de aprendizaje, mas de 30 personas en menos de un año. 
        </p>
        <p>
        Si hay algo que destaca en su totalidad a SofTer, es el estudio, el compromiso y por sobre todo el compañerismo, respeto y la union entre pares. 
        </p>
      </div>
      <div className='lateralAboutRigth'>
        <img className='lateralAboutImage' src='img/logo.jpeg'>
        </img>
      </div>
     </div>
  </section>
  )
}

export default AboutUs
