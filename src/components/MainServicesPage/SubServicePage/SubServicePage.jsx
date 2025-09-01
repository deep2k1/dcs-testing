import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";
import Space from "../../Common/Space";
import Header from "../Header";
import Content from "../Content";
import Img from "../Img";
import ShowServices from "../ShowServices";
import Portfolio from "../Portfolio";
import Data from "../../../api/api.json";

const SubServicePage = () => {
  const { id, subId } = useParams(); // e.g. cad_page + TwoD_Drafting
  const serviceData = Data.find((item) => item.id === id);

  if (!serviceData) {
    return <div className="text-center p-20">Service not found</div>;
  }

  const subService = serviceData.servicesSection.servicesList.find(
    (s) => s.id === subId
  );

  if (!subService) {
    return <div className="text-center p-20">Sub-service not found</div>;
  }

  return (
    <>
      <Navbar styled={"BgColor"} />
      <Space />
      <Header
        title={subService.hero?.title || subService.title}
        button={subService.hero?.button}
      />
      <Content
        heading={subService.introSection?.heading}
        text={subService.introSection?.text}
      />
      {subService.introSection?.image && (
        <Img image={subService.introSection.image} />
      )}
      {subService.servicesSection && (
        <ShowServices
          heading={subService.servicesSection.heading}
          description={subService.servicesSection.description}
          list={subService.servicesSection.servicesList}
        />
      )}
      <Portfolio />
      <Footer />
    </>
  );
};

export default SubServicePage;
