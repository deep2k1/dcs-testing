import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/software/softwareLogo1.svg";
import image2 from "../../assets/software/softwareLogo2.svg";
import image3 from "../../assets/software/softwareLogo3.svg";
import image4 from "../../assets/software/softwareLogo4.svg";
import image5 from "../../assets/software/softwareLogo5.svg";
import image6 from "../../assets/software/softwareLogo6.svg";
import image7 from "../../assets/software/softwareLogo7.svg";

const SoftwareList = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 3, img: image3 },
  { id: 4, img: image4 },
  { id: 5, img: image5 },
  { id: 6, img: image6 },
  { id: 7, img: image7 },
];

const Software = () => {
  return (
    <div className="max-w-[1240px] m-auto relative z-0 py-20">
      {/* Heading */}
      <div className="w-full flex px-4">
        <div className="md:col-span-3 md:pb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Software We Use</h1>
        </div>
      </div>
      <div className="w-full grid gap-4 md:gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
        {SoftwareList.map((item) => (
          <Link
            key={item.id}
            to={"/services"}
            className=" cursor-pointer scale-90 hover:scale-100 transition "
          >
            <div className="flex justify-center items-center">
              <img
                src={item.img}
                alt={`software-${item.id}`}
                className="h-28 md:h-40 object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Software;
