import React from "react";

import bugerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={bugerLogo} alt="Burger-Builder" />
  </div>
);

export default Logo;
