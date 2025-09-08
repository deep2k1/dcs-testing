import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import OurServices from "./OurServices";
import Project from "./Project";
import Footer from "./Footer";
import SocialSilder from "./SocialSilder";
import Space from "../Common/Space";
import Software from "./Software";
import GoToTop from "../Common/GoToTop";

const HomePage = () => {
  return (
    <div>
      <Navbar styled={"BgColor"} />
      <Space />
      <Hero />
      <SocialSilder />
      <OurServices />
      <Project />
      <Software />
      <GoToTop />
      <Footer heading={"Precision in Every Detail"} />
    </div>
  );
};

export default HomePage;
