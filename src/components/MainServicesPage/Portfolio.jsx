import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const slider = [
    {
      id: 1,
      url: "https://interscaleedu.com/en/blog/wp-content/uploads/2024/03/bim-scaler-what-is-architectural-drafting-1024x737.webp",
      title: "DRAFT CAD SOLUTION",
      desc: "High-precision drafting tailored for architects and engineers.",
    },
    {
      id: 2,
      url: "https://www.shutterstock.com/image-photo/architects-concept-engineer-architect-designer-600nw-2478691889.jpg",
      title: "BIM INTEGRATION",
      desc: "Smart Building Information Modeling for seamless workflows.",
    },
    {
      id: 3,
      url: "https://interscaleedu.com/en/blog/wp-content/uploads/2024/03/bim-scaler-what-is-architectural-drafting-1024x737.webp",
      title: "3D VISUALIZATION",
      desc: "Transforming concepts into realistic architectural visuals.",
    },
  ];

  return (
    <div className="max-w-[1240px] m-auto relative z-0 py-10 px-4">
      <h1 className="py-2 text-3xl md:text-4xl font-semibold text-start">
        Exploring Our BIM Project Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {slider.map((item) => (
          <div
            key={item.id}
            className="relative group w-full h-[380px] overflow-hidden shadow-md"
          >
            <div
              style={{ backgroundImage: `url(${item.url})` }}
              className="w-full h-full bg-cover bg-center transform duration-500 group-hover:scale-110"
            ></div>

            <Link
              to="/services"
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end"
            >
              <div className="text-white p-4">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm mt-2">{item.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
