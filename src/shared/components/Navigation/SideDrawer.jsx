import React from "react";
import { createPortal } from "react-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  const portalDetails = document.getElementById("drawer-hook");

  if (!props.show || !portalDetails) {
    return null;
  }

  return createPortal(
    <aside className="side-drawer" onClick={props.onClick}>
      {props.children}
    </aside>,
    portalDetails
  );
};

export default SideDrawer;
