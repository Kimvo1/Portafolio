import React from 'react'
import './MobileNavbar.css'

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
    <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            
            >
                <div className='mobile-menu-container'>
                    <img className='logo' src='./assets/images/logo.svg' alt='' />

                <ul>
                <li>
        <a href='#hero' className='menu-item'>Inicio</a>
    </li>
    <li>
    <a href="#habilidades" className='menu-item'>Habilidades</a>
    </li>

    <li>
        <a href='#portfolio' className='menu-item'>Portafolio</a>
    </li>
    <li>
        <a href='#contact' className='menu-item'>Contacto</a>
    </li>

                    <button className='contact-btn' onClick={() => {}}>
                        Contactame
                    </button>


                </ul>    
                </div>
            </div>
    
        </>
    );
};

export default MobileNavbar