import React from "react";
// import Exemplary from "./Exemplary";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Services from "./Services";
import Hero from "../CompanyPage/AboutPage/Hero";
import Expertise from "./Expertise";
import OurExpertise from "./OurExpertise";
import Space from "../Common/Space";

const MainServicesPage = () => {
  return (
    <>
      <Navbar styled={"BgColor3"} />
      <Space />
      <Hero
        styled={"BgColor3"}
        title={"Our Services"}
        text={
          "Turn your ideas into reality with our fast and reliable CAD drafting services.From detailed 2D plans to advanced 3D models and BIM solutions, we've got you covered. Save time, cut costs, and get unmatched accuracy for every project you take on."
        }
      />
      {/* <Exemplary /> */}
      <Expertise />
      <Services />
      <OurExpertise />
      <Footer />
    </>
  );
};

export default MainServicesPage;
