import React, { useEffect, useState } from "react";

const Img = ({ image }) => {
  const slider = image.map((url) => ({ url }));

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
