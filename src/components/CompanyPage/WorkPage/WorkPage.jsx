import React from "react";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";
import Space from "../../Common/Space";
import Step from "../../ContactPage/Step";
import Hero from "../AboutPage/Hero";

const WorkPage = () => {
  return (
    <>
      <Navbar styled={"BgColor2"} />
      <Space />
      <Hero
        styled={"BgColor2"}
        title={"Our Work"}
        text={
          "We turn ideas into precise, construction-ready designs. Our CAD drafting, BIM modeling, and 3D visualization services ensure every project—residential, commercial, or industrial—moves forward with accuracy and confidence."
        }
      />
      <Step />
      <Footer />
    </>
  );
};

export default WorkPage;
