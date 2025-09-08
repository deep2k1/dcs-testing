// src/utils/DisableRightClickWrapper.jsx
import React from "react";

const DisableRightClickWrapper = ({ children }) => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // block right-click inside this wrapper
  };

  return <div onContextMenu={handleContextMenu}>{children}</div>;
};

export default DisableRightClickWrapper;
