import React from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Hero from "../CompanyPage/AboutPage/Hero";
import Space from "../Common/Space";
import ProjectsPages from "./ProjectsPages";

const ProjectsPage = () => {
  return (
    <>
      <Navbar styled={"BgColor4"} />
      <Space />
      <Hero
        styled={"BgColor4"}
        title={"Our Projects"}
        text={
          "You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away."
        }
      />
      <ProjectsPages />
      <Footer />
    </>
  );
};

export default ProjectsPage;
