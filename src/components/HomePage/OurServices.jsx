import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Data from "../../api/api.jsx";

import Image1 from "../../assets/images/service/cad.jpg";
import Image2 from "../../assets/images/service/bim.jpg";
import Image3 from "../../assets/images/service/shop.jpg";
import Image4 from "../../assets/images/service/3d.jpg";

// Just keep images in an array
const servicesImage = [Image1, Image2, Image3, Image4];

const OurServices = () => {
  return (
    <div className="w-full bg-[#f8f8f8]">
      <div className="max-w-[1240px] m-auto relative z-0 md:py-20 px-4">
        <div className="w-full">
          <div className="md:col-span-3 md:pb-10">
            <h3 className="py-4 tracking-[0.1rem] font-semibold uppercase text-xs md:text-[0.8rem] ">
              What we do
            </h3>
            <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
          </div>
        </div>

        {/* Services grid */}
        <div className="w-full grid gap-4 md:gap-10 grid-rows-4 md:grid-rows-1 md:grid-cols-4">
          {Data.map((service, index) => (
            <Link
              to={`/services/${service.id}`}
              key={index}
              className="hover:scale-110 transition"
            >
              <div className="md:h-[200px] overflow-hidden rounded-xl shadow">
                <img
                  src={servicesImage[index]}
                  alt={service.hero.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="text-lg py-2 md:text-2xl font-semibold">
                {service.hero.title}
              </h2>
              <p className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                {service.hero.para}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="md:col-span-4 text-xs md:text-base md:mt-15 text-center flex justify-center py-10 md:py-0">
          <Link
            to="services"
            className="text-black cursor-pointer hover:text-blue-600 "
          >
            <span className="flex items-center content-center font-bold border-b-2 w-fit ">
              <FaLongArrowAltRight className="md:mx-2" />
              <span className="mx-1 md:mx-2">Get in details</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
