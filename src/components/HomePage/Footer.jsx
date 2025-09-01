import React from "react";

const Footer = ({ para, highTxt }) => {
  return (
    <div>
      <div className="max-w-full m-auto relative z-0 my-30">
        <div className="max-w-[1240px] m-auto capitalize">
          <div className="grid gap-4 grid-rows-3 md:grid-rows-1 md:grid-cols-3 px-4">
            <div className="md:pr-[20%]">
              <h1 className="py-2 text-3xl md:text-4xl font-semibold ">
                {highTxt ? highTxt : "Get in Touch"}
              </h1>
              <p className="pt-3 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                Whenther it's small detail or major question, we're avaliable
              </p>
              <p className="pt-3 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                {para
                  ? para
                  : "Every project begins with a conversation and grows into something remarkable with the right support. Share your vision with us, and together we’ll turn it into reality."}
              </p>
            </div>
            <div>
              <h2 className="text-lg py-2 md:text-2xl font-semibold">
                Contact Details
              </h2>
              <p className="mt-4 text-[#2a2a2a] text-[15px] tracking-wide font-medium capitalize">
                Draft CAD Soulution
              </p>
              <p className="mt-4 text-[#5a5a5a] text-[15px] tracking-wide font-thin">
                Phone:
              </p>
              <p className="mt-2 text-[#2a2a2a] text-[15px] tracking-wide font-medium ">
                +91 92659 33521
              </p>
              <p className="mt-4 text-[#5a5a5a] text-[15px] tracking-wide font-thin">
                Email:
              </p>
              <p className="mt-2 text-[#2a2a2a] text-[15px] lowercase font-medium ">
                draftcadsolution@gmail.com
              </p>
            </div>
            <div className="">
              <div>
                <h2 className="text-lg py-2 md:text-2xl font-semibold ">
                  My Location
                </h2>
                <p className="py-2 text-[#5a5a5a] text-[15px] tracking-wide font-light">
                  Ahmedabad, India — Serving Clients Worldwide
                </p>
              </div>
            </div>
          </div>
          <div className=" md:pt-30">
            <div className="flex gap-4 flex-col md:flex-row justify-between items-center text-[#787878] text-sm ">
              <div>
                <p>Copyright © 2025 Deep Vaishnav</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
