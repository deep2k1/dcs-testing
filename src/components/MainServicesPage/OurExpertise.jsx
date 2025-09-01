import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { SiZedindustries } from "react-icons/si";
import { BiSolidInstitution } from "react-icons/bi";
import { GiFireTail } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";

const OurExpertise = () => {
  const ServiceIconData = [
    {
      id: 1,
      name: "Residential",
      icon: <FaBuilding size={60} />,
    },
    {
      id: 2,
      name: "Hospitality",
      icon: <FaHospital size={60} />,
    },
    {
      id: 3,
      name: "Corporate",
      icon: <MdCorporateFare size={60} />,
    },
    {
      id: 4,
      name: "Commercial",
      icon: <GiCommercialAirplane size={60} />,
    },
    {
      id: 5,
      name: "Industrial",
      icon: <SiZedindustries size={60} />,
    },
    {
      id: 6,
      name: "Retail",
      icon: <GiFireTail size={60} />,
    },
    {
      id: 7,
      name: "Institutional",
      icon: <BiSolidInstitution size={60} />,
    },
    {
      id: 8,
      name: "Educational",
      icon: <MdOutlineCastForEducation size={60} />,
    },
  ];

  return (
    <div>
      <div className="max-w-[1240px] m-auto relative z-0 px-4">
        <div className="md:col-span-3 pb-10 ">
          <h1 className="text-3xl md:text-4xl font-bold">Our Expertise</h1>
        </div>
        <div className="grid grid-cols-2 gap-10 items-center md:grid-cols-4 xl:grid-cols-8 xl:gap-4 px-4 md:px-0">
          {ServiceIconData.map((d) => {
            return (
              <div
                key={d.id}
                className="border-black border-2 flex gap-4 flex-col items-center shadow-2xl shadow-[#5a5a5a] p-6 hover:scale-110 hover:shadow-blue-100 transition "
              >
                {d.icon}
                <p className="text-lg font-semibold">{d.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
