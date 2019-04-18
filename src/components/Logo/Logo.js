import React from "react";

import bugerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const Logo = props => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={bugerLogo} alt="Burger-Builder" />
  </div>
);

export default Logo;
