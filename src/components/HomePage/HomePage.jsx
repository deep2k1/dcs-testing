import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HomeServices from "./HomeServices";
import Project from "./Project";
import Footer from "./Footer";
import SocialSilder from "./SocialSilder";
import Space from "../Common/Space";
import Software from "./Software";

const HomePage = () => {
  return (
    <div>
      <Navbar styled={"BgColor"} />
      <Space />
      <Hero />
      <SocialSilder />
      <HomeServices />
      <Project />
      <Software />
      <Footer
        highTxt={"Get In Touch"}
        para={
          "Every project begins with a conversation and grows into something remarkable with the right support. Share your vision with us, and together we’ll turn it into reality."
        }
      />
    </div>
  );
};

export default HomePage;
