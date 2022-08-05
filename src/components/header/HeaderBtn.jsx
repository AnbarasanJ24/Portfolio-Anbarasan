import React from 'react'
import resume from '../../assets/Anbarasan-Frontend-Engineer-3YOE.pdf'

const HeaderBtn = () => {
  return (
    <div className='btn-container'>
        <button><a href={resume} download className='btn'>Download Resume</a></button>
        <button><a href="/#contact" className='btn btn-primary'>Lets'talk</a></button>
    </div>
  )
}

export default HeaderBtn