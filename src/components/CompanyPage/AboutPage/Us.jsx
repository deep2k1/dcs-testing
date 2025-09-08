import React, { useState, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Us = () => {
  return (
    <div className=" py-10">
      <div className="max-w-[1240px] m-auto relative z-0 px-4">
        <div className="grid grid-rows-2 gap-x-4 grid-cols-1 md:grid-rows-1 md:grid-cols-3">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold ">
              Your Partner in Precision Architecture Drafting
            </h1>
          </div>

          <div className="col-span-2 ">
            <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
              We specialize in providing professional drafting services tailored
              to meet your unique project needs. Our commitment to detail and
              accuracy ensures that you receive reliable drawings that save
              time, reduce costs, and support seamless project delivery.
            </p>
            <div className="py-4 flex gap-10">
              <div>
                <h1 className="text-5xl">400+</h1>
                <h3 className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                  Completed Drafting Projects
                </h3>
              </div>
              <div>
                <h1 className="text-5xl">100+</h1>
                <h3 className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                  Happy Clients
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
