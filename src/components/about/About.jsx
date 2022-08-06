import React from 'react'
import './about.css';
import profileAbout from '../../assets/me6.png'
import { aboutMe } from '../../data/about-me';


const About = () => {
  return (
    <section id='about'>

      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={profileAbout} alt="About Me" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            {
              aboutMe.map(item => {
                let {id, icon, title, description} = item;
                return (
                  <article className="about__card" key={id}>
                    {icon }
                    <h5>{title}</h5>
                    <small>{ description}</small>
                  </article>
                )
              })
            }
          </div>
          {/* <ul className='about__description'>
            <li>Proficient front-end engineer with 3 years of experience</li>
            <li>Enhanced web performance & security using the relevant tech stack</li>
            <li>Able to support backend and deployment team requirements with ease</li>
          </ul> */}
          <a href="/#contact" className='btn btn-primary m-2'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About