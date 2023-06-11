import React from 'react'
import resume from '../../assets/Anbarasan_FullStack_Resume.pdf'

const HeaderBtn = () => {
  return (
    <div className='btn-container'>
        {/* Commented for some time */}
        <button><a href={resume} download className='btn'>Download Resume</a></button>
        <button><a href="/#contact" className='btn btn-primary'>Let's Talk</a></button>
    </div>
  )
}

export default HeaderBtn