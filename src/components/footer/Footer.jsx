import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FaTelegram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      {/* <a href="/#" className='footer__logo'>Anbarasan</a> */}
      <ul className='footer__links'>
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com"><FiTwitter /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://telegram.com"><FaTelegram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Feel Free to Use!</small>
      </div>
    </footer>
  )
}

export default Footer