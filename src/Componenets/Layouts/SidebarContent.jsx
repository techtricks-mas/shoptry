import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Flex from "./Flex";
const SidebarContent = ({ dropdown }) => {
  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(dropdown);

  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      {drop ? (
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={showHandler}
        >
          <h3>Shop by Category</h3>
          {show ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      ) : (
        <div className="flex cursor-pointer items-center justify-between">
          <h3>Shop by Category</h3>
        </div>
      )}
      {show && (
        <div>
          <p>dfsdf</p>
          <p>dfsdf</p>
          <p>dfsdf</p>
          <p>dfsdf</p>
          <p>dfsdf</p>
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
