import React from "react";
import ux from "./image/ux.jpg";
import webdev from "./image/webdev.jpg";

const Services = () => {
  return (
    <div className="py-10 mt-10 bg-dark2  text-light  px-10 overflow-x-hidden" id="service">
      <h1 className="text-3xl lg:text-5xl font-bold pb-4 text-center lg:pb-4 pt-5 lg:pt-0">
        Services
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        <div className="w-full lg:w-2/4 px-2">
          <h1 className="text-xl lg:text-3xl font-bold pb-4">Design</h1>
          <p className="text-md lg:text-lg  leading-6">
            One of my core beliefs is that designing is not just about beauty
            and aesthetics. It is about considering the users while designing.
            I'm committed to creating smooth user experiences while maintaining
            fashion.
          </p>
        </div>
        <div className="w-full lg:w-2/4">
          <img
            src={ux}
            alt=""
            className="w-60 h-60 lg:w-[20rem] lg:h-[20rem] rounded-full m-auto"
            data-aos="zoom-in"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse mt-5 lg:flex-row items-center gap-4 lg:gap-0">
        <div className="w-full lg:w-2/4">
          <img
            src={webdev}
            alt=""
            className="w-60 h-60 lg:w-[20rem] lg:h-[20rem] rounded-full m-auto"
            data-aos="zoom-in"
          />
        </div>
        <div className="w-full lg:w-2/4 px-2">
          <h1 className="text-xl lg:text-3xl font-bold pb-4">Develope</h1>
          <p className="text-md lg:text-lg  leading-6">
            Websites should be fluid while dissipating relevant information. I
            build and develop  websites with modern web development
            tools that prioritize search engine optimization (SEO).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
