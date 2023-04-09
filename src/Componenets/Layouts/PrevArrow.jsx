import React from "react";
import { TfiArrowLeft } from "react-icons/tfi";

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} -left-2 z-50 h-auto w-auto rounded-full bg-[#00000033] p-2 text-2xl text-white text-inherit before:content-none`}
      style={{ ...style }}
      onClick={onClick}
    >
      <TfiArrowLeft className="text-white" />
    </div>
  );
};

export default PrevArrow;
