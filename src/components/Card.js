import React from "react";
import star from "/Users/aramhekimian/repos/airbnb-experiences/src/assets/star.png";
export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}