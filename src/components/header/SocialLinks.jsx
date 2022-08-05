import React from 'react'
import { socialLinks } from '../../data/socialLinks'

const SocialLinks = () => {
  return (
    <div className='header__socials flex-col'>
      {
        socialLinks.map(link => {
          let { id, icon, url } = link;
          return (
            <a key={id} href={url} target='_blank' rel="noreferrer">
              {icon}
            </a>
          )
        })
      }
    </div>
  )
}

export default SocialLinks