import React from 'react'
import './header.css'
import HeaderBtn from './HeaderBtn'
import SocialLinks from './SocialLinks'
import profile from '../../assets/me5.svg'

const Header = () => {
  return (
    <header className='header__container'>
      <div className='container '>
        <h5>Hello I'm</h5>
        <h1>Anbarasan</h1>
        <h5>Frontend developer with <span className='text-primary'>3+ Years</span> of experience</h5>
        <HeaderBtn />
        <SocialLinks />

        <div className="profile">
          <img src={profile} alt="Profile of the developer" />
        </div>

        <a href="/#contact" className='scroll__down'>Scroll Down</a>
    

       
      </div>
    </header>
  )
}

export default Header