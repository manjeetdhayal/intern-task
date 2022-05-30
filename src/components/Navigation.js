import React from "react";
import { NavBar } from "antd-mobile";

const Header = () => {
  return <NavBar onBack={console.log("goBack")}> Assignment </NavBar>;
};

export default Header;
