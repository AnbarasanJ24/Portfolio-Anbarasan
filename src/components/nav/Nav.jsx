import React, { useState } from 'react'
import './nav.css';
import {BiHomeHeart,BiUser,BiBookmarkHeart,BiDialpadAlt,BiMessage} from 'react-icons/bi'
const Nav = () => {
  const [active, setActive] = useState('#');
  return (
    <nav>
      <a href="/#" onClick={()=> setActive('#')} className={active === '#' ? 'active' : ''}><BiHomeHeart /></a>
      <a href="/#about" onClick={()=> setActive('#about')} className={active === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="/#experience" onClick={()=> setActive('#experience')} className={active === '#experience' ? 'active' : ''}><BiBookmarkHeart /></a>
      <a href="/#services" onClick={()=> setActive('#services')} className={active === '#services' ? 'active' : ''}><BiDialpadAlt /></a>
      <a href="/#portfolio" onClick={()=> setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><BiHomeHeart /></a>
      <a href="/#contact" onClick={()=> setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessage /></a>
    </nav>
  )
}

export default Nav