import React from "react";

import { Link } from "react-router-dom";

//props.match.params.car grabs the :car from the url and allows us to use that
//I made a link to go back to the previous page, you could also use the HISTORY prop

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
