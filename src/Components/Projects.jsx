import React from "react";
import gwc from "./image/gwc.jpg";
import emperor from "./image/emperor.jpg";
import "./Project.css";
import foundation from "./image/foundation.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
const Projects = () => {
  return (
    <div className="py-10   text-light  px-10 swiper">
      <h1 className="text-3xl lg:text-5xl font-bold pb-8 text-center lg:pb-10 pt-5 lg:pt-0">
        My Work
      </h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[240px] h-[380px] "
      >
        <SwiperSlide className="bg-medium ">
          <img src={emperor} alt="" className="w-full h-60" />

          <div className=" flex flex-col items-center gap-2">
            <p className="text-dark2 p-2 text-center">
              Telecommunication maintenance service provider
            </p>

            <button className="py-2 px-6 lg:px-8 bg-dark2 rounded-full text-light font-bold text-md  hover:text-medium  ">
              view site
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark2">
          {" "}
          <img src={gwc} alt="" className="w-full h-60" />
          <div className=" flex flex-col items-center gap-2">
            <p className="text-light p-2 text-center">
              Study abroad consultation provider
            </p>

            <button className="py-2 px-6 lg:px-8 bg-dark rounded-full text-light font-bold text-md  hover:text-medium  ">
              view site
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-light">
          {" "}
          <img src={foundation} alt="" className="w-full h-60" />
          <div className=" flex flex-col items-center gap-2">
            <p className="text-dark p-2 text-center">
              Non-profit organization, charity organiztion.
            </p>

            <button className="py-2 px-6 lg:px-8 bg-dark rounded-full text-light font-bold text-md  hover:text-medium  ">
              view site
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="relative left-[41rem] bottom-[12rem] z-20 opacity-0 transition-opacity ease-in duration-500 swipe animate-bounce">
      <p className="text-sm text-light">swipe</p>
    </div>
    </div>
  );
};

export default Projects;
