import "../css/sidebar.css";
import React from "react";

import Apple from "../images/icons/apple.svg";
import Android from "../images/icons/android.svg";
import PC from "../images/icons/pc.svg";
import Logo from "../images/icons/logoalt.svg";
function Sidebar() {
  return (
    <div className="sidebar">

<img src={Apple} alt="apple" width="50px" />
        <img src={PC} alt="pc" width="50px" />
        <img src={Android} alt="android" width="50px" />
        <img src={Apple} alt="apple" width="50px" />
    </div>
  );
}

export default Sidebar;
