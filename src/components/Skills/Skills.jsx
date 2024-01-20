import React from 'react'
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { FaTrello } from "react-icons/fa";


const Skills = () => {
  return <section id='habilidades'> 
    <h2>Habilidades</h2>

    <div className="container habilidades_container">
      <div className="habilidades_frontend">
        <h3>Frontend</h3>
        <div className="habilidades_content">
          <article className='habilidades_details'>
          <FaHtml5 className='habilidades_details-icon'/>
          <h4>HTML</h4>
          </article>
          <article className='habilidades_details'>
          <FaCss3Alt className='habilidades_details-icon'/>
          <h4>CSS</h4>
          </article>
          <article className='habilidades_details'>
          <RiJavascriptFill className='habilidades_details-icon'/>
          <h4>JavaScript</h4>
          </article>
          <article className='habilidades_details'>
          <FaBootstrap className='habilidades_details-icon'/>
          <h4>Bootstrap</h4>
          </article>
          <article className='habilidades_details'>
          <SiTailwindcss className='habilidades_details-icon'/>
          <h4>Tailwind</h4>
          </article>
          <article className='habilidades_details'>
          <FaReact className='habilidades_details-icon'/>
          <h4>React</h4>
          </article>
        </div>
        
      </div>
      {/* finaliza Frontend */}

      <div className="habilidades_herramientas">
        <h3>Herramientas</h3>
        <div className="habilidades_content">
          <article className='habilidades_details'>
          <FaGithubSquare className='habilidades_details-icon'/>
          <h4>GitHub</h4>
          </article>
          <article className='habilidades_details'>
          <FaGitAlt className='habilidades_details-icon'/>
          <h4>Git</h4>
          </article>
          <article className='habilidades_details'>
          <FaFigma className='habilidades_details-icon'/>
          <h4>Figma</h4>
          </article>
          <article className='habilidades_details'>
          <SiCanva className='habilidades_details-icon'/>
          <h4>Canva</h4>
          </article>
          <article className='habilidades_details'>
          <FaTrello className='habilidades_details-icon'/>
          <h4>Trello</h4>
          </article>
        </div>
      </div>
    </div>
    </section>

}
export default Skills;