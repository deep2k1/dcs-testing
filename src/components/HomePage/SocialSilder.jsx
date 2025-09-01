import React, { useEffect, useState } from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import image1 from "../../assets/images/image1.jpg";

const SocialSilder = () => {
  const slider = [
    {
      url: "image1",
    },
    {
      url: "https://www.shutterstock.com/image-photo/architects-concept-engineer-architect-designer-600nw-2478691889.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slider.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="max-w-full m-auto relative z-0 mb-14">
        <div
          style={{ backgroundImage: `url(${image1})` }}
          className="w-full h-[600px] bg-cover bg-center duration-500 transition-all object-cover "
        >
          <div className="max-w-[1240px] m-auto ">
            <div className=" bg-[#1a1a1a] text-white flex gap-4 md:max-w-[380px] md:flex-row items-end float-end mx-4">
              <div className="m-4 p-4">
                <h4 className=" text-2xl font-semibold leading-[1.3]">
                  DRAFT CAD SOLUTION
                </h4>
                <p className="text-[0.8rem] py-4 text-[#fffff]">
                  At Draft Cad Solution, we transform concepts into precise
                  architectural and structural drawings that are ready for
                  execution. Specializing in CAD drafting, BIM modeling, and 3D
                  visualization, we deliver detailed, accurate, and reliable
                  plans for residential, commercial, and industrial projects.
                  Our commitment to accuracy, speed, and quality makes us the
                  trusted partner for architects, contractors, and builders
                  worldwide
                </p>
                {/* <ul className="flex items-center">
                  <li className="py-2 pr-4">
                    <FaLinkedin size={20} />
                  </li>
                  <li className="py-2 pr-4">
                    <FaSquareXTwitter size={20} />
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSilder;
