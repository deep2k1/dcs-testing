import React from "react";
import ContactUs from "./ContactUs";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Hero from "../CompanyPage/AboutPage/Hero";
import Step from "./Step";
import Space from "../Common/Space";

const ContactPage = () => {
  return (
    <div>
      <Navbar styled={"BgColor5"} />
      <Space />
      <Hero
        styled={"BgColor5"}
        title={"Contact Us"}
        text={[
          "Whenther it's small detail or major question, we're avaliable.",
          "Connect for Quick Solution.",
        ]}
      />
      <ContactUs />
      <Footer
        highTxt={"Get In Touch"}
        para={
          "Every project begins with a conversation and grows into something remarkable with the right support. Share your vision with us, and together we’ll turn it into reality."
        }
      />
    </div>
  );
};

export default ContactPage;
