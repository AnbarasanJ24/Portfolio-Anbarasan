import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className='header__socials flex-col'>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin className='pointer' /></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><BsGithub  className='pointer'/></a>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin  className='pointer'/></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><BsGithub  className='pointer'/></a>
    </div>
  )
}

export default SocialLinks