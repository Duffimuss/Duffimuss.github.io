import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/chrisgunter98" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Duffimuss" target='_blank'><FaGithub /></a>
        <a href="https://www.upwork.com/freelancers/~0168b8bedbb16eab87" target="_blank"><SiUpwork /></a>
    </div>
  )
}

export default HeaderSocials