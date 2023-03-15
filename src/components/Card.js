import React from "react";
import star from "/Users/aramhekimian/repos/airbnb-experiences/src/assets/star.png";
export default function Card(props) {
  return (
    <div className="card--cont">
      <img className="card--img" src={`./images/${props.img}`} alt="" />
      <div className="card--reviews">
        <img className="card--star" src={star} alt="star icon" />
        <span className="card--score">
          {props.rating}
          <span className="gray">
            ({props.reviewCount}) • {props.location}
          </span>
        </span>
      </div>
      <p className="card--title">{props.title}</p>

      <p className="card--pricing">
        <span className="card--pricing-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
