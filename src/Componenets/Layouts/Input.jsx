import React from "react";

const Input = ({ type, name, value, className, placeholder }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
