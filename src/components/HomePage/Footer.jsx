import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Footer = ({ heading, description }) => {
  // Ensure description is always an array of strings
  const descList = Array.isArray(description) ? description : [];

  return (
    <footer>
      <div className="max-w-full m-auto relative z-0 my-30">
        <div className="max-w-[1240px] m-auto capitalize">
          <div className="grid gap-4 grid-rows-3 md:grid-rows-1 md:grid-cols-3 px-4">
            {/* Heading & Description */}
            <div className="md:pr-[20%]">
              <h1 className="py-2 text-2xl md:text-3xl font-semibold">
                {heading || "Draft CAD Solution – Precision in Every Detail"}
              </h1>
              <div className="pt-3 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                {descList.length > 0 ? (
                  descList.map((desc, index) => (
                    <p key={index} className="flex items-start gap-2 my-1">
                      <MdPlayArrow className="mt-1" />
                      {desc ||
                        "We deliver high-quality BIM solutions that boost efficiency and accuracy in construction projects. Our expertise and client-focused approach help architects, contractors, and builders turn concepts into reality."}
                    </p>
                  ))
                ) : (
                  <p className="flex items-start gap-2 my-1">
                    <MdPlayArrow className="mt-1" /> We are committed to We
                    deliver high-quality BIM solutions that boost efficiency and
                    accuracy in construction projects. Our expertise and
                    client-focused approach help architects, contractors, and
                    builders turn concepts into reality.
                  </p>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-lg py-2 md:text-2xl font-semibold">
                Contact Details
              </h2>
              <p className="mt-4 text-[#2a2a2a] text-[15px] tracking-wide font-medium capitalize">
                Draft CAD Solution
              </p>
              <p className="mt-4 text-[#5a5a5a] text-[15px] tracking-wide font-thin">
                Phone:
              </p>
              <p className="mt-2 text-[#2a2a2a] text-[15px] tracking-wide font-medium">
                +91 92659 33521
              </p>
              <p className="mt-4 text-[#5a5a5a] text-[15px] tracking-wide font-thin">
                Email:
              </p>
              <p className="mt-2 text-[#2a2a2a] text-[15px] lowercase font-medium">
                draftcadsolution@gmail.com
              </p>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-lg py-2 md:text-2xl font-semibold">
                Our Location
              </h2>
              <p className="py-2 text-[#5a5a5a] text-[15px] tracking-wide font-light">
                Ahmedabad, India — Serving Clients Worldwide
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="md:pt-30">
            <div className="flex gap-4 flex-col md:flex-row justify-between items-center text-[#787878] text-sm">
              <p>Copyright © 2025 Deep Vaishnav</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
