import React from 'react'
import './Portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h2>Portafolio</h2>

        <div className="container portfolio_container">
            <article className='portfolio_item'>
            <div className="portfolio_item-image">
                <img src='./assets/images/pokedex.JPG' alt="" />
            </div>
            <h3>Api Pokedex</h3>
            <div className='portfolio_item-cta'>
            <a href="https://github.com/Kimvo1/Pokedex.git" className='btn'>Github</a>
            <a href="https://pokedex-ecru-ten.vercel.app//" className='btn-primary' target='_blank'>Demo</a>
            </div>  
            </article>

            <article className='portfolio_item'>
            <div className="portfolio_item-image">
                <img src='./assets/images/api_movie.JPG' alt="" />
            </div>
            <h3>Api Movie</h3>
            <div className='portfolio_item-cta'>
            <a href="https://github.com/Kimvo1/api-movie.git" className='btn'>Github</a>
            <a href="https://api-movie-weld.vercel.app/" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
            </article>

            <article className='portfolio_item'>
            <div className="portfolio_item-image">
                <img src='./assets/images/dashboard.JPG' alt="" />
            </div>
            <h3>Dashboard</h3>
            <div className='portfolio_item-cta'>
            <a href="https://github.com/programateacademy/genero-front.git" className='btn'>Github</a>
            <a href="https://genero-front-six.vercel.app/" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
            </article>

            <article className='portfolio_item'>
            <div className="portfolio_item-image">
                <img src='./assets/images/to_do_list.JPG' alt="" />
            </div>
            <h3>To Do List</h3>
            <div className='portfolio_item-cta'>
            <a href="https://github.com/Kimvo1/To-do-list.git" className='btn'>Github</a>
            <a href="https://vercel.com/kimvo1s-projects" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
            </article>
        </div>
    </section>
  )
}

export default Portfolio