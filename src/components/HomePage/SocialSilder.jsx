import React, { useEffect, useState, useRef } from "react";
import image1 from "../../assets/images/hero/heroSlider1.svg";
import image2 from "../../assets/images/projectSlider/projectSlider2.svg";
import image3 from "../../assets/images/projectSlider/projectSlider3.svg";
import DisableRightClickWrapper from "../Common/DisableRightClickWrapper";

const SocialSilder = () => {
  const sliderRef = useRef(null);

  const slider = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slider.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slider.length]);

  return (
    // 👇 Wrap everything in DisableRightClickWrapper
    <DisableRightClickWrapper>
      <div ref={sliderRef}>
        <div className="max-w-full m-auto relative z-0 mb-14">
          {/* background image changes with slider */}
          <div
            style={{ backgroundImage: `url(${slider[currentIndex]})` }}
            className="w-full h-[600px] bg-cover bg-center duration-500 transition-all object-cover"
          >
            <div className="max-w-[1240px] m-auto">
              <div className="bg-[#1a1a1a] text-white flex gap-4 md:max-w-[380px] md:flex-row items-end float-end mx-4">
                <div className="m-4 p-4">
                  <h4 className="text-2xl font-semibold leading-[1.3]">
                    DRAFT CAD SOLUTION
                  </h4>
                  <p className="text-[0.8rem] py-4 text-[#fffff]">
                    At Draft Cad Solution, we transform concepts into precise
                    architectural and structural drawings that are ready for
                    execution. Specializing in CAD drafting, BIM modeling, and
                    3D visualization, we deliver detailed, accurate, and
                    reliable plans for residential, commercial, and industrial
                    projects. Our commitment to accuracy, speed, and quality
                    makes us the trusted partner for architects, contractors,
                    and builders worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DisableRightClickWrapper>
  );
};

export default SocialSilder;
