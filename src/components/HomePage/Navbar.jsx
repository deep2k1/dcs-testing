import { useState, useEffect } from "react";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  RiArrowRightSFill,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Company",
    href: "/about",
    dropdown: [
      { name: "About", href: "/about" },
      { name: "Quality Work", href: "/work" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        name: "CAD Services",
        href: "/services/cad_page",
        subDropdown: [
          { name: "2D Drafting", href: "/services/cad_page/TwoD_Drafting" },
          { name: "3D CAD Modeling", href: "/services/cad_page/ThreeD_CAD" },
          {
            name: "Architectural CAD Drafting",
            href: "/services/cad_page/Architectural_CAD",
          },
          {
            name: "Structural CAD Drafting",
            href: "/services/cad_page/Structural_CAD",
          },
          { name: "MEP CAD Drafting", href: "/services/cad_page/MEP_CAD" },
          {
            name: "PDF/Paper to CAD Conversion",
            href: "/services/cad_page/PDF_to_CAD",
          },
          {
            name: "As-Built Drawings",
            href: "/services/cad_page/As_Built",
          },
          {
            name: "CAD Documentation",
            href: "/services/cad_page/CAD_Documentation",
          },
        ],
      },
      {
        name: "BIM Services",
        href: "/services/bim_page",
        subDropdown: [
          {
            name: "Architectural BIM",
            href: "/services/bim_page/Architectural_BIM",
          },
          {
            name: "Revit family creation",
            href: "/services/bim_page/Revit_family_creation",
          },
          { name: "CAD TO BIM", href: "/services/bim_page/CAD_TO_BIM" },
          { name: "Scan To BIM", href: "/services/bim_page/Scan_To_BIM" },
          { name: "PDF To Revit", href: "/services/bim_page/PDF_To_Revit" },
          { name: "4D BIM Services", href: "/services/bim_page/4D_BIM" },
          { name: "5D BIM Services", href: "/services/bim_page/5D_BIM" },
          {
            name: "Clash Detection",
            href: "/services/bim_page/Clash_Detection",
          },
          {
            name: "Structural BIM Modeling Service",
            href: "/services/bim_page/Structural_BIM_Modeling_Service",
          },
          {
            name: "Bim Facility Management",
            href: "/services/bim_page/BIM_Facility_Management",
          },
          {
            name: "BIM Coordination Services",
            href: "/services/bim_page/BIM_Coordination",
          },
          {
            name: "MEP BIM Modeling Services",
            href: "/services/bim_page/MEP_BIM",
          },
        ],
      },
      {
        name: "Shop Drawing Services",
        href: "/services/Shop_Drawings",
        subDropdown: [
          {
            name: "Glazing shop drawing",
            href: "/services/Shop_Drawings/Glazing_shop",
          },
          {
            name: "Millwork Shop Drawings",
            href: "/services/Shop_Drawings/Millwork_Shop",
          },
          {
            name: "Structural Steel Shop Drawings",
            href: "/services/Shop_Drawings/Structural_Steel",
          },
        ],
      },
      {
        name: "3D Modeling Services",
        href: "/services/3D_modeling",
        subDropdown: [
          {
            name: "Revit Modeling Services",
            href: "/services/3D_modeling/Revit_Modeling",
          },
          {
            name: "CAD Modeling Services",
            href: "/services/3D_modeling/CAD_Modeling",
          },
          {
            name: "Structural Steel Shop Drawings",
            href: "/services/3D_modeling/SketchUp_Modeling",
          },
        ],
      },
    ],
  },
  // { name: "Projects", href: "/projects" },
  { name: "Contact us", href: "/contact", button: true },
];

