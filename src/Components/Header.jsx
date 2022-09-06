import React from "react";
import mercypic from "./image/mercy.jpg";
const Header = () => {
  return (
    <>
      <section className=" pt-20 px-10 pb-10 flex flex-col lg:flex-row items-center bg-dark">
        <div className="w-full lg:w-2/4 ">
          <img src={mercypic} alt="mercyovo avatar" className="rounded-full w-[80%] m-auto" />
        </div>
        <div className="w-full lg:w-2/4 text-light text-center lg:pr-20">
          <h1 className="text-3xl lg:text-4xl font-bold pb-2 lg:pb-4 ">Mercy Ogheneovo</h1>
          <h3 className="text-lg lg:text-2xl font-semibold pb-2 lg:pb-4">Web developer /UX designer</h3>
          <p className="text-md lg:text-lg font-medium pb-8">Enthusiastic and passionate about web designs and web development</p>
          <button className="py-2 px-10 lg:px-12 bg-medium rounded-full text-dark font-bold text-md lg:text-lg">Download CV</button>
        </div>
      </section>
    </>
  );
};

export default Header;
