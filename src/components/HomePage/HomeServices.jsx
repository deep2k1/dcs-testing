import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const servicesData = [
  {
    img: "https://www.alphacadservice.com/wp-content/themes/alphacad/images/banner-img.png",
    title: "CAD Services",
    desc: "We offer a wide range of CAD services to support your design and construction projects. Our team delivers accurate and detailed 2D drafting and detailing for better communication and visualization.",
    services: [
      { name: "2D Drafting", href: "/services" },
      { name: "3D CAD Modeling", href: "/services" },
      { name: "Architectural CAD Drafting", href: "/services" },
      { name: "Structural CAD Drafting", href: "/services" },
      { name: "MEP CAD Drafting", href: "/services" },
      { name: "PDF/Paper to CAD Conversion", href: "/services" },
      { name: "As-Built Drawings", href: "/services" },
      { name: "CAD Documentation", href: "/services" },
    ],
  },
  {
    img: "https://engisoftengineering.com/wp-content/uploads/2023/10/structural-bim-1024x582.jpg",
    title: "BIM Services",
    desc: "We provide a range of BIM services to improve accuracy and efficiency in construction. Our team delivers precise 3D models, ensuring better project coordination and minimizing errors from design to completion.",
    services: [
      { name: "Architectural BIM", href: "/services" },
      { name: "Revit family creation", href: "/services" },
      { name: "CAD TO BIM", href: "/services" },
      { name: "Scan To BIM", href: "/services" },
      { name: "PDF To Revit", href: "/services" },
      { name: "4D BIM Services", href: "/services" },
      { name: "5D BIM Services", href: "/services" },
      { name: "Clash Detection", href: "/services" },
      { name: "Structural BIM Modeling Service", href: "/services" },
      { name: "Bim Facility Management", href: "/services" },
      { name: "MEP BIM Modeling Services", href: "/services" },
    ],
  },
  {
    img: "https://static.wixstatic.com/media/efc3a5_607adcf836ab4f5db90fc095e2c25c96~mv2.jpg/v1/fill/w_640,h_402,al_c,q_90,enc_avif,quality_auto/efc3a5_607adcf836ab4f5db90fc095e2c25c96~mv2.jpg",
    title: "Shop Drawing Services",
    desc: "Our Scan to BIM services convert point cloud data into accurate 3D models. This service is essential for renovation, retrofitting, and facility management projects, allowing you to capture the existing conditions and integrate them into BIM workflow.",
    services: [
      { name: "Glazing shop drawing", href: "/services" },
      { name: "Millwork Shop Drawings", href: "/services" },
      { name: "Structural Steel Shop Drawings", href: "/services" },
    ],
  },
  {
    img: "https://cdn.bluent.com/images/illustration.webp",
    title: "3D Modeling Services",
    desc: "We provide top-notch visualization services to help bring your designs to life. Our team creates realistic 3D renderings and animations that allow you to visualize projects before they are built.",
    services: [
      { name: "Revit Modeling Services", href: "/services" },
      { name: "CAD Modeling Services", href: "/services" },
      { name: "Structural Steel Shop Drawings", href: "/services" },
    ],
  },
];

const HomeServices = () => {
  return (
    <div className="max-w-[1240px] m-auto relative z-0 md:py-20 px-4">
      <div className="w-full">
        <div className="md:col-span-3 md:pb-10">
          <h3 className="py-4 tracking-[0.1rem] font-semibold uppercase text-xs md:text-[0.8rem] ">
            What we do
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
        </div>
      </div>
      <div className="w-full grid gap-4 md:gap-10 grid-rows-4 md:grid-rows-1 md:grid-cols-4">
        {servicesData.map((service, index) => (
          <div key={index}>
            <h3 className="py-2 text-xs md:text-base md:h-[200px] ">
              <img
                src={service.img}
                alt={service.title}
                className="h-full object-cover "
              />
            </h3>
            <h2 className="text-lg py-2 md:text-2xl font-semibold">
              {service.title}
            </h2>
            <p className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="md:col-span-4 text-xs md:text-base md:mt-15 text-center flex justify-center py-10 md:py-0">
        <Link
          to="/services"
          className="text-black cursor-pointer hover:text-blue-600 "
        >
          <span className="flex items-center content-center font-bold border-b-2 w-fit ">
            <span>
              <FaLongArrowAltRight className="md:mx-2" />
            </span>
            <span className="mx-1 md:mx-2">Get in details</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
