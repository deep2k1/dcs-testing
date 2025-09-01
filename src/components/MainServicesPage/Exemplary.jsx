import React, { useState, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Exemplary = () => {
  return (
    <div className="bg-transparent pt-20">
      <div className="max-w-[1240px] m-auto relative z-0 ">
        <div className="gap-8 flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 px-4">
          <div className="col-span-2 md:pr-[20%]">
            <h1 className="py-2 text-3xl md:text-4xl font-semibold ">
              An Exemplary End Result
            </h1>
            <p className="pt-8 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they’ve made. This
              paragraph is also for those who are looking out for a reliable
              interior designer. You can use a few enticing words and flaunt
              your capabilities that will attract future clients and encourage
              them to hire you right away. I lead projects from start to finish.
              Click edit button to change this text.
            </p>
          </div>
          <div>
            <img
              src="https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/2020/06/gray-dining-table-under-pendant-lamps.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exemplary;
