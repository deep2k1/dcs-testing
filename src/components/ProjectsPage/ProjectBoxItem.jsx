import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const ProjectBoxItem = ({
  title,
  description,
  specifications,
  slides,
  currentIndex,
  onPrev,
  onNext,
  onDotClick,
}) => {
  return (
    <div className="projectBox grid gap-4 grid-rows-2 md:grid-rows-1 md:grid-cols-3 py-20 px-4">
      {/* Left Section */}
      <div className="md:pr-[20%]">
        <h1 className="py-2 text-3xl md:text-4xl font-semibold">{title}</h1>
        <p className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
          {description}
        </p>

        {/* Specs list */}
        <ul className="text-[#5a5a5a] text-xs md:text-base">
          {specifications.map((spec, i) => (
            <li key={i} className="py-1">
              <span className="flex items-center content-center">
                <TbArrowBadgeRightFilled />
                <span className="mx-1 md:mx-2">{spec}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Slider) */}
      <div className="col-span-2">
        <div className="max-w-[800px] h-[250px] md:h-[400px] w-full m-auto relative group">
          <div
            className="w-full h-full bg-center bg-cover duration-500"
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          ></div>

          {/* Arrows */}
          <div
            className="absolute top-1/2 left-10 -translate-y-1/2 text-2xl text-black cursor-pointer"
            onClick={onPrev}
          >
            ❮
          </div>
          <div
            className="absolute top-1/2 right-10 -translate-y-1/2 text-2xl text-black cursor-pointer"
            onClick={onNext}
          >
            ❯
          </div>

          {/* Dots */}
          <div className="flex top-4 justify-center py-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => onDotClick(i)}
                className={`w-1 h-1 mx-2 rounded-full cursor-pointer ${
                  i === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoxItem;
