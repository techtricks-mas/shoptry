import React from "react";

const Dropdown = ({ children, className, onClick, dropref }) => {
  return (
    <div className={className} onClick={onClick} ref={dropref}>
      {children}
    </div>
  );
};

export default Dropdown;
