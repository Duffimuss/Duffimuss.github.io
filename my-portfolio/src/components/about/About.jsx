import React from 'react'
import './about.css'
import ME from '../../assets/flower.jpg'
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
              <small>20+ Completed</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Asperiores, harum tenetur doloremque commodi ratione nesciunt cupiditate. 
          Iusto tempore doloribus in quae aliquam! Ex laudantium nulla vero inventore suscipit doloremque voluptatum?
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About