import React from 'react'
import './Testimonial.css';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const testimonial = () => {
  return (
    <section className="testimonial_container container" id='testimonials'>
        <h2 className="section_title">My Friends Say</h2>
        <span className="section_subtitle">About My Projects.</span>
    
    <Swiper className="testimonial_container"
     loop={true}
     spaceBetween={24}
     grabCursor={true}
     pagination={{
       clickable: true,
     }}
     breakpoints={{
      576:{
         slidesPerView:2,
        },
       768: {
         slidesPerView: 2,
         spaceBetween: 48,
       },
     }}
     modules={[Pagination]}
     >
      {Data.map(({id, image, title, description}) => { 
        return(
        <SwiperSlide className ="testimonial_card" key={id}>
        <img src={image} alt='Not found' className='testimonial_img'/>
        <h3 className="testimonial_name">{title}</h3>
        <p className="testimonial_discription">
            {description}</p>
            </SwiperSlide>
        );
      })}
    </Swiper>
    </section>
  )
}

export default testimonial
