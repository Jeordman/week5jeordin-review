import React from "react";
import { Link } from "react-router-dom";

export default function CarMapped({ car, index }) {
  //we destructured car and index off of props to clean up our code
  //this component makes adaptive links based on the car's index
  //this component also displays the car name and the car image
  return (
    <car>
      <section>{car.name}</section>
      <Link to={`/CarPage/${index}`}>
        <img src={car.image} />
      </Link>
    </car>
  );
}
