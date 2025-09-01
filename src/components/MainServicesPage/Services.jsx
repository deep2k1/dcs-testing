import React from "react";
import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const services = [
  {
    img: "https://www.alphacadservice.com/wp-content/themes/alphacad/images/banner-img.png",
    title: "CAD Services",
    desc: "We offer a wide range of CAD services to support your design and construction projects. Our team delivers accurate and detailed 2D drafting and detailing for better communication and visualization.",
    services: [
      { name: "2D Drafting", href: "/service" },
      { name: "3D CAD Modeling", href: "/service" },
      { name: "Architectural CAD Drafting", href: "/service" },
      { name: "Structural CAD Drafting", href: "/service" },
      { name: "MEP CAD Drafting", href: "/service" },
      { name: "PDF/Paper to CAD Conversion", href: "/service" },
      { name: "As-Built Drawings", href: "/service" },
      { name: "CAD Documentation", href: "/service" },
    ],
  },
  {
    img: "https://engisoftengineering.com/wp-content/uploads/2023/10/structural-bim-1024x582.jpg",
    title: "BIM Services",
    desc: "We provide a range of BIM services to improve accuracy and efficiency in construction. Our team delivers precise 3D models, ensuring better project coordination and minimizing errors from design to completion.",
    services: [
      { name: "Architectural BIM", href: "/service" },
      { name: "Revit family creation", href: "/service" },
      { name: "CAD TO BIM", href: "/service" },
      { name: "Scan To BIM", href: "/service" },
      { name: "PDF To Revit", href: "/service" },
      { name: "4D BIM Services", href: "/service" },
      { name: "5D BIM Services", href: "/service" },
      { name: "Clash Detection", href: "/service" },
      { name: "Structural BIM Modeling Service", href: "/service" },
      { name: "Bim Facility Management", href: "/service" },
      { name: "MEP BIM Modeling Services", href: "/service" },
    ],
  },
  {
    img: "https://static.wixstatic.com/media/efc3a5_607adcf836ab4f5db90fc095e2c25c96~mv2.jpg/v1/fill/w_640,h_402,al_c,q_90,enc_avif,quality_auto/efc3a5_607adcf836ab4f5db90fc095e2c25c96~mv2.jpg",
    title: "Shop Drawing Services",
    desc: "Our Scan to BIM services convert point cloud data into accurate 3D models. This service is essential for renovation, retrofitting, and facility management projects, allowing you to capture the existing conditions and integrate them into BIM workflow.",
    services: [
      { name: "Glazing shop drawing", href: "/service" },
      { name: "Millwork Shop Drawings", href: "/service" },
      { name: "Structural Steel Shop Drawings", href: "/service" },
    ],
  },
  {
    img: "https://cdn.bluent.com/images/illustration.webp",
    title: "3D Modeling Services",
    desc: "We provide top-notch visualization services to help bring your designs to life. Our team creates realistic 3D renderings and animations that allow you to visualize projects before they are built.",
    services: [
      { name: "Revit Modeling Services", href: "/service" },
      { name: "CAD Modeling Services", href: "/service" },
      { name: "Structural Steel Shop Drawings", href: "/service" },
    ],
  },
];

const Services = () => {
  return (
    <div className="max-w-full m-auto relative z-0 bg-transparent pt-20 pb-30">
      <div className="max-w-[1240px] m-auto px-4">
        <div className="md:col-span-3 md:pb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        </div>

        {/* Services Grid */}
        <div className="w-full flex flex-col gap-4 md:grid md:gap-10 grid-rows-4 md:grid-rows-1 md:grid-cols-4">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="py-2 text-xs md:text-base">
                <img src={service.img} alt="" srcset="" />
              </h3>
              <h2 className="text-lg py-2 md:text-2xl font-semibold">
                {service.title}
              </h2>
              <p className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                {service.desc}
              </p>
              <div className="flex flex-col">
                {service.services.map((s, i) => (
                  <div className="flex items-center ">
                    <div>
                      <MdPlayArrow />
                    </div>
                    <Link
                      key={i}
                      to={s.href}
                      className="py-1 hover:text-blue-500 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light"
                    >
                      {s.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
