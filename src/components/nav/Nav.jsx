import React, { useState } from 'react'
import { navbar } from '../../data/nav';
import './nav.css';

const Nav = () => {
  const [active, setActive] = useState('/#');
  return (
    <nav>
      {
        navbar.map(menu => {
          let {id,icon,value} = menu;
          return (
            <a key={id} href={value} onClick={() => setActive(`${value}`)}
             className={active === `${value}` ? 'active' : ''}>
              {icon}
            </a>
          )
        })
      }
    </nav>
  )
}

export default Nav