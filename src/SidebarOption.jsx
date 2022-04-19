import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon, active }) {
  return (
    <>
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{title}</h2>
      </div>
      <div className={`mobile ${active && "sidebarOption--active"}`}>
        <Icon />
      </div>
    </>
  );
}

export default SidebarOption;
