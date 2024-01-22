import React from 'react';
import './App.css'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
    < Hero />
    
    </div>
    
    <Skills />
    <Portfolio/>
    <Contact />
    <Footer />
    </>
  
  );
}

export default App;
