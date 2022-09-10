import React from "react";
import gwc from "./image/gwc.jpg";
import emperor from "./image/emperor.jpg";
import "./Project.css";
import foundation from "./image/foundation.jpg";
import vetcare from "./image/vetcare.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
const Projects = () => {
  return (
    <div className="py-10   text-light  px-10 swiper" id="project">
      <h1 className="text-3xl lg:text-5xl font-bold pb-8  text-center lg:pb-10 pt-12 ">
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
            <p className="text-dark2 p-2 text-center font-semibold text-md">
              Telecommunication maintenance service provider
            </p>
            <a
              href="https://www.emperortelecoms.com/"
              target="_blank"
              rel="noopener"
            >
              <button className="py-2 px-6 lg:px-8 bg-dark2 rounded-full text-light font-bold text-md  hover:text-medium  ">
                view site
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark2 ">
          <img src={vetcare} alt="" className="w-full h-60" />

          <div className=" flex flex-col items-center gap-2">
            <p className="text-light p-2 text-center font-semibold text-md">
              Vertinary care provider
            </p>
            <a
              href="https://staging.pooraiser.com/"
              target="_blank"
              rel="noopener"
            >
              <button className="py-2 px-6 lg:px-8 bg-dark rounded-full text-light font-bold text-md  hover:text-medium  ">
                view site
              </button>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-light">
          {" "}
          <img src={gwc} alt="" className="w-full h-60" />
          <div className=" flex flex-col items-center gap-2">
            <p className="text-dark p-2 text-center font-semibold text-md">
              Study abroad consultation provider
            </p>
            <a
              href="https://www.gwclimited.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              <button className="py-2 px-6 lg:px-8 bg-dark rounded-full text-light font-bold text-md  hover:text-medium  ">
                view site
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark2">
          {" "}
          <img src={foundation} alt="" className="w-full h-60" />
          <div className=" flex flex-col items-center gap-2">
            <p className="text-light p-2 text-center font-semibold text-md">
              Non-profit organization, charity organiztion.
            </p>
            <a
              href="https://josephines-foundation.vercel.app"
              target="_blank"
              rel="noopener"
            >
              <button className="py-2 px-6 lg:px-8 bg-dark rounded-full text-light font-bold text-md  hover:text-medium  ">
                view site
              </button>
            </a>
          </div>
        </SwiperSlide>
       
      </Swiper>
      <div className="relative left-[41rem] bottom-[12rem] z-20 opacity-0 transition-opacity ease-in duration-500 swipe animate-bounce md:opacity-1 sm:opacity-1">
        <p className="text-sm text-medium">swipe</p>
      </div>
    </div>
  );
};

export default Projects;
