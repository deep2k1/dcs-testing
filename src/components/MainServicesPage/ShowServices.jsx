import React from "react";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";

const services = [
  { id: 1, name: "2D Drafting", href: "/services/cad_page/TwoD_Drafting" },
  { id: 2, name: "3D CAD Modeling", href: "/services/cad_page/ThreeD_CAD" },
  {
    id: 3,
    name: "Architectural CAD Drafting",
    href: "/services/cad_page/Architectural_CAD",
  },
  {
    id: 4,
    name: "Structural CAD Drafting",
    href: "/services/cad_page/Structural_CAD",
  },
  { id: 5, name: "MEP CAD Drafting", href: "/services/cad_page/MEP_CAD" },
  {
    id: 6,
    name: "PDF/Paper to CAD Conversion",
    href: "/services/cad_page/PDF_to_CAD",
  },
  { id: 7, name: "As-Built Drawings", href: "/services/cad_page/As_Built" },
  {
    id: 8,
    name: "CAD Documentation",
    href: "/services/cad_page/CAD_Documentation",
  },
];

const ShowServices = () => {
  return (
    <div>
      <div className="max-w-[1240px] m-auto relative z-0 py-10">
        <div className="grid gap-8 flex-cols px-4">
          <div className="">
            <h1 className="py-2 text-3xl md:text-4xl font-semibold ">
              Transform Your Design Process with Structural Modeling Services
            </h1>
            <p className="pt-8 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
              Our Structural Modeling Services support a range of projects, from
              commercial buildings to industrial facilities. We work closely
              with architects, engineers, and contractors. This collaboration
              ensures that every detail meets industry standards and project
              requirements.
            </p>
            <p className="pt-8 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
              At Cadbricks, we are committed to delivering high-quality models
              on time. Our experts pay close attention to every aspect of the
              structural design. We aim to provide our clients with accurate,
              reliable models that make the construction process easier and more
              efficient.
            </p>
          </div>
          <div className="grid grid-col-3 md:grid-rows-1 md:grid-cols-3 px-4 md:px-0">
            <div className="flex flex-col">
              {services.slice(0, 3).map((s, i) => (
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
            <div className="flex flex-col">
              {services.slice(3, 6).map((s, i) => (
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
            <div className="flex flex-col">
              {services.slice(6, 8).map((s, i) => (
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
        </div>
      </div>
    </div>
  );
};

export default ShowServices;
