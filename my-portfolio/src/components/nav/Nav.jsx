import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiCodeAlt} from 'react-icons/bi'
import {BiBriefcaseAlt2} from 'react-icons/bi'
import {BiChat} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHome /></a>
      <a href="#about"><BiUserCircle /></a>
      <a href="#experience"><BiCodeAlt /></a>
      <a href="#services"><BiBriefcaseAlt2 /></a>
      <a href="#contact"><BiChat /></a>
    </nav>
  )
}

export default Nav