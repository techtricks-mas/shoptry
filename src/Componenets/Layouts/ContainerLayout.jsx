import React from "react";

const ContainerLayout = ({ children, className }) => {
  return (
    <div className={`max-w-container m-auto ${className}`}>{children}</div>
  );
};

export default ContainerLayout;
