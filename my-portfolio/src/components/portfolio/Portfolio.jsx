import React from 'react'
import './portfolio.css'
import BG from '../../assets/mouthart.jpg'

const data = [
{
  id: 1,
  image: BG,
  title: 'project title',
  github: 'https://github.com/Duffimuss',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 2,
  image: BG,
  title: 'project title',
  github: 'https://github.com/Duffimuss',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 3,
  image: BG,
  title: 'project title',
  github: 'https://github.com/Duffimuss',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 4,
  image: BG,
  title: 'project title',
  github: 'https://github.com/Duffimuss',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 5,
  image: BG,
  title: 'project title',
  github: 'https://github.com/Duffimuss',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 6,
  image: BG,
  title: 'project title',
  github: 'https://github.com/Duffimuss',
  demo: 'https://github.com/Duffimuss'
},

]
/* data map reference */
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio