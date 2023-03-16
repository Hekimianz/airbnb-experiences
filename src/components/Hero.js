import React from "react";
import gridImgs from "/Users/aramhekimian/repos/airbnb-experiences/src/assets/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={gridImgs} className="hero--photo" alt="" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
