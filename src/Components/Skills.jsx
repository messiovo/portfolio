import React from "react";
import "./Project.css";

const Skills = () => {
  return (
    <div className="py-10 w-screen mt-10 bg-dark2 text-light  px-10" id="skill">
      <h1 className="text-3xl lg:text-5xl font-bold pb-10 lg:pb-14 text-center pt-5 lg:pt-0">
        Personal Skills
      </h1>
      <div className="m-auto w-full lg:w-[35%]">
        <div className="flex flex-col pb-3 ">
          <div className="flex justify-between pb-1">
            <span className="text-md lg:text-lg font-semibold  ">
              Teamwork
            </span>
            <span>90%</span>
          </div>
          <div className="border-2 border-medium rounded-lg relative">
            <div className="relative w-0 rounded-md bg-medium h-2 com"></div>
          </div>
        </div>
        <div className="flex flex-col pb-3 ">
          <div className="flex justify-between pb-1">
            <span className="text-md lg:text-lg font-semibold  ">
              Attention to details
            </span>
            <span>90%</span>
          </div>
          <div className="border-2 border-medium rounded-lg relative">
            <div className="relative w-0 rounded-md bg-medium h-2 com"></div>
          </div>
        </div>
        <div className="flex flex-col pb-3 ">
          <div className="flex justify-between pb-1">
            <span className="text-md lg:text-lg font-semibold  ">
             Persistency
            </span>
            <span>85%</span>
          </div>
          <div className="border-2 border-medium rounded-lg relative">
            <div className="relative w-0 rounded-md bg-medium h-2 per"></div>
          </div>
        </div>
        <div className="flex flex-col pb-3 ">
          <div className="flex justify-between pb-1">
            <span className="text-md lg:text-lg font-semibold  ">
             Communication
            </span>
            <span>80%</span>
          </div>
          <div className="border-2 border-medium  rounded-lg relative">
            <div className="relative w-0 rounded-md bg-medium h-2 fle"></div>
          </div>
        </div>
        <div className="flex flex-col  ">
          <div className="flex justify-between pb-1">
            <span className="text-md lg:text-lg font-semibold  ">
             Flexibility
            </span>
            <span>80%</span>
          </div>
          <div className="border-2 border-medium rounded-lg  relative">
            <div className="relative w-0 rounded-md bg-medium h-2 fle"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
