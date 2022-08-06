import React from 'react'
import './portfolio.css'
import { portfolioData } from '../../data/portfolio'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">

        {
          portfolioData.map(portfolio => {
            let { id, image, title, tech, github,description, demo } = portfolio;

            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div>
                <h3>{title}</h3>
                <small>{tech}</small>
                <p>{description}</p>
                </div>
                <div className="portfolio__item-btn">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio