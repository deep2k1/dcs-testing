import React, { useState, useEffect } from "react";

const Project = () => {
  const slides = [
    {
      url: "https://images.template.net/wp-content/uploads/2015/04/Architectural-Model1.jpg",
      title: "Beach",
    },
    {
      url: "https://images.template.net/wp-content/uploads/2015/04/Architectural-Designer1.jpg",
      title: "Mountain",
    },
    {
      url: "https://lifeofanarchitect.com/wp-content/uploads/2021/05/First-House-Plan-A201.png",
      title: "Ocean",
    },
    {
      url: "https://interscaleedu.com/en/blog/wp-content/uploads/2024/03/bim-scaler-what-is-architectural-drafting-1024x737.webp",
      title: "Forest",
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
    <div className="max-w-[1240px] m-auto relative z-0 md:py-20">
      <div className="grid gap-4 items-center grid-rows-2 md:grid-rows-1 md:grid-cols-3 px-4">
        <div>
          <h3 className="py-2 text-xs">Most Recent</h3>
          <h1 className="py-2 text-3xl md:text-4xl font-semibold ">Projects</h1>
          <p className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
            A glimpse of the detail and precision we bring to every real draft.”
            <br />
            Reach out today and let’s build your next project together.👉
          </p>
        </div>
        <div className="col-span-2">
          <div className=" max-w-[800px] h-[250px] md:h-[400px] w-full m-auto relative group">
            <div
              className="w-full h-full bg-center bg-cover duration-500"
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
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
  );
};

export default Project;
