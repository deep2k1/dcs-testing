import React from "react";
import { useParams } from "react-router-dom"; // if using react-router
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";
import Space from "../../Common/Space";
import Header from "../Header";
import Content from "../Content";
import Img from "../Img";
import ShowServices from "../ShowServices";
import Portfolio from "../Portfolio";
import Data from "../../../api/api.json";

const CADPage = () => {
  const { id } = useParams(); // example: /services/1 or /services/2
  const serviceData = Data.find((item) => item.id === id);

  if (!serviceData) {
    return <div className="text-center p-20">Service not found</div>;
  }

  return (
    <>
      <Navbar styled={"BgColor"} />
      <Space />
      <Header title={serviceData.hero.title} button={serviceData.hero.button} />
      <Content
        heading={serviceData.introSection.heading}
        text={serviceData.introSection.text}
      />
      <Img image={serviceData.introSection.image} />
      <ShowServices
        heading={serviceData.servicesSection.heading}
        description={serviceData.servicesSection.description}
        list={serviceData.servicesSection.servicesList}
      />
      <Portfolio />
      <Footer
        highTxt={"Get In Touch"}
        para={
          "Have a project in mind or need precise drafting support? We’re just a message away. At Draft CAD Solution, we’re committed to delivering accurate, reliable, and professional CAD drawings that bring your vision to life. Reach out today and let’s start building your ideas together"
        }
      />
    </>
  );
};

export default CADPage;
