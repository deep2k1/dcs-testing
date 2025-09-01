import React, { useEffect, useState } from "react";
import model from "../../assets/header/model.jpg";
import { GiSofa } from "react-icons/gi";
import { MdPerson } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className="max-w-[full] m-auto">
        <div className=" max-w-[1240px] m-auto relative z-0 mt-14">
          <div className="flex flex-col px-4 gap-4 md:flex-row justify-between ">
            <div className="py-4 md:w-[50%]">
              <div className="">
                <h3 className="py-2 tracking-[0.1rem] font-semibold uppercase text-[10px] md:text-[0.8rem] ">
                  Detailed Drawings. Flawless Execution.
                </h3>
                <h1 className="text-4xl md:text-6xl font-semibold leading-[1.3]">
                  {" "}
                  We are Draft Cad Solution, Architecture Drafters.
                </h1>
                <p className="leading-6  text-[0.8rem] py-4 text-[#535353]">
                  At Draft Cad Solution, we specialize in precise CAD drafting,
                  BIM modeling, and 3D visualization—delivering detailed,
                  reliable, and construction-ready plans that help architects,
                  contractors, and builders bring their vision to life with
                  confidence.
                </p>
                {/* <div className="my-6 flex items-center gap-4">
                  <div className="flex items-center ">
                    <GiSofa className="mx-2" />
                    <h3>400+ Projects Done</h3>
                  </div>
                  <div className="flex items-center ">
                    <MdPerson className="mx-2" />
                    <h3>100+ Projects Done</h3>
                  </div>
                </div> */}
              </div>
              <div></div>
            </div>
            <div className="md:w-[50%] ">
              <img
                className="w-auto md:float-right md:max-w-[380px] object-cover"
                src="https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/2020/06/man-in-black-suit-jacket.jpg"
                alt="analytics image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
