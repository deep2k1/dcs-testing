import React, { useState, useEffect } from "react";
import Image1 from "../../assets/images/projectSlider/projectSlider1.svg";
import Image2 from "../../assets/images/projectSlider/projectSlider2.svg";
import Image3 from "../../assets/images/projectSlider/projectSlider3.svg";
import Image4 from "../../assets/images/projectSlider/projectSlider4.svg";

import DisableRightClickWrapper from "../Common/DisableRightClickWrapper";

const Project = () => {
  const slides = [
    {
      url: Image1,
      title: "Beach",
    },
    {
      url: Image2,
      title: "Beach",
    },
    {
      url: Image3,
      title: "Beach",
    },
    {
      url: Image4,
      title: "Beach",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <DisableRightClickWrapper>
      <div className="w-full bg-[#f8f8f8]">
        <div className="max-w-[1240px] m-auto relative z-0 md:py-20 ">
          <div className="grid gap-4 items-center grid-rows-2 md:grid-rows-1 md:grid-cols-3 px-4">
            <div>
              <h3 className="py-2 text-xs">Most Recent</h3>
              <h1 className="py-2 text-3xl md:text-4xl font-semibold ">
                Projects
              </h1>
              <p className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                A glimpse of the detail and precision we bring to every real
                draft.”
                <br />
                Reach out today and let’s build your next project together.👉
              </p>
            </div>
            <div className="col-span-2">
              <div className=" max-w-[800px] h-[250px] md:h-[400px] w-full m-auto relative group">
                <div
                  className="w-full h-full bg-center bg-cover duration-500"
                  style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                  }}
                ></div>

                <div
                  className=" absolute top-1/2 left-10 -translate-y-1/2 text-2xl  text-black cursor-pointer"
                  onClick={prevSlide}
                >
                  ❮
                </div>

                <div
                  className=" absolute top-1/2 right-10 -translate-y-1/2 text-2xl   text-black cursor-pointer"
                  onClick={nextSlide}
                >
                  ❯
                </div>

                <div className="flex top-4 justify-center py-2">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-1 h-1 mx-2 rounded-full cursor-pointer ${
                        index === currentIndex ? "bg-black" : "bg-gray-400"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DisableRightClickWrapper>
  );
};

export default Project;
