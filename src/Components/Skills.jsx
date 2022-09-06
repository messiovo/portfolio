import React from "react";

const Skills = () => {
  return (
    <div className="py-10 mt-10 bg-medium  text-dark  px-10">
      <h1 className="text-3xl lg:text-5xl font-bold pb-10 lg:pb-14 text-center lg:pb-4 pt-5 lg:pt-0">
        Personal Skills
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-2  justify-center items-center">
        <div className="flex self-start ">
          <h3 className="text-md lg:text-lg font-semibold  ">Communication</h3>
        </div>
        <div className="flex items-center gap-2 ">
          <span className="w-[17rem] lg:w-[20rem] h-2 bg-light block rounded-full">
            <span className="w-[13rem] lg:w-[16rem] h-2 bg-dark block rounded-full moveInLeft"></span>
          </span>
          <p>80%</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-2  justify-center items-center">
        <div className="flex self-start">
          <h3 className="text-md lg:text-lg font-semibold ">Teamwork</h3>
        </div>
        <div className="flex items-center gap-2 lg:ml-[5.5rem] ">
          <span className="w-[17rem] lg:w-[20rem] h-2 bg-light block rounded-full ">
            <span className="w-[15rem] lg:w-[18rem] h-2 bg-dark block rounded-full moveInLeft"></span>
          </span>
          <p>90%</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-2 justify-center items-center">
        <div className="flex self-start">
          <h3 className="text-md lg:text-lg font-semibold">Attention to details</h3>
        </div>
        <div className="flex items-center gap-2 lg:ml-4">
          <span className="w-[17rem] lg:w-[20rem] h-2 bg-light block rounded-full">
            <span className="w-[15rem] lg:w-[18rem] h-2 bg-dark block rounded-full moveInLeft"></span>
          </span>
          <p>90%</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-2 justify-center items-center">
        <div className="flex self-start">
          <h3 className="text-md lg:text-lg font-semibold">Flexibility</h3>
        </div>
        <div className="flex items-center gap-2 lg:ml-[6.7rem]">
          <span className="w-[17rem] lg:w-[20rem] h-2 bg-light block rounded-full">
            <span className="w-[13rem] lg:w-[16rem] h-2 bg-dark block rounded-full moveInLeft"></span>
          </span>
          <p>80%</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-2 justify-center items-center">
        <div className="flex self-start">
          <h3 className="text-md lg:text-lg font-semibold">Persistency</h3>
        </div>
        <div className="flex items-center gap-2 lg:ml-[5.5rem]">
          <span className="w-[17rem] lg:w-[20rem] h-2 bg-light block rounded-full">
            <span className="w-[14rem] lg:w-[17rem] h-2 bg-dark block rounded-full moveInLeft"></span>
          </span>
          <p>85%</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
