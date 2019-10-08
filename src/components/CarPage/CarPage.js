import React, { Component } from "react";
import axios from "axios";

import "./CarPage.css";

import CarMapped from "../CarMapped/CarMapped";

export default class CarPage extends Component {
  constructor() {
    super();

    this.state = {
      cars: [],
      name: "",
      image: ""
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/cars")
      .then(res =>
        this.setState({
          cars: res.data
        })
      )
      .catch(err => console.log("YOU BROKE THE GET", err));
  };

  handleInput = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  addCar = () => {
    let { name, image } = this.state;
    axios
      .post("/api/cars", { name, image })
      .then(res =>
        this.setState({
          cars: res.data,
          name: "",
          image: ""
        })
      )
      .catch(err => console.log("Add broke", err));
  };

  render() {
    console.log(this.state);
    let { cars, name, image } = this.state;
    return (
      <article className="body-holder">
        <section>
          {cars.map((car, index) => (
            <CarMapped car={car} index={index} />
          ))}
        </section>

        <section>
          <input
            name="name"
            value={name}
            placeholder="Car Name"
            onChange={e => this.handleInput(e)}
          />
          <input
            name="image"
            value={image}
            placeholder="Image URL"
            onChange={e => this.handleInput(e)}
          />
          <button onClick={() => this.addCar()}>Create</button>
        </section>
      </article>
    );
  }
}
