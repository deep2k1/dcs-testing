// src/components/ServicePage/ServicePage.jsx
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
import Data from "../../../api/api.jsx";
import ErrorPage from "../../ErrorPage.jsx";

const ServicePage = () => {
  const { id } = useParams();

  // ✅ Define serviceData safely
  const serviceData = Data.find((page) => page.id === id);

  // ✅ Handle invalid URL / missing data
  if (!serviceData) {
    return <ErrorPage />;
  }

  return (
    <>
      <Navbar styled="BgColor" />
      <Space />

      {/* Hero / Header Section */}
      {serviceData.hero?.title && <Header title={serviceData.hero.title} />}

      {/* Intro / Content Section */}
      {serviceData.introSection && (
        <Content
          heading={serviceData.introSection?.heading || ""}
          text={serviceData.introSection?.text || []}
        />
      )}

      {/* Image Section */}
      {serviceData.introSection?.imageSlider && (
        <Img image={serviceData.introSection.imageSlider} />
      )}

      {/* Services Section */}
      {serviceData.servicesSection && (
        <ShowServices
          heading={serviceData.servicesSection?.heading || ""}
          description={serviceData.servicesSection?.description || []}
          list={serviceData.servicesSection?.servicesList || []}
        />
      )}

      {/* Portfolio Section */}
      <Portfolio />

      {/* Footer Section */}
      <Footer
        heading={serviceData.footerSection?.heading || "Get in Touch"}
        description={serviceData.footerSection?.description || []}
      />
    </>
  );
};

export default ServicePage;
