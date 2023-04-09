import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
const Breadcrumb = ({ title, page }) => {
  return (
    <div className="py-32">
      <h1 className="font-dm text-5xl font-bold">{title}</h1>
      <span className="flex items-center gap-2 pt-3 text-xs text-[#767676]">
        Home <HiOutlineChevronRight /> {page}
      </span>
    </div>
  );
};

export default Breadcrumb;
