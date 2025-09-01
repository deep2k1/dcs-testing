import React, { useState } from "react";
import ProjectBoxItem from "./ProjectBoxItem";

const ProjectsPages = () => {
  const projectData = [
    {
      title: "Living Room",
      description:
        "You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.",
      specifications: [
        "First specification list goes here",
        "Second specification list here",
        "Third specification list goes here",
        "And another one goes here",
      ],
      slides: [
        { url: "https://picsum.photos/800/400?1" },
        { url: "https://picsum.photos/800/400?2" },
        { url: "https://picsum.photos/800/400?3" },
      ],
    },
    {
      title: "Bedroom",
      description: "Make your bedroom cozy with our modern design solutions.",
      specifications: [
        "Elegant wall designs",
        "Smart furniture setup",
        "Natural light usage",
        "Comfort-focused planning",
      ],
      slides: [
        { url: "https://picsum.photos/800/400?4" },
        { url: "https://picsum.photos/800/400?5" },
        { url: "https://picsum.photos/800/400?6" },
      ],
    },
    {
      title: "Kitchen",
      description:
        "Functional and stylish kitchen layouts that combine beauty and efficiency.",
      specifications: [
        "Ergonomic cabinet design",
        "Spacious countertops",
        "Eco-friendly appliances",
      ],
      slides: [
        { url: "https://picsum.photos/800/400?7" },
        { url: "https://picsum.photos/800/400?8" },
        { url: "https://picsum.photos/800/400?9" },
      ],
    },
  ];

  const [currentIndexes, setCurrentIndexes] = useState(
    projectData.map(() => 0)
  );

  const prevSlide = (projIndex, slidesLength) => {
    setCurrentIndexes((prev) =>
      prev.map((idx, i) =>
        i === projIndex ? (idx === 0 ? slidesLength - 1 : idx - 1) : idx
      )
    );
  };

  const nextSlide = (projIndex, slidesLength) => {
    setCurrentIndexes((prev) =>
      prev.map((idx, i) =>
        i === projIndex ? (idx === slidesLength - 1 ? 0 : idx + 1) : idx
      )
    );
  };

  const goToSlide = (projIndex, index) => {
    setCurrentIndexes((prev) =>
      prev.map((idx, i) => (i === projIndex ? index : idx))
    );
  };

  return (
    <div className="max-w-[1240px] m-auto relative z-0 ">
      {projectData.map((project, projIndex) => (
        <ProjectBoxItem
          key={projIndex}
          title={project.title}
          description={project.description}
          specifications={project.specifications}
          slides={project.slides}
          currentIndex={currentIndexes[projIndex]}
          onPrev={() => prevSlide(projIndex, project.slides.length)}
          onNext={() => nextSlide(projIndex, project.slides.length)}
          onDotClick={(i) => goToSlide(projIndex, i)}
        />
      ))}
    </div>
  );
};

export default ProjectsPages;
