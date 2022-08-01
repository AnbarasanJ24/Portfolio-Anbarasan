import React from 'react'
import './header.css'
import HeaderBtn from './HeaderBtn'
import SocialLinks from './SocialLinks'
import profile from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <h5>Hello I'm</h5>
        <h1>Anbarasan</h1>
        <h5>Frontend Developer</h5>
        <HeaderBtn />

        <div className="profile">
          <img src={profile} alt="Profile picture of the developer" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <SocialLinks />
      </div>
    </header>
  )
}

export default Header