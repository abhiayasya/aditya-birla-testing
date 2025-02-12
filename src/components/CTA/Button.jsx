"use client";
import { useEffect, useState } from "react";

const Button = ({ className, title, buttonType }) => {
  const [scrollY, SetScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      SetScrollY(window.scrollY);
    });
  }, [scrollY]);
  return (
    <>
      {buttonType == "bottomButton" ? (
        // scrollY > 680 ? (
          <button
            className={`bg-[#2a2e34] text-white px-8 py-4 rounded-full transition-all duration-700 ${scrollY > 680 ? "sticky -translate-y-0 bottom-10 left-20" : "translate-y-40"}  w-fit mx-auto ${className}`}
          >
            {title}
          </button>
        // ) : null
      ) : (
        <button
          className={`bg-[#2a2e34] text-white px-8 py-4 rounded-full ${className}`}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
