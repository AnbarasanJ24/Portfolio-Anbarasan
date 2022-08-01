import React from 'react'
import resume from '../../assets/cv.pdf'

const HeaderBtn = () => {
  return (
    <div>
        <button><a href={resume} download className='btn'>Download Resume</a></button>
        <button><a href="#" className='btn btn-primary'>Lets'talk</a></button>
    </div>
  )
}

export default HeaderBtn