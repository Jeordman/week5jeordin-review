import React from "react";
import { Link } from "react-router-dom";

export default function CarMapped({ car, index }) {
  return (
    <car>
      <section>{car.name}</section>
      <Link to={`/CarPage/${index}`}>
        <img src={car.image} />
      </Link>
    </car>
  );
}
