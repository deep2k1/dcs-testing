import React from "react";
import Navbar from "./HomePage/Navbar";
import Footer from "./HomePage/Footer";
import Space from "./Common/Space";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <Space />
      error 404
      <Footer />
    </div>
  );
};

export default ErrorPage;
