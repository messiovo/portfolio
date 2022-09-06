import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useId } from "react";

const Testimonial = () => {
  const card = [
    {
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "Okeychuckwu",
      company: "GWC limited",
    },
    {
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "Kevwe, Spoc Manager",
      company: "Emperor Telecoms",
    },
    {
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "Nehikhare, Co-founder",
      company: "ChemsCrystals",
    },
    {
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "Abel, Founder",
      company: "Josephine Foundation",
    },
  ];
  const id = useId();
  return (
    <div className="py-10   text-dark  px-10">
      <h1 className="text-3xl lg:text-5xl font-bold pb-4 text-center lg:pb-4 pt-5 lg:pt-0">
        Testimonial
      </h1>
      <Carousel
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=" z-10 rounded-2xl"
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,

            slidesToSlide: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,

            slidesToSlide: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,

            slidesToSlide: 2,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        swipeable
      >
        {card.map((items) => (
          <div
            key={id + items}
            className=" bg-dark rounded-2xl text-md lg:text-lg text-light px-10 p-7 mx-0 md:mx-4 lg:mx-4 flex flex-col gap-3 shadow"
          >
            <p className="">{items.text}</p>
            <span className="text-end  font-bold">
              <p>{items.position}</p>
              <p>{items.company}</p>
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
