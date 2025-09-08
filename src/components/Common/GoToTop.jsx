import React, { useEffect, useState, useCallback } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

const GoToTop = () => {
  const [isVisible, setVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = useCallback(() => {
    const heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll);
    setVisible(winScroll > heightToHidden);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 right-5 z-[9999]">
          <button
            onClick={goToBtn}
            aria-label="Go to top"
            className="text-4xl text-[#2a2a2a] hover:text-amber-500"
          >
            <IoIosArrowDropupCircle />
          </button>
        </div>
      )}
    </>
  );
};

export default GoToTop;
