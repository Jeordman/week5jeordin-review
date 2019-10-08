import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <section className="link-holder">
        <Link to={"/"}>
          <button id="link">Home</button>
        </Link>
        <Link to={`/random`}>
          <button id="link">GO TO RANDOM</button>
        </Link>
        <Link to={"/CarPage"}>
          <button id="link">CarPage</button>
        </Link>
      </section>
    </header>
  );
}
