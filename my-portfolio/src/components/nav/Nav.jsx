import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiCodeAlt} from 'react-icons/bi'
import {BiBriefcaseAlt2} from 'react-icons/bi'
import {BiChat} from 'react-icons/bi'
import {BiMailSend} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiCodeAlt /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BiBriefcaseAlt2 /></a>
      <a href="#chat" onClick={() => setActiveNav('#chat')} className={activeNav === '#chat' ? 'active' : ''}><BiChat /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMailSend /></a>
    </nav>
  )
}

export default Nav