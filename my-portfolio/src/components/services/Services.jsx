import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Quality Software</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>I document EVERYTHING!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I test before writing code!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I use Agile and Git/Github!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can write meaningful algorithms!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can learn any framework or language!</p>
            </li>
          </ul>
        </article>
        {/* end of ui ux*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>I use React and Firebase!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can develop aesthetically pleasing UI!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can overhaul websites!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can integrate live chat and other various tools!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can develop your portfolio website for you!!</p>
            </li>
          </ul>
        </article>
        {/*End of Web Design */}

        <article className="service">
          <div className="service__head">
            <h3>API's</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can develop useful API's</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I develop or integrate them using javascript or Python!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can integrate API's into web applications!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can monetize API's!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can write scripts with API's!</p>
            </li>
          </ul>
        </article>
        {/*End of Scripting */}
      </div>
    </section>
  )
}

export default Services