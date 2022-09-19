import React from "react";
import { TypeAnimation } from "react-type-animation";

const SectionText = () => {
  return (
    <div className="pt-10 px-12 h-auto w-full">
      <div className=" m-auto text-xl lg:text-3xl text-light font-bold text-center">
        <h2 className="pb-4 lg:pb-8">
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "My stack are HTML",
              1000,
              "My stack are CSS",
              1000,
              "My stack are Javascript",
              1000,
              "My stack are Figma",
              1000,
              "My stack are React",
              1000,
              "My stack are Tailwind CSS",
              1000,
              "My stack are SASS",
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
         
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </h2>
      </div>
     
    </div>
  );
};

export default SectionText;
