import React, { useEffect, useState } from "react";

const Img = () => {
  const slider = [
    {
      url: "https://interscaleedu.com/en/blog/wp-content/uploads/2024/03/bim-scaler-what-is-architectural-drafting-1024x737.webp",
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
          style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
          className="w-full h-[600px] bg-cover bg-center duration-500 transition-all object-cover "
        ></div>
      </div>
    </div>
  );
};

export default Img;
