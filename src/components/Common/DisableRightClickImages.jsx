// src/utils/DisableRightClickImages.jsx
import { useEffect } from "react";

const DisableRightClickImages = () => {
  useEffect(() => {
    const disableContextMenu = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return null; // no UI, just behavior
};

export default DisableRightClickImages;
