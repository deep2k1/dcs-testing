import React from "react";
import { GrIntegration } from "react-icons/gr";
import { FaFirstOrder, FaUser } from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { BiSolidDetail } from "react-icons/bi";

const coreValues = [
  {
    icon: GrIntegration,
    title: "Integrity",
    desc: "Work with honesty, transparency, and responsibility.",
  },
  {
    icon: FaFirstOrder,
    title: "Quality First",
    desc: "Deliver precise and reliable drawings every time.",
  },
  {
    icon: FcCollaboration,
    title: "Collaboration",
    desc: "Value teamwork and effective communication.",
  },
  {
    icon: BiSolidDetail,
    title: "Innovation",
    desc: "Apply creative solutions and modern techniques.",
  },
  {
    icon: GrIntegration,
    title: "Excellence in Detail",
    desc: "Focus on accuracy and perfection in every detail.",
  },
  {
    icon: FaUser,
    title: "Client-Centered Approach",
    desc: "Prioritize client needs and long-term satisfaction.",
  },
];

const Guide = () => {
  return (
    <div className="max-w-full m-auto relative z-0 bg-transparent pt-20 pb-30">
      <div className="max-w-[1240px] m-auto px-4">
        <div className="md:col-span-3 pb-10">
          <h1 className="text-3xl md:text-4xl font-bold py-4">Core Values</h1>
          <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
            At Draft Cad Solution, our values are the foundation of every
            project we deliver. They inspire us to provide precise architectural
            drafting solutions while fostering trust, creativity, and long-term
            client satisfaction. Our principles include:
          </p>
        </div>

        {/* Map through values */}
        <div className="w-full grid gap-4 md:gap-10 grid-rows-6 md:grid-rows-2 md:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = value.icon; // dynamically render icon
            return (
              <div key={index}>
                <div className="flex items-center gap-x-4">
                  <Icon
                    size={40}
                    className="text-white bg-orange-400 border-orange-400 border-2 shadow-2xl shadow-[#5a5a5a] p-2"
                  />
                  <h2 className="text-lg py-2 md:text-2xl font-semibold">
                    {value.title}
                  </h2>
                </div>
                <p className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Guide;
