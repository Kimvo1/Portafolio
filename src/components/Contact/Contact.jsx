import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
    emailjs.sendForm('service_u7a177p', 'template_dq2btlm', form.current, 'M02F_Mve4lod6u1Wd')
    
    e.target.reset()
    };

  return (
    <section id='contact'>
    <h2>Contacto</h2>

    <div className="container contact_container">
        <div className="contact_options">
        <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>carvaduart@hotmail.com</h5>
            <a href="mailto:carvaduart@hotmail.com">Enviar mensaje</a>
        </article>

        <article className='contact_option'>
            <FaLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Andrés Vargas</h5>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-vargas-7026a9212/">Perfil</a>
        </article>

        <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>  
            <h4>WhatsApp</h4>
            <h5>3027027684</h5>
            <a href="https://wa.me/3027027684">Enviar mensaje</a>
        </article>
        </div>
        {/* FIN DE OPCIONES DE CONTACTO */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Tu Nombre Completo' required />
            <input type="email" name='email' placeholder='Email' required />
            <textarea name="message" rows="7" placeholder='Mensaje' required ></textarea>
            <button type='submit' className='btn-secundary'> Enviar Mensaje</button>
        </form>
    </div>
    </section>
  )
}

export default Contact