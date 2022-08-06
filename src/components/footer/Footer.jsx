import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {FaTelegram} from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/* <a href="/#" className='footer__logo'>Anbarasan</a> */}
      <ul className='footer__links'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com/AnbarasanJ8" target='_blank' rel="noreferrer" ><FiTwitter className='footer__icons' /></a>
        <a href="https://web.telegram.org/z/" target='_blank' rel="noreferrer"><FaTelegram className='footer__icons'/></a>
        <a href="mailto:anbarasanj24@gmail.com" target='_blank' rel="noreferrer"><BiMailSend className='footer__icons'/></a>
        <a href="https://api.whatsapp.com/?send?phone=+919791333906"
              target='_blank' rel="noreferrer"><BsWhatsapp className='footer__icons'/></a>
      </div>
      <div className="footer__copyright">
        <small> Handcrafted with Love! &copy; 2022</small>
      </div>
    </footer>
  )
}

export default Footer