import React from "react";
import ManImage from "../../../assets/header/thoughts.png"; // update with your image path

const AboutMe = ({ styled, title, text, line }) => {
  return (
    <section className={styled}>
      <div className="max-w-[1240px] h-[450px] md:h-[600px] mx-auto">
        <div className=" mx-auto px-6 flex flex-col md:flex-row items-center relative">
          <div className="z-50 px-4 w-full absolute md:left-10 md:top-1/2 md:-translate-y-1/2  md:max-w-sm">
            <div className="flex flex-col pt-60 pr-20 md:justify-center md:p-0 gap-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-gray-300 text-sm md:text-lg leading-7">
                {line}
              </p>
              <p className="text-gray-300 text-sm md:text-lg leading-7">
                {text}
              </p>
            </div>
          </div>
          <div className="w-full z-20 ">
            <img
              src={ManImage}
              alt="About Me"
              className="w-[250px] mx-auto md:w-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
