import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <section className='hero-container'>
    <div className='hero-content'>
        <h2> Desarrollador Frontend Creativo y Apasionado </h2>
        <p>
        ¡Bienvenido a mi mundo de código y diseño! Soy Andrés Vargas, <br />
        un apasionado ingeniero de sistemas y desarrollador frontend con un ojo meticuloso para la estética y la funcionalidad. <br /> 
        Transformo ideas en experiencias interactivas y atractivas.
        </p>
    </div>

    <div className='hero-img'>
    <div>
        <div className='tech-icon'>
            <img src='./assets/images/react.png' alt=''/>
        </div>
        <img src='./assets/images/foto.png' alt=''/>
    </div>

    <div>
        <div className='tech-icon'>
        <img src='./assets/images/html.png' alt='' />
        </div>  
        <div className='tech-icon'>
        <img src='./assets/images/css.png' alt='' />
        </div> 
        <div className='tech-icon'>
        <img src='./assets/images/js.png' alt='' />
        </div> 
     </div>   
    </div>    
   </section>
  );
};

export default Hero