import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
          </article>
          <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2 Clients</small>
          </article>
          <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
          </article>
        </div>

        <p>
          Hey there, I'm an accredited Software Engineer with a Bachelor's in Computer Science Software Engineering from Radford University.
          I am from Virginia, but last year I moved to Raleigh, NC. I have many skills that you can view by clicking the html tag button. 
          I spend all my time coding and improving my skillset. I am currently working with monetizing api's and web development. 
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About