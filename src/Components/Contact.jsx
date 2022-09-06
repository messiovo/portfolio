import React from "react";
import { Link } from "react-router-dom";
import map from "./image/map.jpg"

const Contact = () => {
  return (
    <div className="py-10 mt-10 bg-medium  text-dark  px-10">
      <h1 className="text-3xl lg:text-5xl font-bold pb-4 text-center lg:pb-4 pt-5 lg:pt-0">
        Contact me
      </h1>
      <div className="flex flex-col lg:flex-row ">
        <form action="" className="w-2/4 px-10">
          <div className="flex flex-col lg:flex-row gap-2  mb-8">
            <span className="flex flex-col">
              <label
                htmlFor="first name"
                className="text-dark text-sm lg:text-lg font-semibold"
              >
                First name
              </label>
              <input
                type="text"
                className="w-[17rem] h-10 px-4 outline-none  bg-dark text-light text-sm lg:text-md font-semibold "
              />
            </span>
            <span className="flex flex-col">
              <label
                htmlFor="last name"
                className="text-dark text-sm lg:text-lg font-semibold"
              >
                Last name
              </label>
              <input
                type="text"
                className="w-[17rem] h-10 px-4 outline-none bg-dark text-light text-sm lg:text-md font-semibold  "
              />
            </span>
          </div>
          <div className="  mb-8">
            <span className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-dark text-sm lg:text-lg font-semibold"
              >
                Subject
              </label>
              <input
                type="text"
                className="w-[17rem] lg:w-[34.5rem] h-10 px-4 outline-none  bg-dark text-light text-sm lg:text-md font-semibold "
              />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="text area"
              className="text-dark text-sm lg:text-lg font-semibold"
            >
              Text area
            </label>
            <textarea
              name=""
              id=""
              cols="28"
              rows="6"
              className="outline-none bg-dark  text-light text-sm lg:text-md py-4 font-semibold px-4 placeholder:"
            ></textarea>
          </div>
          <Link to="/contact">
            <button className="rounded-full px-[6.8rem] py-2 mt-4 bg-light font-bold m-auto block text-dark text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in ">
              Submit
            </button>
          </Link>
        </form>
        <div className="w-2/4">
            <img src={map} alt="" className="w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
