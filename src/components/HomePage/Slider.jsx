import React from "react";

const Slider = () => {
  const slider = [
    {
      url: "https://www.goodwood.com/globalassets/.road--racing/race/historic/2020/9-september/list-best-f1-cars/best-f1-cars-of-all-time-6-red-bull-rb9-f1-2013-usa-sebastian-vettel-steve-etherington-mi-goodwood-07092020.jpg",
    },
    {
      url: "https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/2025-schedule/miami-gp/race/report/race-report_0004_2213398172-1-2.jpg",
    },
    {
      url: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2202213627.jpg?q=w_1110,c_fill",
    },
    {
      url: "https://images.immediate.co.uk/production/volatile/sites/3/2023/03/F1-car-spec-5678f0a.jpg",
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
    <div
      style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
      className="w-full h-[400px] bg-cover bg-center duration-500 transition-all object-cover"
    ></div>
  );
};

export default Slider;
