import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    cursor: "pointer",
  };
  const iconStyle = {
    fontSize: "44px", // Change the size as needed
  };

  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          style={{ ...buttonStyle }}
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
