import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Chris Gunter</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#chat">Live Chat</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Duffimuss"><FaGithub/></a>
        <a href="https://linkedin.com/in/chrisgunter98"><BsLinkedin/></a>
        <a href="https://www.upwork.com/freelancers/~0168b8bedbb16eab87"><SiUpwork/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chris Gunter. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer