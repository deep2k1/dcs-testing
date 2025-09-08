// components/Layout/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import DisableRightClickImages from "./DisableRightClickImages";
import GoToTop from "./GoToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <DisableRightClickImages />
      <Outlet /> {/* this renders the child route */}
      <GoToTop />
    </>
  );
};

export default RootLayout;
