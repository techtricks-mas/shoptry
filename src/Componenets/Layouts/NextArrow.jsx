import React from "react";
import { TfiArrowRight } from "react-icons/tfi";
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} -right-2 z-50 h-auto w-auto rounded-full bg-[#00000033] p-2 text-2xl text-white text-inherit before:content-none`}
      style={{ ...style }}
      onClick={onClick}
    >
      <TfiArrowRight className="text-white" />
    </div>
  );
};

export default NextArrow;
