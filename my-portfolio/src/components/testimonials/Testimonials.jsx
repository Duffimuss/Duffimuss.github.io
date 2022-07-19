import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/Cover.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: IMG1,
    cname: 'jane doe',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, hic eius! Veniam dolores explicabo, esse, sunt iusto fuga ratione incidunt inventore eos consequatur possimus, suscipit molestiae nulla at debitis natus?'
  },
  {
    avatar: IMG1,
    cname: 'jane doe',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, hic eius! Veniam dolores explicabo, esse, sunt iusto fuga ratione incidunt inventore eos consequatur possimus, suscipit molestiae nulla at debitis natus?'
  },
  {
    avatar: IMG1,
    cname: 'jane doe',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, hic eius! Veniam dolores explicabo, esse, sunt iusto fuga ratione incidunt inventore eos consequatur possimus, suscipit molestiae nulla at debitis natus?'
  },
  {
    avatar: IMG1,
    cname: 'jane doe',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, hic eius! Veniam dolores explicabo, esse, sunt iusto fuga ratione incidunt inventore eos consequatur possimus, suscipit molestiae nulla at debitis natus?'
  },

];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, cname, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={cname} />
                </div>
                <h5 className="client__name">{cname}</h5>
                <small className='client__review'>
                  {review}
                </small> 
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials