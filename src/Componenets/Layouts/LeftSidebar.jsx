import React from "react";
import SidebarContent from "./SidebarContent";

const LeftSidebar = () => {
  return (
    <>
      <SidebarContent dropdown={false} />
      <SidebarContent dropdown={true} />
      <SidebarContent dropdown={true} />
    </>
  );
};

export default LeftSidebar;
