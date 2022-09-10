import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCards } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
const Projects = () => {
  return (
    
    <div className="py-10   text-light  px-10">
      <h1 className="text-3xl lg:text-5xl font-bold pb-8 text-center lg:pb-10 pt-5 lg:pt-0">
        My Work
      </h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[240px] h-[320px]"
      >
        <SwiperSlide className='bg-medium'>Slide 1</SwiperSlide>
        <SwiperSlide className='bg-dark2'>Slide 2</SwiperSlide>
        <SwiperSlide className='bg-light'>Slide 3</SwiperSlide>
       
      </Swiper>
      </div>
  )
}

export default Projects