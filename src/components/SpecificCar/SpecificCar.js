import React from "react";

import { Link } from "react-router-dom";

export default function SpecificCar(props) {
  return (
    <section>
      <Link to="/CarPage">
        <button>BACK</button>
      </Link>
      <div>{props.match.params.car}</div>
    </section>
  );
}
