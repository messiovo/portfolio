import React from "react";
import { Link } from "react-router-dom";
import map from "./image/map.jpg";

const Contact = () => {
  return (
    <div className="py-10 mt-10 bg-dark2  text-light  px-10" id="contact">
      <h1 className="text-3xl lg:text-5xl font-bold pb-4 text-center lg:pb-4 pt-5 lg:pt-0">
        Contact me
      </h1>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
        <div  className="w-full lg:w-2/4 lg:px-10">
          <div>
          <div className="flex flex-col lg:flex-row lg:pb-2 pt-4 ">
            <span className="flex gap-2  items-center pb-1 w-full lg:w-2/4 self-start">
              <svg
                width="25"
                height="25"
                viewBox="0 0 22 28"
                className="fill-light animate-bounce"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0V0ZM15.21 11.702L11.003 16L6.79001 11.702C6.28415 11.1797 6.0013 10.4811 6.0013 9.754C6.0013 9.02689 6.28415 8.3283 6.79001 7.806C7.03807 7.55103 7.33473 7.34836 7.66244 7.20997C7.99015 7.07158 8.34228 7.00028 8.69801 7.00028C9.05375 7.00028 9.40587 7.07158 9.73358 7.20997C10.0613 7.34836 10.3579 7.55103 10.606 7.806L11.003 8.211L11.396 7.806C11.6441 7.55103 11.9407 7.34836 12.2684 7.20997C12.5962 7.07158 12.9483 7.00028 13.304 7.00028C13.6597 7.00028 14.0119 7.07158 14.3396 7.20997C14.6673 7.34836 14.9639 7.55103 15.212 7.806C15.7179 8.3283 16.0007 9.02689 16.0007 9.754C16.0007 10.4811 15.7179 11.1797 15.212 11.702H15.21Z" />
              </svg>

              <p className="text-sm lg:text-md font-semibold text-light">
                Lagos, Nigeria
              </p>
            </span>
            <span className="flex gap-2  items-center w-full lg:w-2/4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 50 50"
                className="fill-light"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41.6667 12H8.33334C6.04167 12 4.18751 13.875 4.18751 16.1667L4.16667 41.1667C4.16667 43.4583 6.04167 45.3333 8.33334 45.3333H41.6667C43.9583 45.3333 45.8333 43.4583 45.8333 41.1667V16.1667C45.8333 13.875 43.9583 12 41.6667 12ZM41.6667 20.3333L25 30.75L8.33334 20.3333V16.1667L25 26.5833L41.6667 16.1667V20.3333Z" />
              </svg>

              <p className="text-sm lg:text-md font-semibold text-light">
                messiovo@gmail.com
              </p>
            </span>
            </div>
            <h3 className="text-md lg:text-lg font-bold pb-2 pt-5 lg:pt-0">
            Feel free to message me anytime
          </h3>
          
          </div>
        
        <form action="">
          
          <div className="flex flex-col lg:flex-row gap-2  mb-3">
            <input
              type="text"
              className="w-full h-10 px-4 outline-none placeholder-light  bg-dark text-light text-sm lg:text-md font-semibold "
              placeholder="First name"
            />

            <input
              type="text"
              className="w-full h-10 px-4 outline-none placeholder-light bg-dark text-light text-sm lg:text-md font-semibold  "
              placeholder="Last name"
            />
          </div>
          <div className="  mb-3">
            <input
              type="text"
              className=" w-full h-10 px-4 outline-none placeholder-light bg-dark text-light text-sm lg:text-md font-semibold "
              placeholder="Title"
            />
          </div>

          <div className="flex flex-col gap-2">
            <textarea
              name=""
              id=""
              cols="28"
              rows="6"
              className="outline-none bg-dark placeholder-light text-light text-sm lg:text-md py-4 font-semibold px-4 placeholder:"
              placeholder="Message"
            ></textarea>
          </div>
          <Link to="/">
            <button className="rounded-full px-14 py-2 mt-4 bg-dark font-bold m-auto block text-light text-sm lg:text-md hover:text-medium  ">
              Submit
            </button>
          </Link>
        </form>
        </div>
        <div className="w-full lg:w-2/4">
          <img src={map} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
