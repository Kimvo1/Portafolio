import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css'
import MobileNavbar from './MobileNavbar/MobileNavbar';

const Navbar = () => {

    const[openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />


    <nav className='nav-wrapper'>
    <div className='nav-content'>
    <img className='logo'src='./assets/images/logo.svg' alt='logo'/>

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

    </ul>

    <button class='menu-btn' onClick={toggleMenu}>
        <span 
        class={"material-symbols-outlined"}
        style={{ fontSize: "1.8rem" }}
        >
        { openMenu ? "close" : "menu"}
        </span>
    </button>
    
    </div>
    
    </nav>
    </>
  )
}

export default Navbar
