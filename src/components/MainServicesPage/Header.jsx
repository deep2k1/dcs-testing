import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className="bg-[#3F3F3F]">
      <div className="max-w-[1240px] m-auto px-4 py-20 flex flex-col md:flex-row justify-between text-white">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <Link
          to={"/contact"}
          className="flex items-center mt-10 px-2 md:m-0 md:px-10 py-4 bg-[#1f1f1f] font-bold transition delay-75 duration-300 ease-in-out hover:-translate-1 hover:scale-105 hover:bg-amber-500"
        >
          <FaLongArrowAltRight className="mx-2" />
          <span className="mx-2">Submit Your Requirements</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
