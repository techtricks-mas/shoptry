import React from "react";

const Badge = ({ title }) => {
  return (
    <div className="absolute left-5 top-5 bg-[#262626] py-2 px-8 font-dm text-lg font-bold text-white">
      {title}
    </div>
  );
};

export default Badge;