const Navbar = ({ styled }) => {
  const [nav, setNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const handleMenu = () => setNav(!nav);
  const closeMenu = () => {
    setNav(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown(null); // close sub when switching
  };

  const toggleSubDropdown = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };

  // ✅ Close mobile nav automatically on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styled} fixed top-0 left-0 w-full z-[9999]`}>
      <div className="w-full m-auto bg-transparent relative">
        <div className="max-w-[1240px] m-auto">
          <div className="md:py-2 flex justify-between items-center bg-transparent ">
            <div className="flex md:grid grid-cols-2 w-full">
              {/* Logo */}
              <h6 className="text-2xl p-4 leading-[1] font-bold cursor-pointer">
                <Link to="/" className="block text-black ">
                  DRAFT CAD <br />
                  <span className="text-blue-500">SOLUTION</span>
                </Link>
              </h6>

              {/* Desktop Menu */}
              <div className="self-center px-4">
                <ul className="hidden md:flex justify-between items-center content-center font-sans text-sm ">
                  {navLinks.map((link, index) =>
                    link.dropdown ? (
                      <div key={index} className="group relative ">
                        <li className="py-3 px-4 flex items-center transition delay-75 duration-300 ease-in-out hover:-translate-1 hover:scale-105">
                          <Link to={link.href}>{link.name}</Link>
                          <RiArrowUpSFill className="rotate-180 transition-all group-hover:rotate-0  " />
                        </li>

                        {/* First-level dropdown */}
                        <div className="absolute opacity-0 shadow-md group-hover:opacity-100 w-[220px] bg-[#d4d4d4]">
                          <ul className="hidden group-hover:block text-black text-center transition-all duration-300 ease-in-out">
                            {link.dropdown.map((item, i) => (
                              <li
                                key={i}
                                className="hover:bg-[#ffffff] flex items-center justify-between px-4 relative group/item transition delay-75 duration-300 ease-in-out hover:-translate-1 hover:scale-105"
                              >
                                <Link
                                  to={item.href}
                                  className="w-full py-2.5 text-left"
                                >
                                  {item.name}
                                </Link>

                                {/* SubDropdown opens when hovering the Dropdown */}
                                {item.subDropdown && (
                                  <div className="relative  ">
                                    <RiArrowRightSFill
                                      size={20}
                                      className="text-black ml-2"
                                    />
                                    <div className="absolute top-0 left-full hidden group-hover/item:block bg-white shadow-md w-[220px]">
                                      <ul>
                                        {item.subDropdown.map((sub, j) => (
                                          <li
                                            key={j}
                                            className="hover:bg-gray-100 px-4 py-2 text-left transition delay-75 duration-300 ease-in-out hover:-translate-1 hover:scale-105"
                                          >
                                            <Link to={sub.href}>
                                              {sub.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <li
                        key={index}
                        className={`p-4 ${
                          link.button ? "bg-black" : ""
                        } transition delay-75 duration-300 ease-in-out hover:-translate-1 hover:scale-105`}
                      >
                        <Link
                          to={link.href}
                          className={
                            link.button
                              ? "text-white font-bold text-center px-2 block "
                              : ""
                          }
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Mobile Toggle Button */}
              <div
                className="w-full flex justify-end md:hidden cursor-pointer z-100 items-center content-center "
                aria-label="Toggle menu"
              >
                <div
                  onClick={handleMenu}
                  className="mr-4 p-2 bg-black transition delay-75 duration-300 ease-in-out hover:scale-105"
                >
                  {nav ? (
                    <div className="bg-amber-500 border-2 border-black">
                      <AiOutlineClose
                        size={20}
                        className="bg-black text-white "
                      />
                    </div>
                  ) : (
                    <div className="bg-amber-500 border-2 border-black">
                      <AiOutlineMenu
                        size={20}
                        className="bg-black text-white "
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 left-0 h-full w-[100%] bg-white text-black text-center border-r border-black
            transition-all duration-300 ease-in-out z-50 ${
              nav ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
            >
              <ul className="flex flex-col items-center font-sans">
                <li className="w-full pt-4.5 font-bold cursor-pointer">
                  <Link to="/" onClick={closeMenu}>
                    DRAFT CAD <br />
                    <span className="text-blue-500">SOLUTION</span>
                  </Link>
                </li>
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`py-3 w-11/12 border-b border-black text-left ${
                      index === 0 ? "mt-[30px] border-t" : ""
                    } ${link.button ? "bg-black m-4 text-center" : ""}`}
                  >
                    {link.dropdown ? (
                      <>
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleDropdown(index)}
                        >
                          <span className="px-2">{link.name}</span>
                          {openDropdown === index ? (
                            <RiArrowUpSFill />
                          ) : (
                            <RiArrowDownSFill />
                          )}
                        </div>
                        {openDropdown === index && (
                          <ul className="ml-4 mt-2">
                            {link.dropdown.map((item, i) => (
                              <li
                                key={i}
                                className="py-2 border-b border-gray-300"
                              >
                                {item.subDropdown ? (
                                  <>
                                    <div
                                      className="flex justify-between items-center cursor-pointer"
                                      onClick={() => toggleSubDropdown(i)}
                                    >
                                      <span>{item.name}</span>
                                      {openSubDropdown === i ? (
                                        <RiArrowUpSFill />
                                      ) : (
                                        <RiArrowDownSFill />
                                      )}
                                    </div>
                                    {openSubDropdown === i && (
                                      <ul className="ml-4 mt-2">
                                        {item.subDropdown.map((sub, j) => (
                                          <li
                                            key={j}
                                            className="py-2 border-b border-gray-200"
                                          >
                                            <Link
                                              to={sub.href}
                                              onClick={closeMenu}
                                            >
                                              {sub.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                ) : (
                                  <Link to={item.href} onClick={closeMenu}>
                                    {item.name}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={closeMenu}
                        className={
                          link.button
                            ? "text-white font-bold text-center py-2 px-8 block"
                            : "px-2 block"
                        }
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
