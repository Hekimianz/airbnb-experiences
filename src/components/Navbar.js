import React from "react";
import airbnbLogo from "/Users/aramhekimian/repos/airbnb-experiences/src/assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={airbnbLogo} alt="airbnb logo" />
    </nav>
  );
}
