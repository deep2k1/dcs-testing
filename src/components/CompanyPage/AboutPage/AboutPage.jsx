import React from "react";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";
import Hero from "./Hero";
import Us from "./Us";
import Details from "./Details";
import Dnp from "./DnP";
import Our from "./Our";
import Guide from "./Guide";
import Space from "../../Common/Space";

const AboutPage = () => {
  return (
    <div>
      <Navbar styled={"BgColor2"} />
      <Space />
      <Hero
        styled={"BgColor2"}
        title={"About Us"}
        text={
          "At Draft CAD Solution, we deliver precision-driven CAD drafting, BIM modeling, and 3D visualization—creating clear, detailed, and construction-ready drawings that keep residential, commercial, and industrial projects on track."
        }
      />
      <Our />
      <Guide />
      <Details />
      {/* <Dnp /> */}
      <Us />
      <Footer
        highTxt={"Get In Touch"}
        para={
          "Have a project in mind? Let’s bring it to life with precision and quality. At Draft CAD Solution, we believe great collaboration starts with a simple conversation. Share your requirements, and our team will respond quickly to guide you with the right drafting or BIM solution. Your vision deserves accuracy, speed, and reliability—let’s create it together"
        }
      />
    </div>
  );
};

export default AboutPage;
