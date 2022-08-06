import React from 'react'
import './experience.css'
import { frontendSkills ,familiarSkills, industryKnowledge } from '../../data/skills';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Stacks</h3>
          <div className="experience__content">
            {
              frontendSkills.map(skill => {
                let { id, icon, name, experience } = skill

                return (
                  <article className='experience__details' key={id}>
                    {icon}
                    <div>
                      <h4>{name}</h4>
                      <small className='text-light'>{experience}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>


        <div className="experience__others">
          <h3>Familiar Stacks</h3>
          <div className="experience__content">
          {
              familiarSkills.map(skill => {
                let { id, icon, name, experience } = skill

                return (
                  <article className='experience__details' key={id}>
                    {icon}
                    <div>
                      <h4>{name}</h4>
                      <small className='text-light'>{experience}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        <div className="experience__others">
          <h3>Industry Knowlege</h3>
          <div className="experience__content">
          {
              industryKnowledge.map(skill => {
                let { id, icon, name, experience } = skill

                return (
                  <article className='experience__details' key={id}>
                    {icon}
                    <div>
                      <h4>{name}</h4>
                      <small className='text-light'>{experience}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience