import React from 'react'
import './portfolio.css'
import BG from '../../assets/code2.png'
import BG2 from '../../assets/code3.png'
import BG3 from '../../assets/code4.png'
import BG4 from '../../assets/code5.png'
import BG5 from '../../assets/code.png'
import BG6 from '../../assets/code6.png'

const data = [
{
  id: 1,
  image: BG,
  title: 'Reverse Polish Notation Calculator (Ada)',
  github: 'https://github.com/Duffimuss/Reverse-Polish-Notation-Calculator',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 2,
  image: BG2,
  title: 'Cellular Automata (Java)',
  github: 'https://github.com/Duffimuss/Cellular-Automata',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 3,
  image: BG6,
  title: 'Palindrome Finder (Ada)',
  github: 'https://github.com/Duffimuss/Palindrome-Finder',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 4,
  image: BG4,
  title: 'Word Count (Java',
  github: 'https://github.com/Duffimuss/word-count',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 5,
  image: BG5,
  title: 'The Paper Boy (Javascript/React)',
  github: 'https://github.com/Duffimuss/my-react-chat-app',
  demo: 'https://github.com/Duffimuss'
},
{
  id: 6,
  image: BG3,
  title: 'Foodscraps (python)',
  github: 'https://github.com/Duffimuss/reddit-food-scraper',
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