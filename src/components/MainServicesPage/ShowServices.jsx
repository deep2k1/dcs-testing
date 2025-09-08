import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

const ShowServices = ({ heading, description = [], list = [] }) => {
  const [openId, setOpenId] = useState(null);

  const toggleDropdown = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-[1240px] m-auto relative z-0 py-10">
      <div className="grid gap-8 flex-cols px-4">
        {/* Heading & Description */}
        <div>
          <h1 className="py-2 text-3xl md:text-4xl font-semibold">{heading}</h1>
          {description.map((desc, idx) => (
            <p
              key={idx}
              className="pt-4 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light"
            >
              {desc}
            </p>
          ))}
        </div>

        {/* Services List */}
        <div className="grid md:grid-cols-3 gap-4 px-4 md:px-0">
          {list.map((service) => (
            <div
              key={service.id}
              className="flex flex-col p-4 rounded shadow-sm"
            >
              <button
                onClick={() => toggleDropdown(service.id)}
                className="flex items-center cursor-pointer py-1 text-xs md:text-base tracking-wide font-light hover:text-blue-500 text-[#5a5a5a]"
              >
                <MdPlayArrow
                  className={`transform transition-transform duration-300 ${
                    openId === service.id ? "rotate-90 text-blue-500" : ""
                  }`}
                />
                {service.title}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === service.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                  {service.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowServices;
